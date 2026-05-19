"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/pages/who-we-are" },
  { label: "Worship", href: "/pages/worship" },
  { label: "Giving", href: "/pages/giving" },
  { label: "Our School", href: "/pages/our-school" },
  { label: "Contact", href: "/pages/contact" },
  { label: "Our Stories", href: "/pages/our-stories" },
  { label: "Our Life", href: "/pages/our-life" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Service times bar */}
      <div className="bg-[#1a3a5c] text-[#e8f0fe] text-center py-2 px-4 text-sm tracking-wide">
        Bible Study 9:45 AM&nbsp;&nbsp;|&nbsp;&nbsp;Worship 11:00 AM &nbsp;·&nbsp; Visitors welcome — come and see!
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between flex-wrap gap-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-900">
              South Bend First
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gray-500">
              Seventh-day Adventist Church
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] font-medium tracking-widest uppercase text-gray-600 hover:text-[#1a3a5c] transition-colors no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-[#1a3a5c]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 pb-4">
          <ul className="flex flex-col gap-3 list-none m-0 p-0 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] font-medium tracking-widest uppercase text-gray-600 hover:text-[#1a3a5c] transition-colors no-underline block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}