"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stars = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}));

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#060f1a] flex flex-col items-center justify-center overflow-hidden px-6 py-20">

      {/* ── Starfield ── */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <span
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Radial glow behind cross ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(55,138,221,0.18) 0%, rgba(26,58,92,0.10) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* ── Animated cross ── */}
      <div
        className="relative mb-10"
        style={{ animation: "floatY 5s ease-in-out infinite" }}
      >
        {/* Glow ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "140px",
            height: "140px",
            background:
              "radial-gradient(circle, rgba(55,138,221,0.35) 0%, transparent 70%)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        {/* Cross SVG */}
        <svg
          width="80"
          height="100"
          viewBox="0 0 80 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_0_24px_rgba(55,138,221,0.7)]"
        >
          {/* vertical bar */}
          <rect x="31" y="0" width="18" height="100" rx="4" fill="url(#crossGrad)" />
          {/* horizontal bar */}
          <rect x="0" y="22" width="80" height="18" rx="4" fill="url(#crossGrad)" />
          <defs>
            <linearGradient id="crossGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#1a3a5c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── 404 large number ── */}
      <div className="relative mb-2">
        <p
          className="text-[130px] md:text-[180px] font-black leading-none select-none"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            background: "linear-gradient(135deg, #93c5fd 0%, #378add 40%, #1a3a5c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0,
            animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
            letterSpacing: "-0.04em",
          }}
        >
          404
        </p>
        {/* Mirror / reflection */}
        <p
          className="absolute top-full left-0 right-0 text-center text-[130px] md:text-[180px] font-black leading-none select-none pointer-events-none"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            background: "linear-gradient(180deg, rgba(55,138,221,0.15) 0%, transparent 60%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: "scaleY(-1)",
            letterSpacing: "-0.04em",
            marginTop: "-8px",
          }}
        >
          404
        </p>
      </div>

      {/* ── Divider line ── */}
      <div
        className="w-24 h-px mb-8"
        style={{
          background: "linear-gradient(90deg, transparent, #378add, transparent)",
          opacity: 0,
          animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
        }}
      />

      {/* ── Headline ── */}
      <h1
        className="text-white text-2xl md:text-3xl font-semibold text-center mb-4 leading-snug"
        style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          opacity: 0,
          animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s forwards",
        }}
      >
        Page Not Found.
      </h1>

      {/* ── Scripture ── */}
      <p
        className="text-[#93c5fd] text-sm md:text-base text-center italic max-w-sm leading-relaxed mb-2"
        style={{
          opacity: 0,
          animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s forwards",
        }}
      >
        &quot;What do you think? If a man owns a hundred sheep, and one of them wanders away,
        will he not leave the ninety-nine and go to look for the one?&quot;
      </p>
      <p
        className="text-[#378add] text-xs tracking-widest uppercase mb-10 font-medium"
        style={{
          opacity: 0,
          animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.55s forwards",
        }}
      >
        Matthew 18:12
      </p>

      {/* ── Sub message ── */}
      <p
        className="text-blue-300/60 text-sm text-center max-w-xs leading-relaxed mb-10"
        style={{
          opacity: 0,
          animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s forwards",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        Let us help you find your way back.
      </p>

      {/* ── Primary CTA ── */}
      <div
        style={{
          opacity: 0,
          animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.7s forwards",
        }}
      >
        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 bg-[#378add] hover:bg-[#2a6eb5] text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-widest uppercase transition-all duration-300 no-underline shadow-[0_0_30px_rgba(55,138,221,0.4)] hover:shadow-[0_0_50px_rgba(55,138,221,0.6)] mb-10"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return Home
        </Link>
      </div>

      {/* ── Bottom church name ── */}
      <p
        className="absolute bottom-8 text-[#1a3a5c] text-xs tracking-[0.3em] uppercase font-medium select-none"
        style={{
          opacity: 0,
          animation: "fadeSlideUp 0.8s cubic-bezier(0.22,1,0.36,1) 1s forwards",
        }}
      >
        South Bend First SDA Church
      </p>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.4); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}