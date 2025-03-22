'use client'
import Image from 'next/image'
import FooterSection from '@/components/Footer';
import Timeline from '@/components/Timeline';

export default function JoinUs() {
  return (
    <div className="relative overflow-hidden scroll-smooth mt-10">
      <div className="absolute inset-0 pattern-dots text-ice-300/20" />
      <div className = "mt-6 mb-16 flex flex-col mx-auto max-w-3xl gap-3">
        <h1 className = "text-3xl text-center font-semibold">Ready to take on a linguistic venture?</h1>
        <a target = "_blank" href="https://forms.office.com/pages/responsepage.aspx?id=MHEXIi9k2UGSEXQjetVofWC0XLROK99Gp9wUmGljDgpUQlIzWlZNQk5MT1FKN1k5S0I2RUY4NjJUSC4u&route=shorturl" className = "px-8 py-3 mx-auto bg-lavender hover:bg-lavender/80 text-white rounded-lg transition-all shadow-md text-lg animate-bounce-subtle">Sign up for our mailing list</a>
      </div>
      <div className = "flex flex-col mx-auto max-w-3xl">        
        <div className = "flex flex-col gap-4 mx-auto max-w-3xl text-center mb-16 p-8 bg-slate-300/40 rounded-lg shadow-lg border border-ice-100/10">
            <div>
              <h1 className = "text-2xl text-center font-semibold">Got any queries for us?</h1>
              <p className = "text-lg text-center italic">We're happy to answer.</p>
            </div>
            <ul className = "text-lg text-justify">
              <li>Contact number: </li>
              <li>Email: </li>
              <li>Meetings every Wednesdays, 5-6:30pm in Wells B104</li>
            </ul>
        </div>

      </div>  
      
    </div>
  )
}