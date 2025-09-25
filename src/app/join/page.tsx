'use client'
import Image from 'next/image'
import FooterSection from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function JoinUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        setError('');
      } else {
        setError(data.error || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30 p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lavender">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-midnight-800">Mailing List</h2>
            </div>
            <p className="text-midnight-700 mb-8 leading-relaxed">
              Sign up for information on upcoming meetings and other fun activities!
            </p>
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lavender text-midnight-800 placeholder-gray-400 transition-all duration-200 shadow-sm"
                  />
                </div>
                {error && (
                  <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                    {error}
                  </div>
                )}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-lavender hover:bg-lavender/90 text-white rounded-lg shadow-md text-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <svg className="w-10 h-10 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-midnight-800 mb-4">Successfully Subscribed!</h3>
                <p className="text-midnight-700 mb-8 leading-relaxed text-lg">Thank you for joining our mailing list. Check your email to opt-in and get the latest updates!</p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setError('');
                    setEmail('');
                  }}
                  className="text-sm text-lavender hover:text-lavender/80 underline transition-colors font-medium"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30 p-6 flex flex-col hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lavender">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-midnight-800">Join Our Meetings</h2>
          </div>
          <p className="text-midnight-700 mb-4">
            We meet regularly to discuss linguistic topics, work on projects, and have fun!
          </p>
          <div className="mt-auto space-y-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-lavender">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-midnight-600">Every Other Wednesday</p>
                <p className="font-medium text-midnight-800">5:00 - 6:00 PM</p>
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
                <p className="font-medium text-midnight-800">Wells Hall A226</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-300/40 backdrop-blur-sm rounded-lg shadow-lg border border-ice-100/30 p-6 flex flex-col hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-lavender/10 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-lavender" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-midnight-800">Join Our Discord</h2>
          </div>
          <p className="text-midnight-700 mb-4">
            Connect with fellow linguistics enthusiasts and stay updated on events!
          </p>
          <div className="mt-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              href="https://discord.gg/your-discord-link"
              className="inline-flex items-center px-6 py-3 bg-lavender hover:bg-lavender/90 text-white rounded-lg shadow-md text-lg font-medium transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto text-center pb-8">
        <h2 className="text-2xl font-semibold mb-6 text-midnight-800">Follow Us</h2>
        <p className="text-midnight-700 mb-6">
          Stay updated with our latest events, news, and linguistic discussions!
        </p>
        <div>
          <FooterSection />
        </div>
      </div>
    </div>
  )
}

