import Link from "next/link";

const exploreCards = [
  {
    title: "About Our Church",
    description:
      "On the morning of Sunday, October 28, 1962, church members and visitors were present to witness the ceremonial groundbreaking for the new church.",
    href: "/pages/who-we-are",
    bg: "from-[#1a3a5c] to-[#2a5a8c]",
    icon: (
      <svg className="w-12 h-12 fill-white/80" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "Koinonia Circles",
    description:
      "South Bend First showcases unity in diversity with its intergenerational membership representing over 50 nations. In this community, every individual is cherished.",
    href: "/pages/who-we-are",
    bg: "from-[#0f6e56] to-[#1d9e75]",
    icon: (
      <svg className="w-12 h-12 fill-white/80" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Community Engagement",
    description:
      "Hope! We share hope in Christ and connect with our communities as lives are transformed through our Music Center, Soccer Ministry, and The Fountain of Life.",
    href: "/pages/worship",
    bg: "from-[#993c1d] to-[#d85a30]",
    icon: (
      <svg className="w-12 h-12 fill-white/80" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2137] via-[#1a3a5c] to-[#0d2137]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 py-20 max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-sm tracking-widest uppercase mb-4 font-medium">
            Welcome to South Bend First SDA Church
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-8">
            We Have Found Jesus
            <br />
            Come and See!
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/pages/worship"
              className="bg-white text-[#1a3a5c] px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
            >
              Watch Message
            </Link>
            <Link
              href="/pages/worship"
              className="border border-white/60 text-white px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors no-underline"
            >
              More Messages
            </Link>
          </div>
        </div>
      </section>

      {/* Explore section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Explore!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploreCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`h-44 bg-gradient-to-br ${card.bg} flex items-center justify-center`}>
                {card.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{card.description}</p>
                <Link
                  href={card.href}
                  className="text-xs font-semibold text-[#1a3a5c] hover:underline tracking-wide no-underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upcoming Events</h2>
        <p className="text-gray-500 text-sm">No events at the moment.</p>
      </section>

      {/* HOPE section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="h-72 rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#378add] flex items-center justify-center">
            <svg className="w-20 h-20 fill-white/80" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-5 leading-snug">
              Helping Others Prepare for Eternity (HOPE)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our stories are meant to spark love, strengthen faith, and awaken hope. Order your
              free HOPE tracts today — read them, share them, and join us in spreading the message.
              You can also partner with us to support this ministry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pages/our-stories"
                className="bg-[#1a3a5c] text-white px-6 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-[#122940] transition-colors no-underline"
              >
                Learn More
              </Link>
              <Link
                href="/pages/giving"
                className="border border-[#1a3a5c] text-[#1a3a5c] px-6 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-[#1a3a5c] hover:text-white transition-colors no-underline"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}