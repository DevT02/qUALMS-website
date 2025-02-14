'use client';
import React from "react";
import Link from "next/link";
import AnimatedLinguisticText from "./AnimatedLinguisticText";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavLinkProps {
  item: string;
  isActive: boolean;
  mobile?: boolean;
}

const navItems = [
  "about",
  "conferences",
  "links",
  "meetings",
  "members",
  "contact",
  "resources",
];

export default function Header() {
  const pathname = usePathname() || "";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-midnight-900/95 backdrop-blur-md border-b border-ice-300/10 shadow-md">
      {/* Desktop Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center h-24">
        {/* Left side: Logo & Branding */}
        <div className="flex items-center gap-2">
          <img 
            src="/qualmsLogo.png" 
            alt="qualms logo" 
            className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl lg:text-3xl font-bold tracking-tight text-ice-100 leading-tight">
              qUALMS
            </span>
            <span className="text-xs lg:text-sm font-normal text-ice-300 leading-none">
              (MSU Linguistics Club)
            </span>
          </div>
        </div>

        {/* Spacer pushes nav toward the center */}
        <div className="flex-1" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item}
              item={item}
              isActive={pathname === `/${item}`}
            />
          ))}
        </nav>

        <div className="flex-1 hidden lg:block" />

        <div className="hidden lg:flex text-lg font-medium text-ice-300 min-w-[160px] justify-end mr-4">
          <AnimatedLinguisticText />
        </div>

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

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-midnight-900/95 backdrop-blur-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item}
                item={item}
                isActive={pathname === `/${item}`}
                mobile
              />
            ))}
            <div className="text-base font-medium text-ice-300 mt-4">
              <AnimatedLinguisticText />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

const NavLink: React.FC<NavLinkProps> = ({ item, isActive, mobile = false }) => (
  <Link
    href={`/${item}`}
    className={`relative group px-3 py-2 transition-all duration-200 capitalize rounded ${
      mobile ? "text-lg" : "text-base lg:text-lg"
    } ${
      isActive
        ? "bg-lavender/20 text-ice-100"
        : "text-ice-300 hover:text-ice-100 hover:bg-lavender/10"
    }`}
  >
    {item}
    <span className="absolute bottom-0 left-0 w-0 h-px bg-lavender transition-all group-hover:w-full duration-300" />
  </Link>
);
