'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AnimatedLinguisticText from "./AnimatedLinguisticText";

interface NavItem {
  name: string;
  link?: string;
  dropdown?: { name: string; link: string }[];
}

const navItems: NavItem[] = [
  { name: "about", link: "/about" },
  { name: "MSULC 2025", link: "/msulc-2025" },
  { name: "meet the eboard", link: "/meet-the-eboard" },
  { name: "calendar", link: "/calendar" },
  { name: "gallery", link: "/gallery" },
  { name: "old website", link: "https://sites.google.com/site/msuqualms/members" },
];

export default function Header() {
  const pathname = usePathname() || "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-midnight-900/95 backdrop-blur-md border-b border-ice-300/10 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo & Branding */}
        <div className="flex items-center gap-2">
          <img
            src="/logos/qualmsLogo.png"
            alt="qualms logo"
            className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
          />
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-xl lg:text-3xl font-sans font-extrabold tracking-tight text-ice-100 playful-text animate-glow mr-2">
                qUALMS
              </span>
              <span className="text-sm lg:text-base text-lavender font-mono font-semibold">
                [kʰwɑːmz]
              </span>
            </div>
            <span className="text-sm lg:text-base text-ice-100 font-medium tracking-normal">
              MSU's Linguistics Club
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button className="px-3 py-2 text-base lg:text-lg text-ice-300 hover:text-ice-100 hover:bg-lavender/10 rounded capitalize">
                    {item.name} 
                  </button>
                  <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-midnight-900/95 backdrop-blur-md rounded shadow-md z-10">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm text-ice-300 hover:bg-lavender/10 hover:text-ice-100 capitalize"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.link!}
                  className={`px-3 py-2 text-base lg:text-lg transition-colors duration-200 capitalize rounded ${
                    pathname === item.link
                      ? "bg-lavender/20 text-ice-100"
                      : "text-ice-300 hover:text-ice-100 hover:bg-lavender/10"
                  } ${item.name === "MSULC 2025" ? "font-bold" : ""}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Animated Linguistic Text - aligned with nav */}
          <div className="hidden lg:flex items-center border-l border-ice-300/20 pl-4">
            <AnimatedLinguisticText />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-ice-300 hover:text-ice-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-midnight-900/95 backdrop-blur-md">
          {/* Animated Text on Mobile */}
          <div className="py-3 flex justify-center">
            <AnimatedLinguisticText />
          </div>
          
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="w-full">
                  <button className="w-full text-left px-3 py-2 text-lg text-ice-300 capitalize hover:bg-lavender/10">
                    {item.name}
                  </button>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.link}
                      className="block pl-8 pr-3 py-2 text-lg text-ice-300 capitalize hover:bg-lavender/10"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.link!}
                  className={`px-3 py-2 text-lg text-ice-300 capitalize hover:bg-lavender/10 rounded ${
                    item.name === "MSULC 2025" ? "font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
