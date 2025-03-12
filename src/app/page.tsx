'use client';
import CalendarSection from "../components/CalendarSection";
import JoinUsSection from "../components/JoinUsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-heading font-extrabold text-center mb-8 animate-fade-in">
          <span className="gradient-text drop-shadow-md">Welcome to qUALMS</span>
        </h1>
        
        {/* Club Blurb Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-white-500 mb-4">
            qUALMS is MSU’s official student organization for undergraduate linguistics enthusiasts.
            We host monthly meetings, offer help hours, and organize annual conferences that celebrate the world of language.
          </p>
          <p className="text-lg text-gray-500 font-medium">
            Stay updated and join the conversation on 
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="underline ml-1">Discord</a>, 
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline ml-1">LinkedIn</a>, 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="underline ml-1">Instagram</a>, and 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="underline ml-1">X/Twitter</a>.
          </p>
        </div>
        
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
