import { Suspense } from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import ProfileHeader from "@/components/profile/profile-header";
import ProfileTabsNav from "@/components/profile/profile-tabs-nav";
import ProfileTabContent from "@/components/profile/profile-tab-content";
import { userMatchesIdentifier } from "@/lib/profile-identifier";
import {
  defaultProfileTab,
  isProfileTabId,
  type ProfileTabId,
} from "@/lib/profile-tabs";

type PageProps = {
  params: Promise<{ identifier: string }>;
  searchParams: Promise<{ tab?: string }>;
};

function formatJoinDate(createdAt: number): string {
  return new Date(createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ProfilePage({ params, searchParams }: PageProps) {
  const { userId } = await auth();
  if (!userId) {
    notFound();
  }

  const user = await currentUser();
  if (!user) {
    notFound();
  }

  const { identifier: rawIdentifier } = await params;
  const identifier = decodeURIComponent(rawIdentifier);

  if (!userMatchesIdentifier(
    {
      id: user.id,
      emailAddresses: user.emailAddresses.map((e) => ({
        emailAddress: e.emailAddress,
      })),
    },
    identifier,
  )) {
    notFound();
  }

  const { tab: tabParam } = await searchParams;
  const activeTab: ProfileTabId = isProfileTabId(tabParam) ? tabParam : defaultProfileTab;

  const displayName =
    user.fullName ?? user.username ?? user.primaryEmailAddress?.emailAddress ?? "Member";
  const initial = displayName.charAt(0).toUpperCase();
  // eslint-disable-next-line react-hooks/purity
  const joinDate = formatJoinDate(user.createdAt ?? Date.now());

  return (
    <main className="flex-1 bg-gray-50">
      <ProfileHeader
        displayName={displayName}
        avatarUrl={user.imageUrl}
        initial={initial}
      />
      <Suspense fallback={<div className="h-14 bg-white border-b border-gray-200" />}>
        <ProfileTabsNav identifier={identifier} />
      </Suspense>
      <div className="bg-white min-h-[50vh]">
        <ProfileTabContent activeTab={activeTab} joinDate={joinDate} />
      </div>
    </main>
  );
}
