'use client';
import React, { useState } from "react";

type ApiEvent = {
  id: string;
  title: string;
  description: string;
  location: string;
  start: string | null;
  end: string | null;
  allDay: boolean;
  timeZone: string;
};

type UiEvent = {
  date: Date;
  title: string;
  description: string;
  location: string;
  time: string;
};

// Cache month results client-side to avoid repeated fetches (resets on page reload)
type CachedMonth = { timestamp: number; events: UiEvent[] };
const calendarMonthCache = new Map<string, CachedMonth>();
// 0 = never expire during a single page session; set to ms to enable TTL
const CACHE_TTL_MS = Number(process.env.NEXT_PUBLIC_CALENDAR_CACHE_TTL_MS || '0');

export default function CalendarSection() {
  const googleCalendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
  const subscribeUrl = googleCalendarId
    ? `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(googleCalendarId)}`
    : null;

  // Current date (for highlighting today if it’s in the displayed month)
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  // State for the displayed month/year
  const [displayedYear, setDisplayedYear] = useState(currentYear);
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);

  const [isMobile, setIsMobile] = useState(false);
  const [events, setEvents] = useState<UiEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Locally curated/static events kept alongside Google Calendar events
  const staticEvents: UiEvent[] = [
    {
      date: new Date(2025, 0, 29),
      title: "Springticipation",
      description: "qUALMS Spring Kickoff at Springticipation!",
      location: "STEM Building, 2200",
      time: "6:00 PM - 8:30 PM",
    },
    {
      date: new Date(2025, 1, 5),
      title: "Meeting #1",
      description: "Spring welcome back and team building",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 1, 12),
      title: "Meeting #2",
      description: "Dr. Schmitt's presentation and Conlanging",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 1, 19),
      title: "Meeting #3",
      description: "Member presentations",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 1, 26),
      title: "Meeting #4",
      description: "Dr. Wagner's presentation and Conlanging",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 2, 12),
      title: "Meeting #5",
      description: "St. Patrick's Day special",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 2, 19),
      title: "Meeting #6",
      description: "Dr. Borgeson's presentation and Conlanging",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 2, 26),
      title: "Meeting #7",
      description: "Jeopardy night!",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 3, 12),
      title: "Paint the Rock with qUALMS",
      description: "Join us as we camp and paint the rock with qUALMS colors",
      location: "The Rock",
      time: "6:00 PM - 10:00 PM",
    },
    {
      date: new Date(2025, 3, 19),
      title: "MSULC 2025",
      description: "Michigan State Undergraduate Linguistics Conference",
      location: "Wells Hall 3rd Floor",
      time: "11:00 AM - 5:00 PM",
    },
    {
      date: new Date(2025, 3, 23),
      title: "Meeting #8",
      description: "Final meeting of the semester",
      location: "Wells Hall, B104",
      time: "5 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 8, 10),
      title: "First meeting",
      description: "Come meet us at the first meeting of the semester!",
      location: "Wells Hall A226",
      time: "5 PM - 6 PM",
    },
    {
      date: new Date(2025, 8, 24),
      title: "Meeting",
      description: "Come meet us at our biweekly meeting!",
      location: "Wells Hall A226",
      time: "5 PM - 6 PM",
    },
  ];

  function dedupeEvents(preferred: UiEvent[], fallbacks: UiEvent[]) {
    const keyFor = (e: UiEvent) => `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}::${e.title.trim().toLowerCase()}`;
    const map = new Map<string, UiEvent>();
    fallbacks.forEach((e) => map.set(keyFor(e), e));
    preferred.forEach((e) => map.set(keyFor(e), e));
    return Array.from(map.values());
  }

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  React.useEffect(() => {
    const controller = new AbortController();
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      const monthKey = `${displayedYear}-${displayedMonth}`;

      // Serve from cache if present and valid
      const cached = calendarMonthCache.get(monthKey);
      if (cached && (CACHE_TTL_MS === 0 || (Date.now() - cached.timestamp) < CACHE_TTL_MS)) {
        setEvents(cached.events);
        setLoading(false);
        return;
      }
      try {
        const start = new Date(displayedYear, displayedMonth, 1, 0, 0, 0);
        const end = new Date(displayedYear, displayedMonth + 1, 0, 23, 59, 59);
        const url = new URL('/api/calendar/events', window.location.origin);
        url.searchParams.set('timeMin', start.toISOString());
        url.searchParams.set('timeMax', end.toISOString());
        const res = await fetch(url.toString(), { signal: controller.signal });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || 'Failed to load events');
        }
        const json = await res.json();
        const apiEvents: ApiEvent[] = json.events || [];

        const toTimeRange = (s: string | null, e: string | null, allDay: boolean) => {
          if (allDay) return 'All day';
          const opts: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };
          const sd = s ? new Date(s) : null;
          const ed = e ? new Date(e) : null;
          if (sd && ed) return `${sd.toLocaleTimeString([], opts)} - ${ed.toLocaleTimeString([], opts)}`;
          if (sd) return sd.toLocaleTimeString([], opts);
          return '';
        };

        const toDate = (s: string | null, allDay: boolean) => {
          if (!s) return new Date(NaN);
          if (allDay && s.length === 10) return new Date(`${s}T00:00:00`);
          return new Date(s);
        };

        const mapped: UiEvent[] = apiEvents.map((ev) => ({
          date: toDate(ev.start, ev.allDay),
          title: ev.title,
          description: ev.description,
          location: ev.location,
          time: toTimeRange(ev.start, ev.end, ev.allDay),
        }));

        // Merge static and API events; prefer API when same date+title
        const combined = dedupeEvents(mapped, staticEvents);
        setEvents(combined);
        calendarMonthCache.set(monthKey, { timestamp: Date.now(), events: combined });
      } catch (e) {
        const err = e as any;
        const message = (err && err.message) ? String(err.message) : '';
        const isAbort = (err && (err.name === 'AbortError')) || /aborted/i.test(message);
        if (isAbort) {
          // Ignore aborts from rapid navigation/unmount; keep existing events and no error
          return;
        }
        setError(message || 'Failed to load events');
        // Fallback to static events if API fails
        setEvents(staticEvents);
        calendarMonthCache.set(monthKey, { timestamp: Date.now(), events: staticEvents });
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
    return () => controller.abort();
  }, [displayedYear, displayedMonth]);

  // Functions to navigate months
  const handleNextMonth = () => {
    if (displayedMonth === 11) {
      // Go to January of the next year
      setDisplayedMonth(0);
      setDisplayedYear(displayedYear + 1);
    } else {
      setDisplayedMonth(displayedMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (displayedMonth === 0) {
      // Go to December of the previous year
      setDisplayedMonth(11);
      setDisplayedYear(displayedYear - 1);
    } else {
      setDisplayedMonth(displayedMonth - 1);
    }
  };

  // Determine first day and number of days in the displayed month
  const firstDayOfMonth = new Date(displayedYear, displayedMonth, 1).getDay();
  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();

  // Build the weeks array
  const weeks = [];
  let week = [];

  // Fill initial blanks for the first week
  for (let i = 0; i < firstDayOfMonth; i++) {
    week.push(null);
  }

  // Fill the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  // Fill in any remaining blanks for the last week
  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  // Check if this day is in the displayed month/year
  // AND if it matches today's date
  const isToday = (day: number | null) => {
    return (
      day &&
      displayedYear === currentYear &&
      displayedMonth === currentMonth &&
      day === currentDate
    );
  };

  // Check if a date has events (in the displayed month/year)
  const hasEvent = (day: number | null) => {
    if (!day) return false;
    return events.some(
      (event) =>
        event.date.getFullYear() === displayedYear &&
        event.date.getMonth() === displayedMonth &&
        event.date.getDate() === day
    );
  };

  // Get events for the currently displayed month
  const displayedEvents = events.filter(
    (event) =>
      event.date.getFullYear() === displayedYear &&
      event.date.getMonth() === displayedMonth
  );

  // For displaying the month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section className="mt-8 sm:mt-16 p-4 sm:p-8 bg-white/50 backdrop-blur-lg rounded-lg shadow-md animate-fade-in w-full sm:w-4/5 md:w-5/6 lg:w-11/12 max-w-6xl mx-auto">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 px-1 sm:px-2">
        <button
          onClick={handlePrevMonth}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lavender/30 text-midnight-800 hover:bg-lavender/50 transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Previous month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg>
        </button>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl calendar-heading vibrant-heading">
          {monthNames[displayedMonth]} {displayedYear}
        </h2>
        
        <button
          onClick={handleNextMonth}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-lavender/30 text-midnight-800 hover:bg-lavender/50 transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Next month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {subscribeUrl ? (
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 px-1 sm:px-2">
          <span className="text-xs sm:text-sm text-midnight-700">
            Subscribe to updates
          </span>
          <a
            href={subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-midnight-700 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-midnight-800"
            aria-label="Subscribe to this calendar in Google Calendar"
          >
            Subscribe in Google Calendar
          </a>
        </div>
      ) : null}

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-medium mb-1 sm:mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={day+i} className="text-xs sm:text-sm artistic-text text-midnight-600 font-bold">
            {!isMobile ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i] : day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center font-medium">
        {weeks.map((week, weekIndex) =>
          week.map((day, dayIndex) => {
            const highlightToday = isToday(day);
            const eventPresent = hasEvent(day);

            return (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`p-1 sm:p-2 text-xs sm:text-base border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg relative ${
                  highlightToday
                    ? "bg-gradient-to-r from-lavender to-midnight-500 text-white rounded-full animate-bounce-subtle"
                    : eventPresent
                    ? "bg-accent/20 text-midnight-900 font-bold"
                    : "text-gray-800 hover:bg-ice-100/80"
                }`}
              >
                {day ? day : ""}
                {day && eventPresent && (
                  <span className="absolute bottom-0 right-0 h-1 w-1 sm:h-2 sm:w-2 bg-accent rounded-full"></span>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Events List (only for displayed month) */}
      <div className="mt-4 sm:mt-8 space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl vibrant-heading">Events this month</h3>
        {loading ? (
          <p className="text-midnight-800">Loading events…</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : displayedEvents.length > 0 ? (
          displayedEvents.map((event, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 bg-ice-100/80 rounded-lg border border-lavender/20 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div className="mb-2 sm:mb-0">
                  <h4 className="font-bold text-midnight-900">{event.title}</h4>
                  <p className="text-sm text-midnight-700">{event.description}</p>
                  <p className="text-xs mt-2">
                    <span className="font-medium">
                      {event.date.toLocaleDateString()}
                    </span>{" "}
                    {event.time ? <> • <span className="ml-1">{event.time}</span></> : null}
                    {event.location ? <> • <span className="ml-1">{event.location}</span></> : null}
                  </p>
                </div>
                {/* Date display made responsive */}
                <span className="text-sm bg-lavender/20 px-2 py-1 rounded text-midnight-700 self-end sm:self-auto">
                  {event.date.getDate()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-midnight-800">No events this month.</p>
        )}
      </div>
    </section>
  );
}
