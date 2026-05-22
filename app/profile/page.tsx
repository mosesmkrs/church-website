import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { resolveProfileIdentifier } from "@/lib/profile-identifier";

export default async function ProfileIndexPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const user = await currentUser();
  if (!user) {
    redirect("/");
  }

  const identifier = resolveProfileIdentifier({
    id: user.id,
    emailAddresses: user.emailAddresses.map((e) => ({
      emailAddress: e.emailAddress,
    })),
  });

  redirect(`/profile/${encodeURIComponent(identifier)}`);
}
