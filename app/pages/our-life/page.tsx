import Link from "next/link";

// ── Koinonia circle groups ─────────────────────────────────────────────────
const circles = [
  {
    name: "Anchored Love",
    description:
      "A circle built around deep, committed relationships — studying Scripture and anchoring each other in God's unchanging love.",
    image:
      "https://static.wixstatic.com/media/7eeecb_6a3d4a014f664ae39167014db47c3053~mv2.jpeg/v1/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash%202.jpeg",
    tag: "Fellowship",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    name: "Digital Bible School",
    description:
      "An online-friendly circle that meets digitally and in person — perfect for busy schedules, remote members, and digital learners.",
    image:
      "https://static.wixstatic.com/media/7eeecb_5cfd9868570f44eabe0b8ecd07900d6e~mv2.jpg/v1/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash%202.jpg",
    tag: "Bible Study",
    tagColor: "bg-green-50 text-green-700",
  },
  {
    name: "Expert Guidance Package",
    description:
      "A mentorship-focused circle pairing newer believers with seasoned members for guided spiritual growth and life discipleship.",
    image:
      "https://static.wixstatic.com/media/7eeecb_83403ca6b2434c1ea2efe89a637adb0c~mv2.jpg/v1/fill/w_286,h_335,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash%202.jpg",
    tag: "Discipleship",
    tagColor: "bg-orange-50 text-orange-700",
  },
];

// ── Events ─────────────────────────────────────────────────────────────────
const events = [
  {
    title: "Mission Misunderstood",
    date: "Sat, Jan 31",
    location: "South Bend",
    series: "Are You Watching! Prophecy Series",
    href: "https://www.sbadventist.net/events-1/mission-misunderstood",
    image:
      "https://static.wixstatic.com/media/7eeecb_2a89b780dc734a30a77719963fc3ebe1~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7eeecb_2a89b780dc734a30a77719963fc3ebe1~mv2.png",
    shareUrl: "https://www.sbadventist.net/events-1/mission-misunderstood",
  },
  {
    title: "Mission Impossible",
    date: "Sat, Jan 24",
    location: "South Bend",
    series: "Are You Watching! Prophecy Series",
    href: "https://www.sbadventist.net/events-1/mission-impossible",
    image:
      "https://static.wixstatic.com/media/7eeecb_41ee845abfff46d495a62fdd474c2f27~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7eeecb_41ee845abfff46d495a62fdd474c2f27~mv2.png",
    shareUrl: "https://www.sbadventist.net/events-1/mission-impossible",
  },
  {
    title: "Mission Delayed",
    date: "Sat, Jan 17",
    location: "South Bend",
    series: "Are You Watching! Prophecy Series",
    href: "https://www.sbadventist.net/events-1/mission-delayed-1",
    image:
      "https://static.wixstatic.com/media/7eeecb_8efcce2572864026a88acfe2ed359ce5~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7eeecb_8efcce2572864026a88acfe2ed359ce5~mv2.png",
    shareUrl: "https://www.sbadventist.net/events-1/mission-delayed-1",
  },
  {
    title: "Beauty of God Conference",
    date: "Fri, Nov 14",
    location: "South Bend",
    series: "",
    href: "https://www.sbadventist.net/events-1/beauty-of-god-conference",
    image:
      "https://static.wixstatic.com/media/7eeecb_4883109c7a2e4c999f0f1c56815c011c~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7eeecb_4883109c7a2e4c999f0f1c56815c011c~mv2.png",
    shareUrl: "https://www.sbadventist.net/events-1/beauty-of-god-conference",
  },
  {
    title: "You Still Belong",
    date: "Sat, Nov 08",
    location: "South Bend",
    series: "",
    href: "https://www.sbadventist.net/events-1/you-still-belong",
    image:
      "https://static.wixstatic.com/media/7eeecb_0147356c14444c9ba6869624e15d0dca~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7eeecb_0147356c14444c9ba6869624e15d0dca~mv2.png",
    shareUrl: "https://www.sbadventist.net/events-1/you-still-belong",
  },
  {
    title: "Reach & Treat",
    date: "Sat, Nov 01",
    location: "South Bend",
    series: "",
    href: "https://www.sbadventist.net/events-1/reach-treat",
    image:
      "https://static.wixstatic.com/media/7eeecb_72ccb1671bf94f65abcef3945c6bffa9~mv2.jpg/v1/fill/w_152,h_152,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7eeecb_72ccb1671bf94f65abcef3945c6bffa9~mv2.jpg",
    shareUrl: "https://www.sbadventist.net/events-1/reach-treat",
  },
];

// ── Share icon helper ───────────────────────────────────────────────────────
function ShareButtons({ url }: { url: string; title: string }) {
  const encoded = encodeURIComponent(url);
  const msg = encodeURIComponent("Check out this event. Hope to see you there!");
  return (
    <div className="flex items-center gap-2 mt-3">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}&quote=${msg}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Facebook"
        className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#1877f2] flex items-center justify-center transition-colors group"
      >
        <svg className="w-3.5 h-3.5 fill-gray-500 group-hover:fill-white" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${msg}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on Twitter"
        className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black flex items-center justify-center transition-colors group"
      >
        <svg className="w-3.5 h-3.5 fill-gray-500 group-hover:fill-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encoded}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on LinkedIn"
        className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#0a66c2] flex items-center justify-center transition-colors group"
      >
        <svg className="w-3.5 h-3.5 fill-gray-500 group-hover:fill-white" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function OurLifePage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/3b1f25_9d35e1c9ecf3463ca445233a158dcb86.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0d2137]/78" />
        <div className="relative z-10 py-28 px-6 text-center max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            Community &amp; Ministries
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Our Life
          </h1>
          <p className="text-blue-200 text-base leading-relaxed">
            We live to honor and glorify our God. Our ministries are centered on Christ and
            grounded in God&apos;s word. Our goal is to share Jesus with our family, friends,
            and neighbors.
          </p>
        </div>
      </section>

      {/* ── Koinonia Circles — heading + description ── */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-3">
          Small Groups
        </p>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Koinonia Circles</h2>
        <p className="text-lg font-medium text-[#1a3a5c] mb-8 italic">
          We Grow. We Care. We Share.
        </p>
        <div className="text-gray-600 leading-relaxed text-[15px] space-y-5 text-left">
          <p>
            Koinonia Circles are small, life-giving communities where faith becomes friendship
            and discipleship becomes real. The word <em>Koinonia</em> (Greek: κοινωνία) means
            fellowship, participation, and sharing — the very essence of what the early church
            lived in Acts 2:42–47.
          </p>
          <p>
            Each Circle meets regularly to grow in Christ, care for one another, and share His
            love with neighbors. Whether you&apos;re exploring faith for the first time or seeking a
            deeper connection with God and others, there&apos;s a place for you here.
          </p>
          <p>
            Our Circles gather in homes, cafés, and parks across the city — studying the Bible,
            serving together, praying, and enjoying authentic friendship. Join a Koinonia Circle
            and experience community the way God intended it: genuine people, authentic faith,
            real connection.
          </p>
        </div>
      </section>

      {/* ── Koinonia Circles — cards ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {circles.map((circle) => (
            <div
              key={circle.name}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={circle.image}
                  alt={circle.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Body */}
              <div className="p-6">
                <span
                  className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded mb-3 ${circle.tagColor}`}
                >
                  {circle.tag}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-3">
                  {circle.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{circle.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join a circle CTA */}
        <div className="text-center mt-12">
          <Link
            href="/pages/contact"
            className="inline-block bg-[#1a3a5c] hover:bg-[#122940] text-white px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase transition-colors no-underline"
          >
            Join a Circle
          </Link>
        </div>
      </section>

      {/* ── Events ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-2 text-center">
          What&apos;s Happening
        </p>
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Events</h2>

        <div className="flex flex-col divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex items-start gap-5 p-5 bg-white hover:bg-gray-50 transition-colors"
            >
              {/* Thumbnail */}
              <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                  {/* Date */}
                  <span className="flex items-center gap-1 text-xs text-[#1a3a5c] font-medium">
                    <svg className="w-3.5 h-3.5 fill-[#1a3a5c]" viewBox="0 0 24 24">
                      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                    </svg>
                    {event.date}
                  </span>
                  {/* Location */}
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 fill-gray-400" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                {event.series && (
                  <p className="text-xs text-gray-400 italic mb-1">{event.series}</p>
                )}
                {/* Share buttons */}
                <ShareButtons url={event.shareUrl} title={event.title} />
              </div>

              {/* Details link */}
              <a
                href={event.href}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 self-center border border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white text-[10px] font-semibold tracking-widest uppercase px-4 py-2 rounded transition-colors no-underline"
              >
                Details
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0d2137] py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-5">
            Come. Belong. Grow.
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8 text-sm">
            Whether through a Koinonia Circle, an upcoming event, or simply joining us on
            Sabbath — there is a place for you in this community. We&apos;d love to welcome you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/pages/contact"
              className="bg-white text-[#1a3a5c] px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
            >
              Get in Touch
            </Link>
            <Link
              href="/pages/worship"
              className="border border-white/50 text-white px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors no-underline"
            >
              Join Us Saturday
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}