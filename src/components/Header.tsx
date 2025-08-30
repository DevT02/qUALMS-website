'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const AnimatedLinguisticText = dynamic(() => import("./AnimatedLinguisticText"), { ssr: false });

interface NavItem {
  name: string;
  link?: string;
  new_tab?: boolean;
  dropdown?: { name: string; link: string }[];
}

const navItems: NavItem[] = [
  { name: "about", link: "/about" },
  {
    name: "conferences",
    dropdown: [
      { name: "Past Conferences", link: "/msulc" },
    ],
  },
  { name: "meet the board", link: "/meet-the-board" },
  { name: "calendar", link: "/calendar" },
  { name: "gallery", link: "https://www.instagram.com/qualms_msu/" },
  { name: "join us", link: "/join" },
  { name: "old website", link: "https://sites.google.com/site/msuqualms/members", new_tab: true },
];

export default function Header() {
  const pathname = usePathname() || "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  return (
    <header className="bg-midnight-900/95 backdrop-blur-md border-b border-ice-300/10 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo & Branding */}
        <a href="/" className="flex items-center gap-2">
            <img
                src="/logos/qualmsLogo.png"
                alt="qualms logo"
                className="h-16 w-16 lg:h-18 lg:w-18 object-contain"
            />
            <div className="flex flex-col">
                <div className="flex items-baseline">
                <span className="text-xl lg:text-2xl font-sans font-extrabold tracking-tight text-ice-100 playful-text animate-glow mr-2">
                    qUALMS
                </span>
                <span className="text-sm lg:text-base text-lavender font-mono font-semibold">
                    [kʰwɑːmz]
                </span>
                </div>
                <span className="text-sm sm:text-base text-ice-100 font-medium tracking-normal">
                MSU's Linguistics Club
                </span>
            </div>
        </a>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <div 
                  key={item.name} 
                  className="relative whitespace-nowrap"
                  onMouseEnter={() => {
                    if (closeTimeout) {
                      clearTimeout(closeTimeout);
                      setCloseTimeout(null);
                    }
                    setOpenDropdown(item.name);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setOpenDropdown(null);
                    }, 300); // 300ms delay before closing
                    setCloseTimeout(timeout);
                  }}
                >
                  <button className="px-2 xl:px-3 py-2 text-sm xl:text-base text-ice-300 hover:text-ice-100 hover:bg-lavender/10 rounded capitalize flex items-center">
                    {item.name} 
                  </button>
                  <div 
                    className={`absolute left-0 top-full mt-1 transition-all duration-200 bg-midnight-900/95 backdrop-blur-md rounded shadow-md z-[9999] border border-lavender/20 min-w-[200px] pointer-events-auto transform-gpu ${
                      openDropdown === item.name 
                        ? 'opacity-100 visible' 
                        : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent"></div>
                    <div className="absolute -left-2 top-0 bottom-0 w-2 bg-transparent"></div>
                    <div className="absolute -right-2 top-0 bottom-0 w-2 bg-transparent"></div>
                        {item.dropdown.map((subItem) => (
                            <Link
                            key={subItem.name}
                            href={subItem.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-ice-300 hover:bg-lavender/10 hover:text-ice-100 capitalize whitespace-nowrap first:rounded-t last:rounded-b"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                  </div>
                </div>
              ) : (
                <Link
                  target = {`${item.new_tab ? "blank_" : ""}`}
                  key={item.name}
                  href={item.link!}
                  className={`px-2 xl:px-3 py-2 text-sm xl:text-base transition-colors duration-200 capitalize rounded flex items-center justify-center whitespace-nowrap ${
                    pathname === item.link
                      ? "bg-lavender/20 text-ice-100"
                      : "text-ice-300 hover:text-ice-100 hover:bg-lavender/10"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Animated Linguistic Text - aligned with nav */}
          <div className="hidden lg:flex items-center border-l border-ice-300/20 pl-4 ml-4">
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
          {/* Animated Text on Mobile
          <div className="py-3 flex justify-center">
            <AnimatedLinguisticText />
          </div> */}
          
          <nav className="flex flex-col items-start py-4 space-y-4 w-full px-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="w-full">
                  <button
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                    className="w-full text-left px-3 py-2 text-lg text-ice-300 capitalize font-medium hover:bg-lavender/10 rounded flex items-center justify-between"
                  >
                    {item.name}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileDropdownOpen === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdownOpen === item.name && (
                    <div className="w-full pl-4 space-y-2 mt-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-lg text-ice-300 capitalize hover:bg-lavender/10 rounded"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                                 <Link
                                   key={item.name}
                                   href={item.link!}
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="w-full text-left px-3 py-2 text-lg text-ice-300 capitalize hover:bg-lavender/10 rounded"
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
