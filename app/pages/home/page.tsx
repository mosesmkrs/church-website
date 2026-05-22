import Link from "next/link";
import Image from "next/image";

const exploreCards = [
  {
    title: "About Our Church",
    description:
      "On the morning of Sunday, October 28, 1962, church members and visitors were present to witness the ceremonial groundbreaking for the new church.",
    href: "/pages/who-we-are",
    image: "/church.jpeg",
  },
  {
    title: "Koinonia Circles",
    description:
      "South Bend First showcases unity in diversity with its intergenerational membership representing over 50 nations. In this community, every individual is cherished.",
    href: "/pages/who-we-are",
    image: "/koinonia.jpeg",
  },
  {
    title: "Community Engagement",
    description:
      "Hope! We share hope in Christ and connect with our communities as lives are transformed through our Music Center, Soccer Ministry, and The Fountain of Life.",
    href: "/pages/worship",
    image: "/community_engagement.jpeg",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-120 flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hope_section.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 " />
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
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
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
          <div className="h-72 rounded-xl flex items-center justify-center">
            <Image
              src="/helping_others.jpg"
              alt="HOPE Tracts"
              width={800}
              height={800}
              className="object-cover rounded-lg shadow-lg"
            />
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
                href="https://adventistgiving.org/donate/ANF8JG"
                target="_blank"
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