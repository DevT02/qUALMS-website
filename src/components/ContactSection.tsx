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
            <img src="/instagram_logo.svg" alt="Instagram" width="24" height="24" />
          </a>
          <a 
            href="https://x.com/qualms_msu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-125 animate-pulse-subtle"
            aria-label="x"
          >
            <img src="/x_logo.svg" alt="Twitter/X" width="24" height="24" className="filter invert"/>
          </a>
        </div>
        <p className="mt-6 text-sm text-midnight-700">
          © {new Date().getFullYear()} qUALMS • Michigan State University
        </p>
      </div>
    </footer>
  );
}