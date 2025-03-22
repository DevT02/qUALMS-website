'use client';
import Image from "next/image";
import CalendarSection from "@/components/CalendarSection";
import JoinUsSection from "@/components/JoinUsSection";
import FooterSection from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";

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
          
          <div className = "mb-6">
            <p className="text-2xl md:text-2xl text-white-500 max-w-3xl mx-auto">
              q Undergraduate Association of Linguistics at Michigan State
            </p>
            <span className = "text-sm md:text-sm text-white-500 italic">(q = quality)</span>
          </div>
         
          
          <div className="font-semibold flex flex-wrap gap-4 justify-center">
            <a href="/calendar" className="px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md">
              View Events
            </a>
            <a href="/join" className="px-8 py-3 border-2 border-ice-300/50 hover:border-lavender hover:bg-lavender/10 rounded-lg transition-all">
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
        </div>
          
        <WhatWeDo />

        <h2 className = "text-center text-3xl font-semibold mb-10 text-ice-800/70">Interested in what we do?</h2>

        <div className = "mx-auto max-w-3xl text-center">
          <a href="/join" className="px-8 py-3 mx-auto bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md text-xl animate-bounce-subtle">
                Join us!
          </a>
        </div>

        <FooterSection />
      </div>
    </div>
  );
}