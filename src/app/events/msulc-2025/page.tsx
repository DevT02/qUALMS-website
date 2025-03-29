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

    //information about the event 
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h2 className= "text-3xl font-semibold mb-6 text-ice-800/70">WHY MSULC?</h2>
        <p className = "text-xl text-white-500">qUALMS’s main mission is to foster a community of people fascinated by language and the scientific study of it. However, language is a part of many different fields apart from linguistics, like Psychology, Computer Science, Cognitive Science, and many more. So, that is why we are hosting this conference - to bring all of these people together! There will be a poster competition, refreshments, merchandise, and a guest speaker! We hope to see you there!</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">CATEGORIES</h3>
        <p className = "text-xl text-white-500">Here is the MSULC tentative schedule:
        -11-11:15 Opening ceremony
        -11:30-12:30 Speaker #1: Maziar Toosarvandani
        -Food opens immediately after speaker #1
        -12:40-2 Open time (for poster presentations, language club presentations, etc subject to change, judging period towards the end)
        -2:10-3:10 Speaker #2
        -Snack opens shortly after
        -3:30-4 Closing ceremony/awards (to be announced soon!)</p>
      </div>


    //info about the poster competition
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

    //will the spacing be fucked up?
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        <h3 className="text-3xl font-semibold mb-6 text-ice-800/70">CATEGORIES</h3>
        <p className = "text-xl text-white-500">Here are the categories that a poster can be in:
          -Phonology
          -Morphology
          -Semantics and Pragmatics
          -Syntax
          -Sociolinguistcs
          -Historical Linguistics
          -Orthography
          -Cognitive Scence & Language 
          -Computational Linguistics 
          -Psychology of Language 
          -Language Acquisition 
          -Language Learning Models 
          -Conlanging
          -etc.
          Your poster may fit into more than one of these categories. No worries! All you need to worry about is that the poster is language related and that you are passionate about what you are making.</p>
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