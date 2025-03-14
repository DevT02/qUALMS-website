// note: this file is unused anymore, but we keep it for future reference.
// replaced by the footer component in the layout.tsx file.
'use client';
import React from "react";

export default function ContactSection() {
  return (
    <footer className="mt-16 py-8 border-t border-ice-300/20">
      <div className="flex flex-col items-center">
        <h3 className="text-xl mb-4 vibrant-heading">Connect With Us</h3>
        <div className="flex justify-center gap-6">
          <a 
            href="https://instagram.com/qualms_msu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-125 animate-pulse-subtle"
            aria-label="Instagram"
          >
            <img src="/logos/instagram_logo.svg" alt="Instagram" width="24" height="24" />
          </a>
          <a 
            href="https://x.com/qualms_msu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-125 animate-pulse-subtle"
            aria-label="x"
          >
            <img src="/logos/x_logo.svg" alt="Twitter/X" width="24" height="24" className="filter invert"/>
          </a>
          <a 
            href="https://www.linkedin.com/company/qualms/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-125 animate-pulse-subtle"
            aria-label="Instagram"
          >
            <img src="/logos/linkedin_logo.png" alt="Linkedin" width="28" height="28" />
          </a>
          <a 
            href="https://discord.gg/EnbZYUMmaW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-125 animate-pulse-subtle"
            aria-label="Instagram"
          >
            <img src="/logos/discord_logo.svg" alt="Discord" width="24" height="24" />
          </a>

        </div>
        <p className="mt-6 text-sm text-midnight-700">
          © {new Date().getFullYear()} qUALMS • Michigan State University
        </p>
      </div>
    </footer>
  );
}