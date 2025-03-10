'use client';
import CalendarSection from "../components/CalendarSection";
import JoinUsSection from "../components/JoinUsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-heading font-bold text-center mb-8 animate-fade-in">
          <span className="gradient-text drop-shadow-md">Welcome to qUALMS</span>
        </h1>
        
        {/* Other sections like research or events can remain or be re-arranged */}

        {/* Dynamic Calendar Section */}
        <CalendarSection />

        {/* Join Us Section */}
        <JoinUsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
