import { Pencil } from "lucide-react";
import type { ProfileTabId } from "@/lib/profile-tabs";
import { profileTabs } from "@/lib/profile-tabs";

type ProfileTabContentProps = {
  activeTab: ProfileTabId;
  joinDate: string;
};

function tabLabel(tabId: ProfileTabId): string {
  return profileTabs.find((t) => t.id === tabId)?.label ?? "Profile";
}

export default function ProfileTabContent({ activeTab, joinDate }: ProfileTabContentProps) {
  const heading = tabLabel(activeTab);

  if (activeTab === "profile") {
    return (
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">{heading}</h2>
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#1a3a5c] transition-colors shrink-0"
          >
            <Pencil className="w-4 h-4" />
            Edit Profile
          </button>
        </div>
        <p className="text-gray-600 text-sm">Join date: {joinDate}</p>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">{heading}</h2>
      <p className="text-gray-600 text-sm">
        Content for {heading.toLowerCase()} will appear here.
      </p>
    </section>
  );
}
