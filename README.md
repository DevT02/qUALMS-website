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

Calendar configuration is currently hardcoded in the project (service account credentials, calendar ID, timezone, and client cache TTL).

The API caches responses for 5 minutes to keep things fast, and the client-side month cache is set to 15 minutes.

## Components

Most of the interesting stuff is in `/src/components/`:
- **CalendarSection** – The interactive calendar
- **AnimatedLinguisticText** – Cycles through "linguistics" in different languages
- **Header/Footer** – Navigation and social links
- **JoinUsSection** – Email signup form

---

© 2025 qUALMS • Michigan State University
