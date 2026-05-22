"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { useUser, useClerk } from "@clerk/nextjs";
import { ChevronDown, LogOut } from "lucide-react";
import { profileTabs, profilePath } from "@/lib/profile-tabs";
import { resolveProfileIdentifier } from "@/lib/profile-identifier";

const dropdownItems = profileTabs.map((tab) => ({
  label: tab.label,
  tabId: tab.id,
}));

type MenuPosition = {
  top: number;
  left: number;
  width: number;
};

export default function UserMenu() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  async function handleLogout() {
    setIsOpen(false);
    await signOut({ redirectUrl: "/" });
  }

  function updateMenuPosition() {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const menuWidth = Math.min(280, viewportWidth - 16);
    const padding = 8;

    let left = rect.right - menuWidth;
    left = Math.max(padding, Math.min(left, viewportWidth - menuWidth - padding));

    const estimatedHeight = Math.min(420, viewportHeight * 0.7);
    let top = rect.bottom + padding;
    if (top + estimatedHeight > viewportHeight - padding) {
      top = Math.max(padding, rect.top - estimatedHeight - padding);
    }

    setMenuPosition({ top, left, width: menuWidth });
  }

  useEffect(() => {
    if (!isOpen) return;

    updateMenuPosition();

    const handleReposition = () => updateMenuPosition();
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);

    return () => {
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setIsOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

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

  const dropdownMenu =
    isOpen && menuPosition ? (
      <div
        ref={menuRef}
        role="menu"
        className="fixed z-200 max-h-[min(70vh,420px)] overflow-y-auto overscroll-contain rounded-xl border border-gray-200 bg-white py-2 shadow-xl"
        style={{
          top: menuPosition.top,
          left: menuPosition.left,
          width: menuPosition.width,
        }}
      >
        {dropdownItems.map((item) => (
          <Link
            key={item.tabId}
            href={profilePath(identifier, item.tabId)}
            role="menuitem"
            className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-[#1a3a5c]/5 hover:text-[#1a3a5c]"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="my-1 border-t border-gray-100" />
        <button
          type="button"
          role="menuitem"
          onClick={handleLogout}
          className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-gray-700 transition-colors hover:bg-red-50 hover:text-red-700"
        >
          <LogOut className="h-4 w-4 shrink-0" aria-hidden />
          Log out
        </button>
      </div>
    ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 rounded-full p-0.5 transition-opacity hover:opacity-80"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Account menu"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#6b1f3a]">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-semibold text-white">{initial}</span>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {mounted && dropdownMenu ? createPortal(dropdownMenu, document.body) : null}
    </>
  );
}
