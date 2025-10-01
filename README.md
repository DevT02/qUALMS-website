# qUALMS Website 🗣️

A modern, responsive website for Michigan State University's Undergraduate Linguistics Club (qUALMS)

## 🛠️ Tech Stack
- Next.js 15 with TailwindCSS and TypeScript.
- Also incorporated some custom CSS animations + Framer Motion

## 📄 Pages
**🏠 Home** – Landing page with mission statement and upcoming events  
**ℹ️ About** – Club history and information  
**📖 MSULC 2025** – Information about the upcoming linguistics conference  
**👥 Meet the Eboard** – Profiles of the executive board members  
**🗓️ Calendar** – Interactive calendar showing upcoming events  
**📸 Gallery** – Photo gallery of past events  

## 🚀 Installation

1. Clone the repository.  
2. Install dependencies:  
   `npm install`  
3. Start the development server:  
   `npm run dev`  
4. Open [http://localhost:3000](http://localhost:3000) in your browser.  

## 🎨 Project Structure

### 🎨 Design Elements

**Color Palette:**  
- **Ice** – "Baby blue" for backgrounds and highlights  
- **Lavender** (#A382EE) – Primary accent color  
- **Midnight** – Dark blues for depth and contrast  

**Typography:**  

Lots of fonts, from Futura to Pacifico and various international fonts for the language animation  

📱 **Responsive Design**

The website (should soon) be fully responsive and optimized for all devices!

## 🧩 Components

- **Header** – Navigation with animated linguistics text  
- **Footer** – Social media links and copyright information  
- **CalendarSection** – Interactive calendar with event listings  
- **JoinUsSection** – Email signup for club membership  
- **AnimatedLinguisticText** – Text that cycles through "linguistics" in various languages  

## 🔜 Future Enhancements

- Resources section for linguistics materials  
- Blog/news section for club updates
- More soon!

© 2025 qUALMS • Michigan State University

## 🔗 Google Calendar Integration

The calendar page fetches events from a shared Google Calendar via the Events REST API. It now uses a Google Service Account (JWT), not an API key. Set the following environment variables in `.env.local`:

```bash
GOOGLE_CALENDAR_ID=your_calendar_id@group.calendar.google.com
GOOGLE_SERVICE_ACCOUNT_EMAIL=service-account-name@project-id.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
# Optional (defaults to America/Detroit)
GOOGLE_CALENDAR_TIMEZONE=America/Detroit
```

Details:
- API route: `/api/calendar/events` requires `timeMin` and `timeMax` ISO strings.
- Responses are cached for 5 minutes with stale-while-revalidate for 1 hour.
- Share the target Google Calendar with the service account email with at least "See all event details" permission (the calendar does not need to be public).
- In Google Cloud Console: enable "Google Calendar API" on the project that owns the service account.
