import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";

// Simple in-memory per-IP rate limiter (fixed window)
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || '30'); // requests
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || '60000'); // 1 minute
const MAX_RANGE_MS = Number(process.env.CALENDAR_MAX_RANGE_MS || String(1000 * 60 * 60 * 24 * 93)); // ~3 months
const ipBuckets = new Map<string, { windowStart: number; count: number }>();

function getClientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return (
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

function checkRateLimit(ip: string): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket) {
    ipBuckets.set(ip, { windowStart: now, count: 1 });
    return { limited: false, retryAfter: 0 };
  }
  if (now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
    bucket.windowStart = now;
    bucket.count = 1;
    return { limited: false, retryAfter: 0 };
  }
  bucket.count += 1;
  if (bucket.count > RATE_LIMIT_MAX) {
    const retryAfter = Math.max(1, Math.ceil((bucket.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000));
    return { limited: true, retryAfter };
  }
  return { limited: false, retryAfter: 0 };
}

type GoogleEvent = {
  id: string;
  summary?: string;
  description?: string;
  location?: string;
  start: { dateTime?: string; date?: string; timeZone?: string };
  end: { dateTime?: string; date?: string; timeZone?: string };
};

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  // Rate limit first to protect the endpoint
  const ip = getClientIp(request);
  const rl = checkRateLimit(ip);
  if (rl.limited) {
    const resp = NextResponse.json({ error: 'Rate limit exceeded. Try again later.' }, { status: 429 });
    resp.headers.set('Retry-After', String(rl.retryAfter));
    resp.headers.set('Cache-Control', 'no-store');
    return resp;
  }

  const { searchParams } = new URL(request.url);

  const timeMin = searchParams.get("timeMin");
  const timeMax = searchParams.get("timeMax");
  const maxResults = searchParams.get("maxResults") || "2500";
  const orderBy = searchParams.get("orderBy") || "startTime";
  const singleEvents = searchParams.get("singleEvents") || "true";
  const timeZone = searchParams.get("timeZone") || process.env.GOOGLE_CALENDAR_TIMEZONE || "America/Detroit";

  if (!timeMin || !timeMax) {
    return NextResponse.json(
      { error: "Missing required query params: timeMin, timeMax" },
      { status: 400 }
    );
  }

  // Guard against overly-large ranges to avoid heavy upstream calls
  const minTs = Date.parse(timeMin);
  const maxTs = Date.parse(timeMax);
  if (!Number.isFinite(minTs) || !Number.isFinite(maxTs) || maxTs < minTs) {
    return NextResponse.json(
      { error: "Invalid timeMin/timeMax range" },
      { status: 400 }
    );
  }
  if (maxTs - minTs > MAX_RANGE_MS) {
    return NextResponse.json(
      { error: `Requested range too large. Max ${(MAX_RANGE_MS / (1000*60*60*24)).toFixed(0)} days.` },
      { status: 400 }
    );
  }

  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const serviceAccountPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!calendarId || !serviceAccountEmail || !serviceAccountPrivateKey) {
    return NextResponse.json(
      { error: "Server not configured: GOOGLE_CALENDAR_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY required" },
      { status: 500 }
    );
  }

  const url = new URL(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`);
  url.searchParams.set("timeMin", timeMin);
  url.searchParams.set("timeMax", timeMax);
  url.searchParams.set("maxResults", maxResults);
  url.searchParams.set("orderBy", orderBy);
  url.searchParams.set("singleEvents", singleEvents);
  url.searchParams.set("showDeleted", "false");
  url.searchParams.set("timeZone", timeZone);

  try {
    const client = new JWT({
      email: serviceAccountEmail,
      key: serviceAccountPrivateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const { token } = await client.getAccessToken();
    if (!token) {
      return NextResponse.json(
        { error: "Failed to obtain Google access token" },
        { status: 502 }
      );
    }

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
      // Let Next.js cache at the edge briefly; responses will include SWR headers too
      next: { revalidate: 300 },
    });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `Google API error: ${res.status} ${text}` },
        { status: 502 }
      );
    }
    const data = await res.json();

    const events: GoogleEvent[] = Array.isArray(data.items) ? data.items : [];

    // Normalize for the client
    const normalized = events.map((ev) => {
      const rawTitle = (ev.summary || "").trim();
      const rawDesc = (ev.description || "").trim();

      // Optional: allow a "Description:" line to set display description; otherwise use raw
      let parsedDescription = "";
      if (rawDesc) {
        for (const line of rawDesc.split(/\r?\n/)) {
          const mDesc = line.match(/^\s*description\s*:\s*(.*)$/i);
          if (mDesc && !parsedDescription) parsedDescription = (mDesc[1] || "").trim();
        }
      }

      const descSource = parsedDescription || rawDesc;
      const descFirstLine = descSource.split(/\r?\n/).find((l) => l.trim().length > 0) || "";
      const bestTitle = rawTitle || descFirstLine || ev.location || "Event";

      return {
        id: ev.id,
        title: bestTitle,
        description: descSource,
        location: (ev.location || "").trim(),
        start: ev.start?.dateTime || ev.start?.date || null,
        end: ev.end?.dateTime || ev.end?.date || null,
        allDay: Boolean(ev.start?.date && !ev.start?.dateTime),
        timeZone,
      };
    });

    const response = NextResponse.json({ events: normalized });
    // Add cache headers for CDN/proxy caches
    response.headers.set("Cache-Control", "s-maxage=300, stale-while-revalidate=3600");
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Unknown error" },
      { status: 500 }
    );
  }
}


