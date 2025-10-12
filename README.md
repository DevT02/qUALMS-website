# qUALMS Website

The official website for Michigan State University's Undergraduate Linguistics Club (qUALMS). Built with Next.js and designed to showcase our club's activities, events, and community.

## What's Here

**Home** – Our landing page with club info and upcoming events  
**About** – Learn about qUALMS and our mission  
**MSULC 2025** – Details about our annual linguistics conference  
**Meet the Board** – Get to know our executive team  
**Calendar** – See what events we have coming up  
**Join Us** – Sign up to get involved  

## Getting Started

1. Clone this repo
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the dev server
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stuff

- **Next.js 15** with TypeScript
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Custom CSS** for some special effects

## Design

We went with a clean, academic feel using:
- **Ice blue** backgrounds for a fresh look
- **Lavender** (#A382EE) as our main accent color  
- **Midnight blue** for text and contrast
- **Futura** and other fonts for that linguistics vibe

The site is fully responsive and should work great on phones, tablets, and desktops.

## Calendar Integration

The calendar pulls events from our shared Google Calendar. To set this up, you'll need to:

1. Create a Google Service Account in Google Cloud Console
2. Enable the Google Calendar API
3. Share your calendar with the service account email
4. Add these environment variables to `.env.local`:

```bash
GOOGLE_CALENDAR_ID=your_calendar_id@group.calendar.google.com
GOOGLE_SERVICE_ACCOUNT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_TIMEZONE=America/Detroit
```

The API caches responses for 5 minutes to keep things fast.

## Components

Most of the interesting stuff is in `/src/components/`:
- **CalendarSection** – The interactive calendar
- **AnimatedLinguisticText** – Cycles through "linguistics" in different languages
- **Header/Footer** – Navigation and social links
- **JoinUsSection** – Email signup form

---

© 2025 qUALMS • Michigan State University