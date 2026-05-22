"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser, useClerk } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import { profileTabs, profilePath } from "@/lib/profile-tabs";
import { resolveProfileIdentifier } from "@/lib/profile-identifier";

const dropdownItems = profileTabs.map((tab) => ({
  label: tab.label,
  tabId: tab.id,
}));

export default function UserMenu() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  async function handleLogout() {
    setIsOpen(false);
    await signOut({ redirectUrl: "/" });
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isLoaded || !user) {
    return null;
  }

  const identifier = resolveProfileIdentifier({
    id: user.id,
    emailAddresses: user.emailAddresses.map((e) => ({
      emailAddress: e.emailAddress,
    })),
  });

  const avatarUrl = user.imageUrl;
  const initial = (
    user.fullName ??
    user.username ??
    user.primaryEmailAddress?.emailAddress ??
    "M"
  )
    .charAt(0)
    .toUpperCase();

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Account menu"
      >
        <div className="w-9 h-9 rounded-full overflow-hidden bg-[#6b1f3a] flex items-center justify-center shrink-0">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt=""
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white text-sm font-semibold">{initial}</span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 z-50 py-2">
          {dropdownItems.map((item) => (
            <Link
              key={item.tabId}
              href={profilePath(identifier, item.tabId)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="my-1 border-t border-gray-200" />
          <button
            type="button"
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
