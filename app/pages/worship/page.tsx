"use client";

import { useState } from "react";

const sermons = [
  {
    id: "Rzbj6-Q8CoQ",
    title: "You Still Belong",
    speaker: "Omwocha Nyaribo",
    duration: "44:06",
    thumbnail: "https://i.ytimg.com/vi/Rzbj6-Q8CoQ/maxresdefault.jpg",
  },
  {
    id: "_6tcmVPDRLc",
    title: "The Infant Who Carried My Infirmities",
    speaker: "Omwocha Nyaribo",
    duration: "20:08",
    thumbnail: "https://i.ytimg.com/vi/_6tcmVPDRLc/maxresdefault.jpg",
  },
  {
    id: "jmHAJmlUugI",
    title: "Baptism on December 2025 - First Southbend SDA Church",
    speaker: "South Bend First SDA Church",
    duration: "26:12",
    thumbnail: "https://i.ytimg.com/vi/jmHAJmlUugI/maxresdefault.jpg",
  },
  {
    id: "l-aLNA3Du6Q",
    title: "Rebellious Hope",
    speaker: "Pastor Omwocha Nyaribo",
    duration: "41:06",
    thumbnail: "https://i.ytimg.com/vi/l-aLNA3Du6Q/maxresdefault.jpg",
  },
  {
    id: "le5R6ojqUlY",
    title: "Two Kings",
    speaker: "Throstur Thordarson",
    duration: "17:16",
    thumbnail: "https://i.ytimg.com/vi/le5R6ojqUlY/maxresdefault.jpg",
  },
  {
    id: "Cwrocku_33k",
    title: "Everlasting Kingdom",
    speaker: "Pastor Throstur Thordarson, Shervin and Jackson",
    duration: "35:11",
    thumbnail: "https://i.ytimg.com/vi/Cwrocku_33k/maxresdefault.jpg",
  },
];

const hours = [
  {
    title: "Sabbath Services",
    schedule: "Every Saturday",
    time: "11:00 AM – 12:30 PM",
    icon: (
      <svg className="w-6 h-6 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "Children's Bible Study",
    schedule: "Every Saturday",
    time: "9:30 AM – 10:45 AM",
    icon: (
      <svg className="w-6 h-6 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Adults' Bible Study",
    schedule: "Every Saturday",
    time: "9:30 AM – 10:45 AM",
    icon: (
      <svg className="w-6 h-6 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
  {
    title: "Koinonia Circles",
    schedule: "Day and time varies",
    time: "Throughout the week",
    icon: (
      <svg className="w-6 h-6 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

function SermonCard({ sermon }: { sermon: typeof sermons[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white">
      <div className="relative aspect-video bg-gray-900 cursor-pointer group" onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${sermon.id}?autoplay=1`}
            title={sermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sermon.thumbnail}
              alt={sermon.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all group-hover:scale-110">
                <svg className="w-6 h-6 fill-[#1a3a5c] ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Duration badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-medium">
              {sermon.duration}
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1">{sermon.title}</h3>
        <p className="text-xs text-gray-500 tracking-wide">by {sermon.speaker}</p>
      </div>
    </div>
  );
}

export default function WorshipPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/11062b_135cd32e9ff046f4ae787258cc5602b8~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0d2137]/75" />
        <div className="relative z-10 py-28 px-6 text-center max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            @sbadventist sermons
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-5 leading-tight">
            Worship Service &amp; Sermons
          </h1>
          <p className="text-blue-200 text-base leading-relaxed">
            Join us every Saturday and experience the Word of God — or catch up on past messages
            anytime below.
          </p>
        </div>
      </section>

      {/* ── Sermons Grid ── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-2 text-center">
          Recent Messages
        </p>
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Watch Our Sermons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>

        {/* YouTube channel CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@sbadventist"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-red-700 text-white px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase transition-colors no-underline"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            More Messages on YouTube
          </a>
        </div>
      </section>

      {/* ── Hours / Service Times ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-2 text-center">
            Join Us
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Hours</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hours.map((h) => (
              <div
                key={h.title}
                className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-[#1a3a5c]/8 flex items-center justify-center mb-5">
                  {h.icon}
                </div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-2">
                  {h.title}
                </h3>
                <p className="text-xs text-[#1a3a5c] font-medium mb-1">{h.schedule}</p>
                <p className="text-sm text-gray-600 font-semibold">{h.time}</p>
              </div>
            ))}
          </div>

          {/* Address reminder */}
          <div className="mt-10 bg-[#1a3a5c] rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-base mb-1">South Bend First SDA Church</p>
              <p className="text-blue-200 text-sm">1936 E Altgeld St, South Bend, IN 46614</p>
            </div>
            <a
              href="https://maps.google.com/?q=1936+E+Altgeld+St+South+Bend+IN+46614"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 bg-white text-[#1a3a5c] px-6 py-3 rounded text-xs font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}