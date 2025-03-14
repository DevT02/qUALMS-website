'use client';
import Image from "next/image";
import CalendarSection from "../components/CalendarSection";
import JoinUsSection from "../components/JoinUsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 text-lavender">
            <h1 className="text-6xl lg:text-8xl font-heading font-extrabold animate-fade-in">
              <span className="gradient-text drop-shadow-lg">qUALMS</span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-2xl text-white-500 mb-8 max-w-3xl mx-auto">
            Michigan State University's official undergraduate linguistics club
          </p>
          
          <div className="font-semibold flex flex-wrap gap-4 justify-center">
            <a href="#calendar" className="px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md">
              View Events
            </a>
            <a href="#join" className="px-8 py-3 border-2 border-ice-300/50 hover:border-lavender hover:bg-lavender/10 rounded-lg transition-all">
              Join Us
            </a>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16 p-8 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10">
          <h2 className="text-2xl font-semibold mb-4 text-lavender">Our Mission</h2>
          <p className="text-lg italic">
            Fostering passion for linguistics through community, education, and exploration
          </p>
        </div>
        
        {/* Club Info Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-ice-800/70">About Us</h2>
          <p className="text-xl text-white-500 mb-8">
            qUALMS is MSU's official student organization for undergraduate linguistics enthusiasts.
            We host monthly meetings, offer help hours, and organize annual conferences that celebrate the world of language.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-12">
            <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
              <h3 className="text-xl font-medium text-lavender mb-3">Monthly Meetings</h3>
              <p>Join us for discussions, guest speakers, and linguistic fun</p>
            </div>
            <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
              <h3 className="text-xl font-medium text-lavender mb-3">Study Groups</h3>
              <p>Get help with coursework and collaborate with fellow students</p>
            </div>
            <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
              <h3 className="text-xl font-medium text-lavender mb-3">Events</h3>
              <p>Participate in our annual conference and social gatherings</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex py-5 items-center mb-16" id="calendar">
          <div className="flex-grow border-t border-lavender/40"></div>
          <span className="flex-shrink mx-4 text-ice-500/70 font-medium">Get Involved</span>
          <div className="flex-grow border-t border-lavender/40"></div>
        </div>
        
        <CalendarSection />

        <div className="relative flex py-5 items-center my-16" id="join">
          <div className="flex-grow border-t border-lavender/40"></div>
          <span className="flex-shrink mx-4 text-ice-500/70 font-medium">Contact Us</span>
          <div className="flex-grow border-t border-lavender/40"></div>
        </div>

        {/* Join Us Section */}
        <JoinUsSection />

        {/* Footer with Social Links */}
        <footer className="mt-16 pt-8 border-t border-lavender/20 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 bg-slate-500 hover:bg-lavender text-ice-100 hover:text-white rounded-lg transition-all shadow-md border border-lavender/30">
              <Image src="/logos/discord_logo.svg" alt="Discord" width={20} height={20} className="mr-2" />
              <span className="font-medium">Discord</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 bg-slate-500 hover:bg-lavender text-ice-100 hover:text-white rounded-lg transition-all shadow-md border border-lavender/30">
              <Image src="/logos/linkedin_logo.png" alt="LinkedIn" width={20} height={20} className="mr-2" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 bg-slate-500 hover:bg-lavender text-ice-100 hover:text-white rounded-lg transition-all shadow-md border border-lavender/30">
              <Image src="/logos/instagram_logo.svg" alt="Instagram" width={20} height={20} className="mr-2" />
              <span className="font-medium">Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 bg-slate-500 hover:bg-lavender text-ice-100 hover:text-white rounded-lg transition-all shadow-md border border-lavender/30">
              <Image src="/logos/x_logo.svg" alt="X/Twitter" width={20} height={20} className="mr-2" />
              <span className="font-medium">X/Twitter</span>
            </a>
          </div>
          <p className="text-sm text-lavender/80">
            © {new Date().getFullYear()} qUALMS • Michigan State University
          </p>
        </footer>
      </div>
    </div>
  );
}