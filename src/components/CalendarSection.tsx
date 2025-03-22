'use client';
import React, { useState } from "react";

export default function CalendarSection() {
  // Current date (for highlighting today if it’s in the displayed month)
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  // State for the displayed month/year
  const [displayedYear, setDisplayedYear] = useState(currentYear);
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);

  // Example events (feel free to expand/replace with your actual events)
  const events = [
    {
      date: new Date(2025, 0, 29),  // Feb 5, 2025 (months are 0-indexed in JavaScript)
      title: "Springticipation",
      description: "qUALMS Spring Kickoff at Springticipation!",
      location: "STEM Building, 2200",
      time: "6:00 PM - 8:30 PM",
    },
    {
      date: new Date(2025, 1, 5),  // Feb 5, 2025 (months are 0-indexed in JavaScript)
      title: "Meeting #1",
      description: "Spring welcome back and team building",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 1, 12),  // Feb 12, 2025
      title: "Meeting #2",
      description: "Dr. Schmitt's presentation and Conlanging",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 1, 19),  // Feb 19, 2025
      title: "Meeting #3",
      description: "Member presentations",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 1, 26),  // Feb 26, 2025
      title: "Meeting #4",
      description: "Dr. Wagner's presentation and Conlanging",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 2, 12),  // March 12, 2025
      title: "Meeting #5",
      description: "St. Patrick's Day special",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 2, 19),  // March 19, 2025
      title: "Meeting #6",
      description: "Dr. Borgeson's presentation and Conlanging",
      location: "Wells Hall, B104",
      time: "5:00 PM - 6:30 PM",
    },
    {
      date: new Date(2025, 3, 6),  // April 6, 2025
      title: "Paint the Rock with qUALMS",
      description: "Join us as we camp and paint the rock with qUALMS colors",
      location: "The Rock",
      time: "6:00 PM - 10:00 PM",
    },
    {
      date: new Date(2025, 3, 19),  // April 19, 2025
      title: "MSULC 2025",
      description: "Michigan State Undergraduate Linguistics Conference",
      location: "Multicultural Center",
      time: "11:00 AM - 5:00 PM",
    }
  ];

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
    <section className="mt-16 p-8 bg-white/50 backdrop-blur-lg rounded-lg shadow-md animate-fade-in w-4/5 max-w-2l mx-auto">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6 px-2">
        <button
          onClick={handlePrevMonth}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-lavender/30 text-midnight-800 hover:bg-lavender/50 transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Previous month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg>
        </button>
        
        <h2 className="text-3xl calendar-heading vibrant-heading">
          {monthNames[displayedMonth]} {displayedYear}
        </h2>
        
        <button
          onClick={handleNextMonth}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-lavender/30 text-midnight-800 hover:bg-lavender/50 transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Next month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-2 text-center font-medium mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm artistic-text text-midnight-600 font-bold">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center font-medium">
        {weeks.map((week, weekIndex) =>
          week.map((day, dayIndex) => {
            const highlightToday = isToday(day);
            const eventPresent = hasEvent(day);

            return (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`p-2 border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg relative ${
                  highlightToday
                    ? "bg-gradient-to-r from-lavender to-midnight-500 text-white rounded-full animate-bounce-subtle"
                    : eventPresent
                    ? "bg-accent/20 text-midnight-900 font-bold"
                    : "text-gray-800 hover:bg-ice-100/80"
                }`}
              >
                {day ? day : ""}
                {day && eventPresent && (
                  <span className="absolute bottom-0 right-0 h-2 w-2 bg-accent rounded-full"></span>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Events List (only for displayed month) */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl vibrant-heading">Events this month</h3>
        {displayedEvents.length > 0 ? (
          displayedEvents.map((event, index) => (
            <div
              key={index}
              className="p-4 bg-ice-100/80 rounded-lg border border-lavender/20 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-midnight-900">{event.title}</h4>
                  <p className="text-sm text-midnight-700">{event.description}</p>
                  <p className="text-xs mt-2">
                    <span className="font-medium">
                      {event.date.toLocaleDateString()}
                    </span>{" "}
                    • <span className="ml-1">{event.time}</span> •{" "}
                    <span className="ml-1">{event.location}</span>
                  </p>
                </div>
                {/* You could display the date here or remove if redundant */}
                <span className="text-sm bg-lavender/20 px-2 py-1 rounded text-midnight-700">
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
