/** Clerk user ids always start with `user_`. */
export function isClerkUserId(identifier: string): boolean {
  return identifier.startsWith("user_");
}

export function normalizeEmailIdentifier(identifier: string): string {
  return decodeURIComponent(identifier).toLowerCase();
}

export type ProfileUserRef = {
  id: string;
  emailAddresses: { emailAddress: string }[];
};

export function userMatchesIdentifier(user: ProfileUserRef, identifier: string): boolean {
  if (isClerkUserId(identifier)) {
    return user.id === identifier;
  }

  const normalized = normalizeEmailIdentifier(identifier);
  const emails = user.emailAddresses.map((e) => e.emailAddress.toLowerCase());
  return emails.includes(normalized);
}

export function resolveProfileIdentifier(user: ProfileUserRef): string {
  return user.id;
}
