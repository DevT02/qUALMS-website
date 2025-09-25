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
          <p className="mt-3 text-xl text-white-500">
            Michigan State Undergraduate Linguistics Conference 2026
          </p>
          <div className="mt-5 max-w-3xl">
            <p className="text-base sm:text-lg text-white-500 leading-relaxed">
              MSULC 2026 is coming soon! Stay tuned for more information about the 13th iteration of Michigan State's official undergraduate linguistics conference. We're excited to bring together students passionate about linguistics and linguistic research for another amazing event.
            </p>
          </div>
          <p className="mt-4 text-sm text-ice-500 flex items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-lavender/10 text-lavender font-semibold">MSULC 2026</span>
            <span>Coming Soon • Details TBA</span>
          </p>
        </header>

        {/* MSULC 2026 Overview */}
        <section className="mb-12 sm:mb-16 max-w-3xl">
          <h2 className="text-3xl font-semibold text-ice-800/70 mb-5">MSULC 2026</h2>
          <p className="text-lg text-white-500 mb-6">
            The 13th iteration of MSULC is currently in planning. More details will be announced soon!
          </p>
          <div className="p-5 sm:p-6 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
            <h3 className="text-2xl font-bold mb-4 text-lavender">Conference Information</h3>
            <ul className="text-lg list-disc list-inside space-y-2 mb-6">
              <li><span className="font-bold">Date:</span> TBA</li>
              <li><span className="font-bold">Venue:</span> TBA</li>
              <li><span className="font-bold">Keynote Speaker:</span> TBA</li>
              <li><span className="font-bold">Registration:</span> Coming Soon</li>
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
          <h2 className="text-3xl font-semibold text-ice-800/70 mb-5">What to Expect</h2>
          <p className="text-xl text-white-500 leading-relaxed mb-6">
            MSULC 2026 will continue the tradition of bringing together undergraduate students passionate about linguistics. Based on previous years, you can expect:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-bold mb-3 text-lavender">Poster Competition</h3>
              <p className="text-white-500">
                Showcase your linguistic research through creative poster presentations. Categories include phonology, syntax, semantics, sociolinguistics, and more!
              </p>
            </div>
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-bold mb-3 text-lavender">Keynote Speaker</h3>
              <p className="text-white-500">
                Learn from distinguished linguists and former MSU undergraduates who have gone on to pursue advanced degrees in linguistics.
              </p>
            </div>
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-bold mb-3 text-lavender">Networking</h3>
              <p className="text-white-500">
                Connect with fellow linguistics enthusiasts, faculty, and graduate students in a supportive academic environment.
              </p>
            </div>
            <div className="p-5 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
              <h3 className="text-xl font-bold mb-3 text-lavender">Awards & Recognition</h3>
              <p className="text-white-500">
                Compete for recognition and prizes while sharing your passion for linguistic research with the community.
              </p>
            </div>
          </div>
        </section>

        {/* Stay Updated Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-semibold text-ice-800/70 mb-5">Stay Updated</h2>
          <div className="p-5 sm:p-6 bg-slate-300/40 rounded-lg shadow border border-ice-100/10">
            <p className="text-lg text-white-500 mb-4">
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


        {/* Conference History Timeline */}
        <section className="my-12 sm:my-16">
          <Timeline />
        </section>

        {/* Questions Section */}
        <section className="mb-16 sm:mb-20">
          <h3 className="text-3xl font-semibold text-ice-800/70 mb-5">Questions?</h3>
          <p className="text-xl text-white-500">
            For questions about MSULC 2026, please contact the club Secretary at <a className="text-lavender underline hover:text-lavender/80 transition-colors" href="mailto:syrockia@msu.edu">syrockia@msu.edu</a>.
          </p>
        </section>

        <div className="mt-16 sm:mt-20">
          <FooterSection />
        </div>
      </div>
    </div>
  )
}
