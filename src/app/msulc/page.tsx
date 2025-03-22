'use client'
import Image from 'next/image'
import FooterSection from '@/components/Footer';
import Timeline from '@/components/Timeline';

export default function MSULC() {
  return (
    <div className="relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 text-lavender">
            <h1 className="text-6xl font-heading font-extrabold animate-fade-in">
              <span className="gradient-text drop-shadow-lg">MSULC</span>
            </h1>
            <p className = "text-2xl text-white-500">Michigan State Undergraduate Linguistics Conference</p>
          </div>
          <div className = "mb-8 max-w-3xl mx-auto">
          <p className="text-xl md:text-xl text-white-500 text-justify">
            MSULC is Michigan State's official undergraduate linguistics conference, where students can present their research and engage with the broader linguistic community. MSULC was started in 2010 and is in its 10th consecutive year. In 2012, MSULC started the tradition of hosting a keynote speaker who is a former MSU undergraduate student and current PhD student studying linguistics. The conferences were halted in lieu of the COVID-19 pandemic after 2019, but we are excited to announce that MSULC is returning in 2025.
          </p>
          </div>
          
        </div>
        
        {/* MSULC 2025 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-ice-800/70">MSULC 2025</h2>
          
          <div className="flex flex-col md:flex-col gap-8 mb-8">
            <p className = "text-lg text-justify">The 12th iteration of MSULC, MSULC 2025, will be held on April 18, 2025. The event is open to all undergraduate students interested in linguistics and linguistic research. The event will be held in the Multicultural Center. The exact venue and further details will be announced soon. For further details, visit the <a className = "text-lavender" href = "/events/msulc-2025">MSULC 2025 page</a> (TBD).</p>

            <div className = "flex flex-col gap-4 mx-auto max-w-3xl text-center mb-16 p-8 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10">
              <h2 className = "text-2xl font-bold">Conference at a glance</h2>
              <ul className = "text-lg text-justify">
                <li>Keynote speaker(s): TBD</li>
                <li>Venue: Multicultural Center</li>
                <li>Time: 11:00 AM - 5:00 PM</li>
                <li>Date: Friday, April 19, 2025</li>
              </ul>
              <div className = "flex gap-4 justify-center">
                <a target = "_blank" href = "https://docs.google.com/forms/d/e/1FAIpQLSffpVK87MTJGi5Ye4-x6nrdgEh1TQGhlTroookEOVf4J4whzQ/viewform?usp=dialog" className = "px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md">Guest RSVP</a>
                <a target = "_blank" href = "https://docs.google.com/forms/d/e/1FAIpQLSenyNRlXK8STmwzy2SDVTcBY1iOSHJd2WENp6WYT3GONd385Q/viewform?usp=dialog" className = "px-8 py-3 bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md">Poster RSVP</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section Divider */}
        <div className="relative flex py-5 items-center mb-16">
          <div className="flex-grow border-t border-lavender/40"></div>
          <span className="flex-shrink mx-4 text-ice-500/70 font-medium">Past Conferences</span>
          <div className="flex-grow border-t border-lavender/40"></div>
        </div>     
        <Timeline />
        <FooterSection />
      </div>
    </div>
  )
}