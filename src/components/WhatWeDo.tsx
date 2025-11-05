"use client";
import React, { useEffect, useRef, useState } from "react";

function Card({
  children,
  className = "",
  delay = 0,
  isVisible,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  isVisible: boolean;
}) {
  // Card base styles (light + dark modes)
  const base = [
    "rounded-xl p-6",
  "bg-ice-50 dark:bg-neutral-900/90 backdrop-blur",
  "border border-ice-300/80 dark:border-neutral-700",
  "shadow shadow-black/5 transition-all hover:shadow-md",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-lavender/40",
  ].join(" ");

  const motion = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className={[base, motion, className].join(" ")} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </section>
  );
}

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Section Divider */}
      <div className="relative flex py-5 items-center mb-16">
        <div className="flex-grow border-t border-lavender/40" />
        <span className="flex-shrink mx-4 text-ice-700 dark:text-ice-200 font-medium tracking-wide">
          What We Do
        </span>
        <div className="flex-grow border-t border-lavender/40" />
      </div>

      {/* Panel wrapper with stronger separation from page */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="rounded-2xl p-6 md:p-8 bg-ice-50/80 dark:bg-neutral-950/80 border border-ice-200/60 dark:border-neutral-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Featured Card - Annual Conferences (spans 2 rows) */}
            <Card isVisible={isVisible} delay={0} className="md:row-span-2 p-8">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-lavender mb-4">Annual Conferences</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4">
                    Join our flagship events that bring together leading experts, scholars, and students to celebrate the art of language.
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Experience world-class presentations, networking opportunities, and cutting-edge linguistic research.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="/msulc-2026"
                    className="text-lavender font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50 rounded"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </Card>

            {/* Regular Cards */}
            <Card isVisible={isVisible} delay={100}>
              <h3 className="text-xl font-medium text-lavender mb-3">Weekly Meetings</h3>
              <p className="text-neutral-800 dark:text-neutral-200">
                Engage in thought-provoking discussions and guest talks that dive deep into language theory and practice.
              </p>
            </Card>

            <Card isVisible={isVisible} delay={200}>
              <h3 className="text-xl font-medium text-lavender mb-3">Linguistics Tutoring</h3>
              <p className="text-neutral-800 dark:text-neutral-200">
                Grow and succeed in your linguistics classes with our weekly tutoring hours and dedicated peer tutors.
              </p>
            </Card>

            <Card isVisible={isVisible} delay={300} className="md:col-span-2">
              <h3 className="text-xl font-medium text-lavender mb-3">Workshops & Seminars</h3>
              <p className="text-neutral-800 dark:text-neutral-200">
                Participate in interactive sessions that explore linguistics topics, research methods, and emerging trends in the field.
              </p>
            </Card>

            {/* Concise CTA card */}
            <Card isVisible={isVisible} delay={400} className="md:col-span-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-lavender mb-1">Competitions & Exams</h3>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm">
                    Detailed logistics, budget, and olympiad information moved to a dedicated page for clarity.
                  </p>
                </div>
                <div>
                  <a
                    href="/olympiad"
                    className="inline-block text-lavender font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50 rounded"
                  >
                    View olympiad & exam details →
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
