"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SignInButton, Show } from "@clerk/nextjs";
import UserMenu from "@/components/user-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/pages/who-we-are" },
  { label: "Worship", href: "/pages/worship" },
  { label: "Giving", href: "https://adventistgiving.org/donate/ANF8JG" },
  { label: "Our School", href: "https://oursbja.com/" },
  { label: "Contact", href: "/pages/contact" },
  { label: "Our Stories", href: "/pages/our-stories" },
  { label: "Our Life", href: "/pages/our-life" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full overflow-visible">
      {/* Service times bar */}
      <div className="bg-[#1a3a5c] px-3 py-2 text-center text-xs tracking-wide text-[#e8f0fe] sm:px-4 sm:text-sm">
        <span className="hidden sm:inline">
          Bible Study 9:45 AM&nbsp;&nbsp;|&nbsp;&nbsp;Worship 11:00 AM &nbsp;·&nbsp; Visitors welcome — come and see!
        </span>
        <span className="sm:hidden">
          Bible Study 9:45 AM · Worship 11:00 AM
        </span>
      </div>

      {/* Main nav */}
      <nav className="overflow-visible border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6">
          {/* Brand — shrinks gracefully on small screens */}
          <Link
            href="/"
            className="flex min-w-0 max-w-[55%] items-center gap-2 no-underline sm:max-w-none sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden sm:h-12 sm:w-12">
              <Image
                src="https://static.wixstatic.com/media/7eeecb_ca4b4e9236c34b92b9ec8aea68638a53~mv2.png/v1/fill/w_158,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hand%20Only%20inverted-10.png"
                alt="Church logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="min-w-0 flex flex-col leading-tight">
              <span className="truncate text-[10px] font-semibold uppercase tracking-wider text-gray-900 min-[400px]:text-xs sm:tracking-widest">
                South Bend First
              </span>
              <span className="hidden truncate text-[9px] uppercase tracking-wider text-gray-500 min-[400px]:block sm:text-[10px] sm:tracking-widest">
                Seventh-day Adventist Church
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="m-0 hidden list-none items-center gap-5 p-0 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium uppercase tracking-widest text-gray-600 no-underline transition-colors hover:text-[#1a3a5c]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[11px] font-medium uppercase tracking-widest text-gray-600 no-underline transition-colors hover:text-[#1a3a5c]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right actions: auth + hamburger */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="whitespace-nowrap px-2 py-1.5 text-xs font-semibold text-[#1a3a5c] transition-colors hover:text-[#0d2137] sm:px-3 sm:text-sm"
                >
                  Sign In
                </button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserMenu />
            </Show>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#1a3a5c] lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white lg:hidden">
            <ul className="m-0 flex list-none flex-col gap-1 p-3 sm:px-4 sm:py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-[11px] font-medium uppercase tracking-widest text-gray-600 no-underline transition-colors hover:bg-gray-50 hover:text-[#1a3a5c]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-[11px] font-medium uppercase tracking-widest text-gray-600 no-underline transition-colors hover:bg-gray-50 hover:text-[#1a3a5c]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
