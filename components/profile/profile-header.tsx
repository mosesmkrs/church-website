import Image from "next/image";
import { Camera, MoreVertical } from "lucide-react";

type ProfileHeaderProps = {
  displayName: string;
  avatarUrl: string | null;
  initial: string;
};

export default function ProfileHeader({
  displayName,
  avatarUrl,
  initial,
}: ProfileHeaderProps) {
  return (
    <section className="bg-[#1a3a5c] text-white px-6 py-8 md:py-10">
      <div className="max-w-6xl mx-auto flex items-center gap-6">
        <button
          type="button"
          className="text-white/70 hover:text-white transition-colors shrink-0"
          aria-label="Change cover photo"
        >
          <Camera className="w-5 h-5" />
        </button>

        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-[#6b1f3a] flex items-center justify-center shrink-0 border-4 border-white/20">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt=""
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl font-semibold text-white">{initial}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold truncate">{displayName}</h1>
          <p className="text-white/80 text-sm mt-1">0 Followers · 0 Following</p>
        </div>

        <button
          type="button"
          className="text-white/80 hover:text-white transition-colors shrink-0"
          aria-label="More options"
        >
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
