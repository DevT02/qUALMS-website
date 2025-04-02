'use client'
import Image from 'next/image'
import FooterSection from '@/components/Footer'
import Timeline from '@/components/Timeline'

export default function MSULC() {
  return (
    <div className="relative overflow-hidden scroll-smooth">
      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
                
        {/* Header Section - Logo Left Aligned */}
        <header className="mb-10 sm:mb-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-5xl font-heading font-extrabold animate-fade-in text-lavender">
              <span className="gradient-text drop-shadow-lg">MSULC</span>
            </h1>
          </div>
          <p className="mt-3 text-xl text-white-500">
            Michigan State Undergraduate Linguistics Conference
          </p>
          <div className="mt-5 max-w-3xl">
            <p className="text-base sm:text-lg text-white-500 leading-relaxed">
              MSULC is Michigan State's official undergraduate linguistics conference, where students can present their research and engage with the broader linguistic community. Started in 2010—with a tradition of a former MSU undergrad becoming a keynote speaker beginning in 2012—the conferences paused after 2019 due to the COVID-19 pandemic, but we are excited to announce that MSULC is returning in 2025.
            </p>
          </div>
        </header>

        {/* MSULC 2025 Overview & RSVP */}
        <section className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl font-semibold text-ice-800/70 mb-5">MSULC 2025</h2>
          <p className="text-lg text-white-500 mb-6">
            The 12th iteration of MSULC will be held on April 19, 2025. Open to all undergraduates interested in linguistics and linguistic research.
          </p>
          <div className="p-5 sm:p-6 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
            <h3 className="text-2xl font-bold mb-4 text-lavender">Conference at a Glance</h3>
            <ul className="text-lg list-disc list-inside space-y-2 mb-6">
              <li><span className="font-bold">Keynote speaker:</span> TBD</li>
              <li><span className="font-bold">Venue:</span> Wells Hall 3rd Floor</li>
              <li><span className="font-bold">Time:</span> 11:00 AM - 5:00 PM</li>
              <li><span className="font-bold">Date:</span> Saturday, April 19, 2025</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSffpVK87MTJGi5Ye4-x6nrdgEh1TQGhlTroookEOVf4J4whzQ/viewform?usp=dialog"
                className="px-6 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md"
              >
                Guest RSVP
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSenyNRlXK8STmwzy2SDVTcBY1iOSHJd2WENp6WYT3GONd385Q/viewform?usp=dialog"
                className="px-6 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md"
              >
                Poster RSVP
              </a>
            </div>
          </div>
        </section>

        {/* WHY MSULC Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-semibold text-ice-800/70 mb-5">WHY MSULC?</h2>
          <p className="text-xl text-white-500 leading-relaxed">
            qUALMS's main mission is to foster a community of people fascinated by language and its scientific study. Since language touches fields like Psychology, Computer Science, and Cognitive Science, this conference brings together diverse interests with a poster competition, refreshments, merchandise, and guest speakers.
          </p>
        </section>

        {/* Detailed Schedule Section */}
        <section className="mb-14 sm:mb-20">
          <h3 className="text-3xl font-semibold text-ice-800/70 mb-6">SCHEDULE</h3>
          <div className="p-5 sm:p-7 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10">
            <h4 className="text-2xl font-bold text-lavender mb-6">MSULC 2025 Tentative Schedule</h4>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">11:00 - 11:15</div>
                <div className="flex-1 font-medium">Opening Ceremony</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">11:30 - 12:30</div>
                <div className="flex-1">
                  <span className="font-medium">Keynote Speaker #1</span>
                  <div className="text-lg mt-1">TBD</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">12:30</div>
                <div className="flex-1">
                  <span className="font-medium">Lunch</span>
                  <div className="text-sm mt-1">Food available immediately after Speaker #1</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">12:40 - 2:00</div>
                <div className="flex-1">
                  <span className="font-medium">Poster Session & Presentations</span>
                  <div className="text-sm mt-1">Poster presentations, language club showcases, and judging towards the end</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">2:10 - 3:10</div>
                <div className="flex-1">
                  <span className="font-medium">Keynote Speaker #2</span>
                  <div className="text-lg mt-1">Surprise Zoom Speaker!</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">3:10</div>
                <div className="flex-1">
                  <span className="font-medium">Refreshments</span>
                  <div className="text-sm mt-1">Snacks available shortly after Speaker #2</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">3:30 - 4:00</div>
                <div className="flex-1">
                  <span className="font-medium">Closing Ceremony & Awards</span>
                  <div className="text-sm italic mt-1">Award details to be announced soon!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Poster Competition Details */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-3xl font-semibold text-ice-800/70 mb-5">WHAT IS THE POSTER COMPETITION?</h2>
          <p className="text-xl text-white-500">
            The MSULC Poster Competition/Exhibition is an opportunity for students to showcase their passion for languages. It's designed to be fun while encouraging participants to learn about fields they may not be familiar with.
          </p>
        </section>
        
        <section className="mb-10 sm:mb-12">
          <h3 className="text-3xl font-semibold text-ice-800/70 mb-5">WHAT SHOULD THE POSTER BE?</h3>
          <p className="text-xl text-white-500">
            The poster can take any format—from a traditional trifold to any other creative layout that best conveys your information. Possible Categories include: Phonology, Morphology, Semantics and Pragmatics, Syntax, Sociolinguistics, Historical Linguistics, Orthography, Cognitive Science & Language, Computational Linguistics, Psychology of Language, Language Acquisition, Language Learning Models, and Conlanging. Your poster may fit into more than one of these categories. No worries! All you need to worry about is that the poster is language related and that you are passionate about what you are making. 

          </p>
        </section>
        
        <section className="mb-10 sm:mb-12">
          <h3 className="text-3xl font-semibold text-ice-800/70 mb-5">HOW DOES THE COMPETITION WORK?</h3>
          <p className="text-xl text-white-500">
            Each participant is assigned an area to set up their poster. Presenters should arrive between 10:45 and 11:00 to set up. During the judging period, each presenter will have 3 minutes to share their poster with the judges. (Judging criteria will be provided soon.) Just have fun with it!
          </p>
        </section>

        {/* Fun & Questions Sections */}
        <section className="mb-10 sm:mb-12">
          <h3 className="text-3xl font-semibold text-ice-800/70 mb-5">HAVE FUN!</h3>
          <p className="text-xl text-white-500">
            This conference is a chance for everyone to showcase their linguistic interests and creativity. We can't wait to see your posters!
          </p>
        </section>
        
        <section className="mb-16 sm:mb-20">
          <h3 className="text-3xl font-semibold text-ice-800/70 mb-5">QUESTIONS?</h3>
          <p className="text-xl text-white-500">
            Please contact the club Secretary at <a className="text-lavender underline hover:text-lavender/80 transition-colors" href="mailto:browneze@msu.edu">browneze@msu.edu</a> for any questions regarding the competition.
          </p>
        </section>

        {/* Past Conferences & Timeline */}
        <section className="my-12 sm:my-16">
          <div className="flex items-center mb-10">
            <div className="flex-grow border-t border-lavender/40" />
            <span className="mx-6 text-xl text-ice-500/70 font-medium">Past Conferences</span>
            <div className="flex-grow border-t border-lavender/40" />
          </div>
          <Timeline />
        </section>

        <div className="mt-16 sm:mt-20">
          <FooterSection />
        </div>
      </div>
    </div>
  )
}