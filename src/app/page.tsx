'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CalendarSection from "@/components/CalendarSection";
import FooterSection from "@/components/Footer";
import WhatWeDo from "@/components/WhatWeDo";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  const missionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [missionVisible, setMissionVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const observers = [
      { ref: missionRef, setter: setMissionVisible },
      { ref: aboutRef, setter: setAboutVisible },
      { ref: ctaRef, setter: setCtaVisible }
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return { observer, ref };
    });

    return () => {
      observerInstances.forEach(({ observer, ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <div className="relative">
        <div className="overflow-hidden">
          <BackgroundCarousel />
          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-40">
            <div className="text-center">
              <div className="inline-block mb-8 text-lavender">
                <h1 className="text-7xl lg:text-9xl font-heading font-extrabold animate-fade-in">
                  <span className="gradient-text drop-shadow-lg">qUALMS</span>
                </h1>
              </div>
              
              <div className="mb-10">
                <p className="text-2xl md:text-3xl font-heading text-white max-w-4xl mx-auto text-shadow">
                  q Undergraduate Association of Linguistics at Michigan State
                </p>
                <span className="text-sm md:text-base font-heading text-white italic text-shadow mt-2 inline-block">(q = quality)</span>
              </div>
             
              <div className="font-heading font-semibold flex flex-wrap gap-4 justify-center">
                <a href="/calendar" className="px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md">
                  View Events
                </a>
                <a href="/join" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-midnight-900 rounded-lg transition-all">
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider />
      </div>
      
      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        {/* Mission & About Section - Enhanced Design */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {/* Mission Statement */}
            <div 
              ref={missionRef}
              className={`group relative overflow-hidden bg-gradient-to-br from-lavender/15 to-lavender/5 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-2xl border-2 border-lavender/30 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(163,130,238,0.2)] hover:border-lavender/50 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-transparent opacity-50"></div>
              
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-lavender/10 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                {/* Header with icon-like accent */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-1.5 h-16 bg-gradient-to-b from-lavender via-lavender/70 to-lavender/40 rounded-full shadow-sm"></div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-extrabold text-lavender mb-2 tracking-tight">Our Mission</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-lavender to-lavender/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mission text */}
                <p className="text-2xl md:text-3xl artistic-text font-medium italic text-neutral-900 dark:text-neutral-100 leading-relaxed pl-6 border-l-2 border-lavender/30">
                  Fostering a passion for linguistics through community, education, and exploration.
                </p>
              </div>
            </div>
            
            {/* About Us */}
            <div 
              ref={aboutRef}
              className={`group relative overflow-hidden bg-slate-300/40 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-2xl border-2 border-ice-100/30 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:border-ice-100/50 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/30 dark:from-neutral-800/30 via-transparent to-transparent opacity-50"></div>
              
              {/* Decorative corner element */}
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-neutral-200/20 dark:from-neutral-700/20 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10">
                {/* Header with icon-like accent */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2.5 h-16 bg-lavender/70 rounded-full"></div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-heading font-extrabold text-neutral-900 dark:text-neutral-100 mb-2 tracking-tight">About Us</h2>
                    <div className="w-16 h-1 bg-lavender/70 rounded-full"></div>
                  </div>
                </div>
                
                {/* About text */}
                <div className="space-y-5 pl-6 border-l-4 border-lavender/70">
                  <p className="text-lg md:text-xl font-sans text-neutral-900 dark:text-neutral-100 leading-relaxed">
                    qUALMS is MSU's official student organization for undergraduate linguistics majors, minors, and friends. 
                    The club went dormant during COVID but after 5 years we are proud to announce that we are bringing it back!
                  </p>
                  <p className="text-lg md:text-xl font-sans text-neutral-900 dark:text-neutral-100 leading-relaxed">
                    We host regular meetings for undergraduates to discuss linguistics, promote linguistics on campus, and of course, hang out and have fun! 
                    We also host help hours, workshops, guest speakers, and annual conferences that celebrate the world of language.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <WhatWeDo />

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`mt-20 mb-16 text-center transition-all duration-500 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-center text-3xl md:text-4xl font-heading font-bold mb-10 text-neutral-900 dark:text-neutral-100">Interested in what we do?</h2>
          
          <a href="/join" className="inline-block px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md text-xl font-heading">
            Join us!
          </a>
        </div>

        <FooterSection />
      </div>
    </div>
  );
}