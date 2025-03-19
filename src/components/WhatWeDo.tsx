'use client';
import React from "react";

export default function WhatWeDo() {
    return (
        <>
            {/* Section Divider */}
            <div className="relative flex py-5 items-center mb-16">
                <div className="flex-grow border-t border-lavender/40"></div>
                <span className="flex-shrink mx-4 text-ice-500/70 font-medium">What We Do</span>
                <div className="flex-grow border-t border-lavender/40"></div>
            </div>
            {/* Our Activities Section */}
            <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 mb-12">
                <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
                <h3 className="text-xl font-medium text-lavender mb-3">Weekly Meetings</h3>
                <p>Engage in thought-provoking discussions and guest talks that dive deep into language theory and practice.</p>
                </div>
                <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
                <h3 className="text-xl font-medium text-lavender mb-3">Linguistics Tutoring</h3>
                <p>Grow and succeed in your linguistics classes by being a part of our tutoring hours! We offer weekly tutoring hours and peer tutors to help with your doubts and queries.</p>
                </div>
                <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
                <h3 className="text-xl font-medium text-lavender mb-3">Workshops & Seminars</h3>
                <p>Participate in interactive sessions that explore linguistics topics, research methods, and emerging trends.</p>
                </div>
                <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
                <h3 className="text-xl font-medium text-lavender mb-3">Annual Conferences</h3>
                <p>Join our flagship events that bring together leading experts, scholars, and students to celebrate the art of language.</p>
                </div>
            </div>
            </div>
        </>
    );
}