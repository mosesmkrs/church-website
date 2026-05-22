export const profileTabs = [
  { id: "profile", label: "Profile" },
  { id: "events", label: "Events" },
  { id: "wallet", label: "My Wallet" },
  { id: "subscriptions", label: "My Subscriptions" },
  { id: "bookings", label: "My Bookings" },
  { id: "programs", label: "My Programs" },
  { id: "account", label: "My Account" },
  { id: "notifications", label: "Notifications" },
] as const;

export type ProfileTabId = (typeof profileTabs)[number]["id"];

export const defaultProfileTab: ProfileTabId = "profile";

export function isProfileTabId(value: string | undefined): value is ProfileTabId {
  return profileTabs.some((tab) => tab.id === value);
}

export function profilePath(identifier: string, tab: ProfileTabId = defaultProfileTab) {
  const base = `/profile/${encodeURIComponent(identifier)}`;
  return tab === defaultProfileTab ? base : `${base}?tab=${tab}`;
}
