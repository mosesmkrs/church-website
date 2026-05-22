"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  profileTabs,
  defaultProfileTab,
  isProfileTabId,
  profilePath,
  type ProfileTabId,
} from "@/lib/profile-tabs";

type ProfileTabsNavProps = {
  identifier: string;
};

export default function ProfileTabsNav({ identifier }: ProfileTabsNavProps) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") ?? undefined;
  const activeTab: ProfileTabId = isProfileTabId(tabParam) ? tabParam : defaultProfileTab;

  return (
    <nav className="bg-white border-b border-gray-200 overflow-x-auto">
      <ul className="max-w-6xl mx-auto flex items-center gap-0 list-none m-0 px-4 md:px-6 min-w-max">
        {profileTabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <li key={tab.id}>
              <Link
                href={profilePath(identifier, tab.id)}
                className={`block px-4 py-4 text-sm whitespace-nowrap border-b-2 transition-colors no-underline ${
                  isActive
                    ? "border-[#1a3a5c] text-[#1a3a5c] font-medium"
                    : "border-transparent text-gray-600 hover:text-[#1a3a5c]"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
