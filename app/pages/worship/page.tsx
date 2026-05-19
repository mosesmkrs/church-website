import Link from "next/link";

const ministries = [
  {
    title: "Music Center",
    description:
      "Our Music Center equips members of all ages with musical skills and a heart for worship. Choirs, ensembles, and individual instruction bring the congregation together in praise.",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z" />
      </svg>
    ),
  },
  {
    title: "Soccer Ministry",
    description:
      "Using the beautiful game as a bridge, our Soccer Ministry reaches young people and families in our community, sharing hope through sport and relationship.",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 2c1.85 0 3.57.5 5.05 1.38L13 9.5V8h-2v2.5L7 6.38A7.96 7.96 0 0112 4zM4 12c0-1.3.31-2.53.85-3.62L9 11v2l-4.78 2.4A7.93 7.93 0 014 12zm8 8a7.96 7.96 0 01-5.05-1.78L11 15.5V17h2v-1.5l4.05 2.72A7.96 7.96 0 0112 20zm5.78-3.6L13 13v-2l4.15-2.62c.54 1.09.85 2.32.85 3.62 0 1.3-.31 2.53-.85 3.62l-.37-.62z" />
      </svg>
    ),
  },
  {
    title: "Fountain of Life",
    description:
      "The Fountain of Life is our community outreach center — offering practical support, spiritual encouragement, and a place of belonging for those in need.",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2C20 10.48 17.33 6.55 12 2z" />
      </svg>
    ),
  },
];

const serviceTimes = [
  { day: "Saturday", name: "Bible Study / Sabbath School", time: "9:45 AM" },
  { day: "Saturday", name: "Worship Service", time: "11:00 AM" },
  { day: "Wednesday", name: "Prayer Meeting", time: "7:00 PM" },
];

export default function WorshipPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">Join Us</p>
          <h1 className="text-4xl font-semibold text-white mb-5">Worship With Us</h1>
          <p className="text-blue-200 text-base leading-relaxed">
            Every week we gather to praise God, study His Word, and encourage one another. You are
            welcome here — come as you are.
          </p>
        </div>
      </section>

      {/* Service times */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">Service Times</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {serviceTimes.map((s, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-7 text-center hover:shadow-md transition-shadow">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-2">{s.day}</p>
              <p className="text-base font-medium text-gray-900 mb-1">{s.name}</p>
              <p className="text-2xl font-semibold text-[#1a3a5c]">{s.time}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          1936 E Altgeld St, South Bend, IN 46614
        </p>
      </section>

      {/* Messages */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">Watch Our Messages</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            Missed a service or want to revisit a sermon? Our messages are available online so
            you can stay connected with the Word wherever you are.
          </p>
          <div className="bg-[#0d2137] rounded-xl p-12 flex flex-col items-center gap-4">
            <svg className="w-16 h-16 fill-white/30" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <p className="text-white/60 text-sm">Messages streaming — visit our channel for the latest sermons.</p>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              className="bg-white text-[#1a3a5c] px-6 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
            >
              Watch Now
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">Our Ministries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministries.map((m) => (
            <div key={m.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="mb-4">{m.icon}</div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-3">{m.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}