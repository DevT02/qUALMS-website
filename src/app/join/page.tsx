'use client'
import Image from 'next/image'
import FooterSection from '@/components/Footer';
import { motion } from 'framer-motion';

export default function JoinUs() {
  return (
    <div className="relative min-h-screen overflow-hidden scroll-smooth py-12 px-4">
      <div className="absolute inset-0 pattern-dots text-ice-300/20 -z-10" />
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-heading font-extrabold d:text-5xl mb-6 text-midnight-800">
          Ready to take on a <span className="text-lavender">linguistic venture</span>?
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-midnight-700/80">
          Join qUALMS to explore the fascinating world of linguistics, build your skills, 
          and connect with fellow language enthusiasts.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          target="_blank" 
          href="https://forms.office.com/pages/responsepage.aspx?id=MHEXIi9k2UGSEXQjetVofWC0XLROK99Gp9wUmGljDgpUQlIzWlZNQk5MT1FKN1k5S0I2RUY4NjJUSC4u&route=shorturl" 
          className="inline-block px-8 py-4 bg-lavender hover:bg-lavender/90 text-white rounded-lg shadow-md text-lg font-medium transition-all"
        >
          Sign up for our mailing list
        </motion.a>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30 p-6 flex flex-col animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-midnight-800">Join Our Meetings</h2>
          <p className="text-midnight-700 mb-4">
            We meet regularly to discuss linguistic topics, work on projects, and have fun!
          </p>
          <div className="mt-auto">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lavender">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-midnight-600">Every Wednesday</p>
                <p className="font-medium">5:00 - 6:30 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lavender">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-midnight-600">Location</p>
                <p className="font-medium">Wells Hall B104</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30 p-6 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-midnight-800">Contact Us</h2>
          <p className="text-midnight-700 mb-4">
            Have questions or need more information? We're here to help!
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lavender">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-midnight-600">Email</p>
                <a href="mailto:qualms@msu.edu" className="font-medium text-lavender hover:text-lavender/80 transition-colors">.</a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lavender">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-midnight-600">Phone</p>
                <p className="font-medium">.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6 text-midnight-800">Follow Us</h2>
        <p className="text-midnight-700 mb-6">
          Stay updated with our latest events, news, and linguistic discussions!
        </p>
        <div className="-mt-2">
          <FooterSection />
        </div>
      </div>
    </div>
  )
}
