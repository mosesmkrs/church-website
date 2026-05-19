"use client";

import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  { label: "Who We Are", href: "/pages/who-we-are" },
  { label: "Worship", href: "/pages/worship" },
  { label: "Our Stories", href: "/pages/our-stories" },
  { label: "Our Life", href: "/pages/our-life" },
  { label: "Contact", href: "/pages/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0d2137] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">
              About Us
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              On the morning of Sunday, October 28, 1962, church members and
              visitors were present to witness the ceremonial groundbreaking for
              the new church.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">
              Address
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              1936 E Altgeld St
              <br />
              South Bend, IN 46614
            </p>
            <p className="text-sm mt-3 text-gray-400">574-234-3044</p>
            <a
              href="mailto:office@sbadventist.org"
              className="text-sm text-[#7ab3e0] hover:text-white transition-colors no-underline"
            >
              office@sbadventist.org
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">
              Quick Links
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-white mb-4">
              Subscribe for Emails
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Stay connected with our community.
            </p>

            {subscribed ? (
              <p className="text-sm text-green-400">Thanks for subscribing!</p>
            ) : (
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm px-3 py-2 rounded-l outline-none focus:border-white/40"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-[#378add] hover:bg-[#2a6eb5] text-white text-xs font-semibold px-3 py-2 rounded-r transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            )}

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-gray-300" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-gray-300" strokeWidth={1.5} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-600">
          © 2025 South Bend First Media Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}