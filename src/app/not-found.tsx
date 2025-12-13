'use client'
import Link from 'next/link'
import FooterSection from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden scroll-smooth py-12 px-4">
      <div className="absolute inset-0 pattern-dots text-ice-300/20 -z-10" />
      <main className="max-w-5xl mx-auto text-center py-20">
        <div className="mb-12">
          {/* 404 in different languages */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="text-4xl font-heading font-bold text-lavender">404</span>
            <span className="text-2xl font-chinese text-neutral-600 dark:text-neutral-400">四〇四</span>
            <span className="text-2xl font-arabic text-neutral-600 dark:text-neutral-400" dir="rtl">٤٠٤</span>
            <span className="text-2xl font-hindi text-neutral-600 dark:text-neutral-400">४०४</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-lavender mb-4">
            <span className="gradient-text">404</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Page Not Found
          </h2>
          
          <div className="mb-6">
            <p className="text-lg font-mono text-neutral-600 dark:text-neutral-400 mb-2">
              /pædʒ nɑt faʊnd/
            </p>
            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500 italic">
              [pʰeɪdʒ nɑʔ faʊnd]
            </p>
          </div>
          
          <p className="text-xl font-sans text-neutral-700 dark:text-neutral-300 mb-2 max-w-2xl mx-auto">
            This page appears to be <span className="font-semibold text-lavender">ungrammatical</span> or has been <span className="font-semibold text-lavender">deleted</span>.
          </p>
          <p className="text-lg font-sans text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Perhaps it's been moved to a different location, or maybe it never existed in the first place. 
            <span className="italic"> Syntax error: page not found.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md font-heading font-semibold hover:scale-105"
          >
            Return to Homepage
          </Link>
          <Link
            href="/join"
            className="px-8 py-3 border-2 border-lavender text-lavender hover:bg-lavender/10 rounded-lg transition-all font-heading font-semibold hover:scale-105"
          >
            Join qUALMS
          </Link>
        </div>

        <div className="mb-8">
          <p className="text-lg font-heading font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
            Try these pages instead:
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              href="/olympiad"
              className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30 hover:shadow-lg hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-lavender mb-2">LOqUS</h3>
              <p className="text-sm font-sans text-neutral-700 dark:text-neutral-300">
                Learn about our linguistics olympiad
              </p>
            </Link>
            <Link
              href="/msulc-2026"
              className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30 hover:shadow-lg hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-lavender mb-2">MSULC 2026</h3>
              <p className="text-sm font-sans text-neutral-700 dark:text-neutral-300">
                Check out our upcoming conference
              </p>
            </Link>
            <Link
              href="/calendar"
              className="p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg shadow border border-ice-100/30 hover:shadow-lg hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-lavender mb-2">Calendar</h3>
              <p className="text-sm font-sans text-neutral-700 dark:text-neutral-300">
                View our upcoming events
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-slate-300/40 backdrop-blur-sm rounded-lg border border-ice-100/30 max-w-2xl mx-auto">
          <p className="text-sm font-sans text-neutral-600 dark:text-neutral-400 italic">
            <span className="font-semibold">Linguistic note:</span> While "404" is a web error code, the concept of "not found" or "missing" exists across all languages. 
            Different scripts, same meaning—that's the beauty of linguistic diversity!
          </p>
        </div>

        <FooterSection />
      </main>
    </div>
  )
}

