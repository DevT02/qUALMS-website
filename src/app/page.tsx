'use client';
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CalendarSection from "@/components/CalendarSection";
import JoinUsSection from "@/components/JoinUsSection";
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
                <p className="text-2xl md:text-3xl text-white max-w-4xl mx-auto text-shadow">
                  q Undergraduate Association of Linguistics at Michigan State
                </p>
                <span className="text-sm md:text-base text-white italic text-shadow mt-2 inline-block">(q = quality)</span>
              </div>
             
              <div className="font-semibold flex flex-wrap gap-4 justify-center">
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
        {/* Mission Statement */}
        <div 
          ref={missionRef}
          className={`max-w-3xl mx-auto text-center mb-16 p-8 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10 transition-all duration-500 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-lavender">Our Mission</h2>
          <p className="text-lg italic text-neutral-800">
            Fostering a passion for linguistics through community, education, and exploration.
          </p>
        </div>
        
        {/* Club Info Section */}
        <div 
          ref={aboutRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-500 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-semibold mb-6 text-ice-800/70">About Us</h2>
          <p className="text-xl text-white-500 mb-8">
            qUALMS is MSU's official student organization for undergraduate linguistics enthusiasts.
            We host monthly meetings, offer help hours, and organize annual conferences that celebrate the world of language.
          </p>
        </div>
          
        <WhatWeDo />

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`mt-20 mb-16 text-center transition-all duration-500 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-center text-3xl font-semibold mb-10 text-ice-800/70">Interested in what we do?</h2>
          
          <a href="/join" className="inline-block px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md text-xl">
            Join us!
          </a>
        </div>

        <FooterSection />
      </div>
    </div>
  );
}