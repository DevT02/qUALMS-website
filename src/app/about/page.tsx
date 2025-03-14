'use client'
import Image from 'next/image'
import FooterSection from '@/components/Footer';


export default function About() {
  return (
    <div className="relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 text-lavender">
            <h1 className="text-6xl font-heading font-extrabold animate-fade-in">
              <span className="gradient-text drop-shadow-lg">About qUALMS</span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-2xl text-white-500 mb-8 max-w-3xl mx-auto">
            Discover MSU's official linguistics club—a community where passion for language meets academic excellence
          </p>
        </div>
        
        {/* Introduction Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 p-8 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10">
          <p className="text-lg">
            qUALMS was founded to unite undergraduate students who share a passion for linguistics. Our club thrives on engaging discussions, collaborative learning, and celebrating the endless diversity of language.
          </p>
        </div>
        
        {/* Our Journey Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-ice-800/70">Our Journey</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2 space-y-4 text-left">
              <p>
                Starting as a small group of language enthusiasts, qUALMS has grown into a vibrant community that explores every facet of linguistics—from phonetics to sociolinguistics.
              </p>
              <p>
                Our members lead spirited discussions, attend expert-led workshops, and host annual conferences that bring together scholars and enthusiasts alike.
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg border border-ice-100/10">
              <Image 
                src="/club_meeting.jpg" 
                alt="qUALMS Club Meeting" 
                width={500} 
                height={300} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        
        {/* Section Divider */}
        <div className="relative flex py-5 items-center mb-16">
          <div className="flex-grow border-t border-lavender/40"></div>
          <span className="flex-shrink mx-4 text-ice-500/70 font-medium">What We Do</span>
          <div className="flex-grow border-t border-lavender/40"></div>
        </div>
        
        {/* Our Activities Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-12">
            <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
              <h3 className="text-xl font-medium text-lavender mb-3">Monthly Meetings</h3>
              <p>Engage in thought-provoking discussions and guest talks that dive deep into language theory and practice.</p>
            </div>
            <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
              <h3 className="text-xl font-medium text-lavender mb-3">Workshops & Seminars</h3>
              <p>Participate in interactive sessions that explore linguistics topics, research methods, and emerging trends.</p>
            </div>
            <div className="p-6 bg-slate-300/30 rounded-lg border border-ice-100/10 hover:border-lavender/30 transition-all">
              <h3 className="text-xl font-medium text-lavender mb-3">Annual Conferences</h3>
              <p>Join our flagship events that bring together leading experts, scholars, and students to celebrate the art of language.</p>
            </div>
          </div>
        </div>
        
        {/* Section Divider */}
        <div className="relative flex py-5 items-center mb-16">
          <div className="flex-grow border-t border-lavender/40"></div>
          <span className="flex-shrink mx-4 text-ice-500/70 font-medium">Join Our Community</span>
          <div className="flex-grow border-t border-lavender/40"></div>
        </div>
        
        {/* Community Engagement Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 p-8 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10">
          <h2 className="text-2xl font-semibold mb-4 text-lavender">Be Part of Something Special</h2>
          <p className="text-lg">
            Whether you're a seasoned linguist or just beginning your language journey, qUALMS welcomes you. Connect with us on social media or reach out directly to learn more about membership opportunities.
          </p>
          
          <div className="font-semibold flex flex-wrap gap-4 justify-center mt-8">
            <a href="/join" className="px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md">
              Become a Member
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-ice-300/50 hover:border-lavender hover:bg-lavender/10 rounded-lg transition-all">
              Contact Us
            </a>
          </div>
        </div>
        
        <FooterSection />
      </div>
    </div>
  )
}