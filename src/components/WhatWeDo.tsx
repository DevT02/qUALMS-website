'use client';
import React, { useEffect, useRef, useState } from "react";

export default function WhatWeDo() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef}>
            {/* Section Divider */}
            <div className="relative flex py-5 items-center mb-16">
                <div className="flex-grow border-t border-lavender/40"></div>
                <span className="flex-shrink mx-4 text-ice-500/70 font-medium tracking-wide">What We Do</span>
                <div className="flex-grow border-t border-lavender/40"></div>
            </div>
            
            {/* Bento Grid Layout */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {/* Featured Card - Annual Conferences (spans 2 rows) */}
                    <div 
                        className={`md:row-span-2 p-8 bg-slate-300/30 rounded-lg border-2 border-lavender/30 hover:border-lavender transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '0ms' }}
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-lavender mb-4">Annual Conferences</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">Join our flagship events that bring together leading experts, scholars, and students to celebrate the art of language.</p>
                                <p className="text-gray-600 text-sm">Experience world-class presentations, networking opportunities, and cutting-edge linguistic research.</p>
                            </div>
                            <div className="mt-6">
                                <a href="/msulc" className="text-lavender font-medium hover:underline">
                                    Learn more →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Regular Cards */}
                    <div 
                        className={`p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <h3 className="text-xl font-medium text-lavender mb-3">Weekly Meetings</h3>
                        <p className="text-gray-700">Engage in thought-provoking discussions and guest talks that dive deep into language theory and practice.</p>
                    </div>

                    <div 
                        className={`p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <h3 className="text-xl font-medium text-lavender mb-3">Linguistics Tutoring</h3>
                        <p className="text-gray-700">Grow and succeed in your linguistics classes with our weekly tutoring hours and dedicated peer tutors.</p>
                    </div>

                    <div 
                        className={`md:col-span-2 p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <h3 className="text-xl font-medium text-lavender mb-3">Workshops & Seminars</h3>
                        <p className="text-gray-700">Participate in interactive sessions that explore linguistics topics, research methods, and emerging trends in the field.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}