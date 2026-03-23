"use client"
import Image from 'next/image'
import FooterSection from '@/components/Footer'
import Timeline from '@/components/Timeline'

export default function MSULC2026() {
  return (
    <div className="relative overflow-hidden scroll-smooth">
      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
                
        {/* Header Section - Logo Left Aligned */}
        <header className="mb-10 sm:mb-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-5xl font-heading font-extrabold animate-fade-in text-lavender">
              <span className="gradient-text drop-shadow-lg">MSULC 2026</span>
            </h1>
          </div>
          <p className="mt-3 text-xl font-heading text-neutral-800 dark:text-neutral-200">
            Michigan State Undergraduate Linguistics Conference 2026
          </p>
          <div className="mt-5 max-w-3xl">
            <p className="text-base sm:text-lg font-heading text-neutral-800 dark:text-neutral-200 leading-relaxed">
              Welcome to MSULC 2026! Join us for the 12th iteration of Michigan State's official undergraduate linguistics conference. We're excited to bring together students passionate about linguistics and linguistic research for an amazing event featuring insightful presentations and our keynote speaker, Kenneth Hanson.
            </p>
          </div>
          <p className="mt-4 text-sm text-ice-500 flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-lavender/10 text-lavender font-semibold">MSULC 2026</span>
            <span>Registration Open • Wells Hall</span>
          </p>
        </header>

        {/* MSULC 2026 Overview */}
        <section className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-5">MSULC 2026</h2>
          <p className="text-lg font-heading text-neutral-800 dark:text-neutral-200 mb-6">
            The 12th iteration of MSULC will take place on Saturday, April 25, 2026 at Wells Hall. Registration and presentation signups are now open!
          </p>
          <div className="p-5 sm:p-6 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
            <h3 className="text-2xl font-heading font-bold mb-4 text-lavender">Conference Information</h3>
            <ul className="text-lg font-heading list-disc list-inside space-y-2 mb-6">
              <li><span className="font-bold">Date:</span> Saturday, April 25, 2026</li>
              <li><span className="font-bold">Venue:</span> Wells Hall</li>
              <li><span className="font-bold">Keynote Speaker:</span> Kenneth Hanson</li>
              <li>
                <span className="font-bold">Registration:</span>{" "}
                <a href="https://docs.google.com/forms/d/1QJDfTurZ5ceTcqYZL4tvsDjmyIGVxNIMpgDBaW9kiM4/edit?usp=drive_web&ouid=113961568020256347392" target="_blank" rel="noopener noreferrer" className="text-lavender underline hover:text-lavender/80 transition-colors">
                  Open Now
                </a>
              </li>
              <li>
                <span className="font-bold">Presentation Signup:</span>{" "}
                <a href="https://docs.google.com/forms/d/1qqB0_W3xSY-opF66VYzHHKRLeT1MLXSkEHcIBGsoaL0/edit" target="_blank" rel="noopener noreferrer" className="text-lavender underline hover:text-lavender/80 transition-colors">
                  Apply Here
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/join"
                className="px-6 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md"
              >
                Join qUALMS
              </a>
              <a
                href="/calendar"
                className="px-6 py-3 border-2 border-ice-300/50 hover:border-lavender hover:bg-lavender/10 rounded-lg transition-all"
              >
                View Calendar
              </a>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-5">WHAT TO EXPECT</h2>
          <p className="text-xl font-heading text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
            MSULC 2026 will continue the tradition of bringing together undergraduate students passionate about linguistics. Based on previous years, you can expect:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-heading font-bold mb-3 text-lavender">Poster Competition</h3>
              <p className="font-heading text-neutral-800 dark:text-neutral-200">
                Showcase your linguistic research through creative poster presentations. Categories include phonology, syntax, semantics, sociolinguistics, and more!
              </p>
            </div>
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-heading font-bold mb-3 text-lavender">Keynote Speaker</h3>
              <p className="font-heading text-neutral-800 dark:text-neutral-200">
                Learn from distinguished linguists and former MSU undergraduates who have gone on to pursue advanced degrees in linguistics.
              </p>
            </div>
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-heading font-bold mb-3 text-lavender">Networking</h3>
              <p className="font-heading text-neutral-800 dark:text-neutral-200">
                Connect with fellow linguistics enthusiasts, faculty, and graduate students in a supportive academic environment.
              </p>
            </div>
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-heading font-bold mb-3 text-lavender">Awards & Recognition</h3>
              <p className="font-heading text-neutral-800 dark:text-neutral-200">
                Compete for recognition and prizes while sharing your passion for linguistic research with the community.
              </p>
            </div>
          </div>
        </section>

        {/* Stay Updated Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-5">STAY UPDATED</h2>
          <div className="p-5 sm:p-6 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
            <p className="text-lg font-heading text-neutral-800 dark:text-neutral-200 mb-4">
              Want to be the first to know about MSULC 2026 updates? Join qUALMS to stay informed about conference announcements, deadlines, and events!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/join"
                className="px-6 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md"
              >
                Join qUALMS
              </a>
              <a
                href="https://www.instagram.com/qualms_msu/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-ice-300/50 hover:border-lavender hover:bg-lavender/10 rounded-lg transition-all"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>


        {/* Detailed Schedule Section */}
        <section className="mb-14 sm:mb-20">
          <h3 className="text-3xl font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-6">SCHEDULE</h3>
          <div className="p-5 sm:p-7 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10">
            <h4 className="text-2xl font-heading font-bold text-lavender mb-6">MSULC 2026 Tentative Schedule</h4>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">10:20 - 10:30</div>
                <div className="flex-1 font-heading font-medium">Opening Ceremony</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">10:40 - 12:00</div>
                <div className="flex-1">
                  <span className="font-heading font-medium">Poster Session #1</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">12:00 - 12:20</div>
                <div className="flex-1 font-heading font-medium">Lunch Break</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">12:20 - 1:40</div>
                <div className="flex-1">
                  <span className="font-heading font-medium">Poster Session #2</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">2:00 - 3:30</div>
                <div className="flex-1">
                  <span className="font-heading font-medium">Keynote Speaker Talk with Kenneth Hanson</span>
                  <div className="mt-2 p-4 bg-lavender/5 border-l-4 border-lavender rounded-r-lg">
                    <h5 className="font-heading font-semibold text-lavender mb-2">Keynote Speaker: Kenneth Hanson</h5>
                    <p className="text-sm md:text-base font-heading text-midnight-700 leading-relaxed mb-3">
                      Kenneth Hanson is a lecturer in the Linguistics Department at Yale University. He received his PhD from Stony Brook University in 2025. His research focuses on computational syntax, studying syntactic dependencies such as case and agreement from the perspective of computational complexity. 
                    </p>
                    <p className="text-sm md:text-base font-heading text-midnight-700 leading-relaxed">
                      He is also a proud MSU alumnus, having graduated with a BA in linguistics and Japanese before working as an assistant English teacher in Japan through the JET Programme.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">3:40 - 5:00</div>
                <div className="flex-1">
                  <span className="font-heading font-medium">Poster Session #3</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">5:30 - 6:00</div>
                <div className="flex-1 font-heading font-medium">Closing Ceremony</div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-lavender/20 pb-3">
                <div className="font-heading font-bold text-midnight-800 sm:w-32 mb-2 sm:mb-0">7:30</div>
                <div className="flex-1 font-heading font-medium">Post-Conference Dinner (TBD)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Conference History Timeline */}
        <section className="my-12 sm:my-16">
          <h2 className="text-3xl font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-5">CONFERENCE HISTORY TIMELINE</h2>
          <Timeline />
        </section>

        {/* Questions Section */}
        <section className="mb-16 sm:mb-20">
          <h3 className="text-3xl font-heading font-semibold text-neutral-900 dark:text-neutral-100 mb-5">QUESTIONS?</h3>
          <div className="p-5 sm:p-6 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
            <p className="text-lg font-heading text-neutral-800 dark:text-neutral-200 mb-4">
              For questions about MSULC 2026, please contact:
            </p>
            <p className="text-xl font-heading font-semibold text-lavender mb-2">
              <a className="underline hover:text-lavender/80 transition-colors" href="mailto:syrockia@msu.edu">syrockia@msu.edu</a>
            </p>
            <p className="text-base font-heading text-neutral-700 dark:text-neutral-300">
              Malosza Syrocki - Club Secretary
            </p>
          </div>
        </section>

        <div className="mt-16 sm:mt-20">
          <FooterSection />
        </div>
      </div>
    </div>
  )
}
