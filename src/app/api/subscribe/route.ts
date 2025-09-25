import { NextRequest, NextResponse } from 'next/server';

// in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per 15 minutes

  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    //email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    //rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Use environment variables for the endpoint
    const mailerliteEndpoint = process.env.MAILERLITE_ENDPOINT; // change this to the actual endpoint in .env. Not setting here as code is public.
    
    if (!mailerliteEndpoint || !mailerliteEndpoint.startsWith('http')) {
      throw new Error('MAILERLITE_ENDPOINT environment variable is not set or invalid');
    }
    
    // Use the existing form submission endpoint with proper field structure
    const formData = new FormData();
    formData.append('fields[email]', email);
    formData.append('ml-submit', '1');
    formData.append('anticsrf', 'true');

    const response = await fetch(mailerliteEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'User-Agent': 'qUALMS-Website/1.0',
        'Referer': request.headers.get('referer') || process.env.SITE_URL || 'https://qualmsmsu.com',
      },
    });

    const responseText = await response.text();
    
    // Try to parse JSON response from MailerLite
    let mailerliteResponse;
    try {
      mailerliteResponse = JSON.parse(responseText);
    } catch {
      // If not JSON, assume success for non-200 status codes
      if (!response.ok) {
        throw new Error(`MailerLite API error: ${response.status}`);
      }
    }

    // Check if MailerLite returned an error
    if (mailerliteResponse && !mailerliteResponse.success) {
      const errorMessage = mailerliteResponse.errors?.fields?.email?.[0] || 'Subscription failed';
      throw new Error(errorMessage);
    }

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed to our mailing list!' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}