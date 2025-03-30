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
 
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h2 className= "text-3xl font-semibold mb-6 text-ice-800/70">WHY MSULC?</h2>
        <p className = "text-xl text-white-500">qUALMS’s main mission is to foster a community of people fascinated by language and the scientific study of it. However, language is a part of many different fields apart from linguistics, like Psychology, Computer Science, Cognitive Science, and many more. So, that is why we are hosting this conference - to bring all of these people together! There will be a poster competition, refreshments, merchandise, and a guest speaker! We hope to see you there!</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">SCHEDULE</h3>
        
        <div className="bg-slate-300/40 rounded-lg p-6 shadow-lg border border-ice-100/10">
          <h4 className="text-2xl font-bold mb-4 text-lavender">MSULC 2025 Tentative Schedule</h4>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">11:00 - 11:15</div>
              <div className="flex-1">
                <div className="font-medium">Opening Ceremony</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">11:30 - 12:30</div>
              <div className="flex-1">
                <div className="font-medium">Keynote Speaker #1</div>
                <div className="text-lg">Maziar Toosarvandani</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">12:30</div>
              <div className="flex-1">
                <div className="font-medium">Lunch</div>
                <div className="text-sm">Food available immediately after Speaker #1</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">12:40 - 2:00</div>
              <div className="flex-1">
                <div className="font-medium">Poster Session & Presentations</div>
                <div className="text-sm">Poster presentations, language club presentations, judging period towards the end</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">2:10 - 3:10</div>
              <div className="flex-1">
                <div className="font-medium">Keynote Speaker #2</div>
                <div className="text-lg">Surprise Zoom Speaker!</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">3:10</div>
              <div className="flex-1">
                <div className="font-medium">Refreshments</div>
                <div className="text-sm">Snacks available shortly after Speaker #2</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">3:30 - 4:00</div>
              <div className="flex-1">
                <div className="font-medium">Closing Ceremony & Awards</div>
                <div className="text-sm italic">Award details to be announced soon!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h2 className="text-3xl font-semibold mb-6 text-ice-800/70">WHAT IS THE POSTER COMPETITION?</h2>
        <p className = "text-xl text-white-500">The MSULC Poster Competition/Exhibition/Whatever is an opportunity for students to showcase what they love about languages. It is designed to be a fun competition and to also encourage participants to learn more about fields of study they aren’t familiar with.</p>
      </div>

    
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">WHAT SHOULD THE POSTER BE?</h3>
        <p className = "text-xl text-white-500">It can be a trifold or some other form of poster. However you feel the best way to portray your information will work.</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">HOW DOES THE COMPETITION WORK?</h3>
        <p className = "text-xl text-white-500">Each participant will be given an area to set up their poster. We ask that all presenters come between 10:45 and 11:00 to set up their poster.  During the judging period of the conference, each participant will have 3 minutes to present their poster to the judges. The exact criteria for judging is listed below. Remember, this is a low-stakes environment. Just have fun making and presenting your poster!</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">SCHEDULE</h3>
        
        <div className="bg-slate-300/40 rounded-lg p-6 shadow-lg border border-ice-100/10">
          <h4 className="text-2xl font-bold mb-4 text-lavender">MSULC 2025 Tentative Schedule</h4>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">11:00 - 11:15</div>
              <div className="flex-1">
                <div className="font-medium">Opening Ceremony</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">11:30 - 12:30</div>
              <div className="flex-1">
                <div className="font-medium">Keynote Speaker #1</div>
                <div className="text-lg">Maziar Toosarvandani</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">12:30</div>
              <div className="flex-1">
                <div className="font-medium">Lunch</div>
                <div className="text-sm">Food available immediately after Speaker #1</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">12:40 - 2:00</div>
              <div className="flex-1">
                <div className="font-medium">Poster Session & Presentations</div>
                <div className="text-sm">Poster presentations, language club presentations, judging period towards the end</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">2:10 - 3:10</div>
              <div className="flex-1">
                <div className="font-medium">Keynote Speaker #2</div>
                <div className="text-lg">Surprise Zoom Speaker!</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">3:10</div>
              <div className="flex-1">
                <div className="font-medium">Refreshments</div>
                <div className="text-sm">Snacks available shortly after Speaker #2</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row">
              <div className="font-bold text-midnight-800 sm:w-32 mb-1 sm:mb-0">3:30 - 4:00</div>
              <div className="flex-1">
                <div className="font-medium">Closing Ceremony & Awards</div>
                <div className="text-sm italic">Award details to be announced soon!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">HAVE FUN!</h3>
        <p className = "text-xl text-white-500">Remember, this is an environment for everyone to show-off their linguistic knowledge and interests! Be as creative as you’d like! We can’t wait to see everyone’s posters!</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">QUESTIONS?</h3>
        <p className = "text-2xl text-white-500">Please contact the club Secretary for any questions about how the competition works. You can contact him at browneze@msu.edu.</p>
      </div>
    </div>
  )
}