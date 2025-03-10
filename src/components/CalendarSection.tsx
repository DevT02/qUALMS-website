'use client';
import React from "react";

export default function CalendarSection() {
  // Get today's date info
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexed
  const currentDate = today.getDate();

  // Sample events - add more events as needed
  const events = [
    {
      date: new Date(currentYear, currentMonth, 15),
      title: "Guest Speaker: Dr. Eleanor Davis",
      description: "Sociolinguistics in Digital Spaces",
      location: "Wells Hall B243",
      time: "3:00 PM - 4:30 PM"
    },
    {
      date: new Date(currentYear, currentMonth, 22),
      title: "Workshop: Phonetic Analysis",
      description: "Learn to use Praat software",
      location: "Digital Scholarship Lab",
      time: "2:00 PM - 4:00 PM"
    }
  ];

  // Determine first day and number of days in the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); 
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Build weeks array
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

  // Check if a date has events
  const hasEvent = (day: number) => {
    return events.some(event => event.date.getDate() === day);
  };

  // Get event for a specific day
  const getEvent = (day: number) => {
    return events.find(event => event.date.getDate() === day);
  };

  return (
    <section className="mt-16 p-8 bg-white/50 backdrop-blur-lg rounded-lg shadow-md animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-3xl calendar-heading animate-pulse-subtle">
          {today.toLocaleString("default", { month: "long" })} {currentYear}
        </h2>
      </div>
      
      <div className="grid grid-cols-7 gap-2 text-center font-medium">
        {/* Weekday Headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-sm artistic-text text-midnight-600 font-bold">
            {day}
          </div>
        ))}
        
        {/* Calendar Days */}
        {weeks.map((week, weekIndex) =>
          week.map((day, dayIndex) => (
            <div
              key={`${weekIndex}-${dayIndex}`}
              className={`p-2 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:z-10 relative ${
                day === currentDate 
                ? "bg-gradient-to-r from-lavender to-midnight-500 text-white rounded-full animate-bounce-subtle" 
                : hasEvent(day as number) 
                  ? "bg-accent/20 text-midnight-900 font-bold" 
                  : "text-gray-800 hover:bg-ice-100/80"
              }`}
            >
              {day}
              {day && hasEvent(day) && (
                <span className="absolute bottom-0 right-0 h-2 w-2 bg-accent rounded-full"></span>
              )}
            </div>
          ))
        )}
      </div>
      
      {/* Events List */}
      <div className="mt-8 space-y-4">
        <h3 className="text-xl vibrant-heading">Upcoming Events</h3>
        {events.map((event, index) => (
          <div key={index} className="p-4 bg-ice-100/80 rounded-lg border border-lavender/20 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-midnight-900">{event.title}</h4>
                <p className="text-sm text-midnight-700">{event.description}</p>
                <p className="text-xs mt-2">
                  <span className="font-medium">{event.date.toLocaleDateString()}</span> • 
                  <span className="ml-1">{event.time}</span> • 
                  <span className="ml-1">{event.location}</span>
                </p>
              </div>
              <span className="text-sm bg-lavender/20 px-2 py-1 rounded text-midnight-700">
                {event.date.getDate()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}