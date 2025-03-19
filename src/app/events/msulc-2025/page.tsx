'use client'
import Image from 'next/image'
import FooterSection from '@/components/Footer';
import WhatWeDo from '@/components/WhatWeDo';


export default function EventPage() {
  return (
    <div className="relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <div className="inline-block mb-6 text-lavender mx-auto">
          <h1 className="text-6xl font-heading font-extrabold animate-fade-in">
            <span className="gradient-text drop-shadow-lg">MSULC 2025</span>
          </h1>
          <p className = "text-2xl text-white-500">Michigan State Undergraduate Linguistics Conference</p>
        </div>
      </div>
    </div>
  )
}