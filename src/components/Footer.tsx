'use client'
import Image from 'next/image'

export default function CustomFooter() {
  return (
    <footer className="mt-16 pt-8 border-t border-lavender/20 text-center">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" 
          className="flex items-center px-4 py-2 bg-slate-500 hover:bg-lavender text-ice-100 hover:text-white rounded-lg transition-all shadow-md border border-lavender/30">
          <Image src="/logos/discord_logo.svg" alt="Discord" width={20} height={20} className="mr-2" />
          <span className="font-medium">Discord</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
          className="flex items-center px-4 py-2 bg-slate-500 hover:bg-lavender text-ice-100 hover:text-white rounded-lg transition-all shadow-md border border-lavender/30">
          <Image src="/logos/linkedin_logo.png" alt="LinkedIn" width={20} height={20} className="mr-2" />
          <span className="font-medium">LinkedIn</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
          className="flex items-center px-4 py-2 bg-slate-500 hover:bg-lavender text-ice-100 hover:text-white rounded-lg transition-all shadow-md border border-lavender/30">
          <Image src="/logos/instagram_logo.svg" alt="Instagram" width={20} height={20} className="mr-2" />
          <span className="font-medium">Instagram</span>
        </a>
      </div>
      <p className="text-sm text-ice-500/70">
        © {new Date().getFullYear()} qUALMS • Michigan State University
      </p>
    </footer>
  )
}