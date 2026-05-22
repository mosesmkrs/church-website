import Link from "next/link";

// ── The 4 story entries matching the exact images & numbered layout on the live page ──
const stories = [
  {
    number: "01",
    title: "Hope Across the Miles",
    description:
      "After relocating from East Africa with nothing but faith, one family discovered a community at South Bend First that wrapped around them with warmth, practical help, and the love of Christ. What began as a desperate search for belonging became a story of radical hospitality and renewed purpose.",
    image:
      "https://static.wixstatic.com/media/a3c153_4c9ff7f594c1414f9f7894e514098894~mv2.jpg/v1/fill/w_756,h_566,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd5c21cdc57f4b19b00f8ec0988396fe_.jpg",
    imagePosition: "right", // image on right, text on left
    category: "Belonging",
    categoryColor: "bg-blue-50 text-blue-700",
  },
  {
    number: "02",
    title: "Searching for Something Real",
    description:
      "Marcus had spent years moving from church to church, never quite finding a place that felt honest. A friend invited him to a Koinonia Circle. No performance, no pretense — just people wrestling with Scripture and life together. He found his faith, and he found his people.",
    image:
      "https://static.wixstatic.com/media/a3c153_c3a1f52d22f34ebf807575c44a0b3c46~mv2.jpg/v1/fill/w_756,h_566,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/hasan-almasi-nKNm_75lH4g-unsplash%20Copy_j.jpg",
    imagePosition: "left", // image on left, text on right
    category: "Faith",
    categoryColor: "bg-green-50 text-green-700",
  },
  {
    number: "03",
    title: "A Tract That Crossed an Ocean",
    description:
      "A single HOPE tract left in an airport waiting room found its way into the hands of a traveler bound for West Africa. Months later, a letter arrived at 1936 E Altgeld St: a Bible study group of eleven people had formed — sparked by one small piece of paper and the Spirit of God.",
    image:
      "https://static.wixstatic.com/media/a3c153_b1efd27c479d430baf6513f717b4d7df~mv2.jpg/v1/fill/w_756,h_566,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/noah-boyer-mXz8dKrpO8w-unsplash.jpg",
    imagePosition: "right",
    category: "HOPE Ministry",
    categoryColor: "bg-orange-50 text-orange-700",
  },
  {
    number: "04",
    title: "From the Soccer Field to the Pulpit",
    description:
      "At fourteen, Jaylen came to South Bend First through the Soccer Ministry — skeptical, restless, not sure what he believed. Ten years later he stands at the front of the sanctuary leading youth Sabbath School. This is a story about what God does when a church refuses to give up on a kid.",
    image:
      "https://static.wixstatic.com/media/a3c153_a948e560c4fb44eb9ec9a30bf5c105c4~mv2.jpg/v1/fill/w_756,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sumner-mahaffey-7Y0NshQLohk-unsplash.jpg",
    imagePosition: "left",
    category: "Youth",
    categoryColor: "bg-purple-50 text-purple-700",
  },
];

// ── HOPE section data ──────────────────────────────────────────────────────
const hopePoints = [
  "Order free HOPE tracts to read, share, and distribute in your community",
  "Partner with us financially to keep printing and spreading the message",
  "Share testimonies that spark love, strengthen faith, and awaken hope",
];

export default function OurStoriesPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/a3c153_6f27754e06844d62a1708b316797fc08~mv2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0d2137]/75" />
        <div className="relative z-10 py-28 px-6 text-center max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            Testimonies &amp; Transformation
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Our Stories
          </h1>
          <p className="text-blue-200 text-base leading-relaxed">
            Real people. Real faith. Real transformation. These are the stories of lives
            touched and changed by the grace of Jesus Christ through this community.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Every person who walks through our doors carries a story. Some come searching,
          some come broken, some come full of questions they&apos;re afraid to ask out loud.
          These pages are a record of what happens when ordinary people encounter an
          extraordinary God — and a community willing to walk alongside them.
        </p>
      </section>

      {/* ── Numbered Stories — alternating layout ── */}
      <section className="pb-20 px-6 max-w-5xl mx-auto flex flex-col gap-0">
        {stories.map((story) => {
          const isImageRight = story.imagePosition === "right";
          return (
            <div
              key={story.number}
              className={`flex flex-col ${
                isImageRight ? "md:flex-row" : "md:flex-row-reverse"
              } gap-0 items-stretch border border-gray-200 rounded-2xl overflow-hidden mb-10 hover:shadow-lg transition-shadow bg-white`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 min-h-70 overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "280px" }}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 p-9 flex flex-col justify-center">
                {/* Number + category row */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: "transparent",
                      WebkitTextStroke: "1.5px #1a3a5c",
                      opacity: 0.18,
                    }}
                  >
                    {story.number}
                  </span>
                  <span
                    className={`text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded ${story.categoryColor}`}
                  >
                    {story.category}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {story.description}
                </p>

                {/* Read more */}
                <button className="self-start text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] hover:underline flex items-center gap-2">
                  Read Full Story
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── HOPE Ministry banner ── */}
      <section className="bg-[#1a3a5c] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
              Join the Mission
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 leading-snug">
              Helping Others Prepare for Eternity (HOPE)
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-7">
              Our stories are meant to spark love, strengthen faith, and awaken hope. The HOPE
              ministry produces tracts that carry these testimonies far beyond our walls —
              into waiting rooms, onto planes, across oceans.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {hopePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-blue-100">
                  <svg className="w-4 h-4 fill-[#93c5fd] shrink-0 mt-0.5" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pages/contact"
                className="bg-white text-[#1a3a5c] px-6 py-3 rounded text-xs font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
              >
                Order Free Tracts
              </Link>
              <Link
                href="https://adventistgiving.org/donate/ANF8JG"
                target="_blank"
                className="border border-white/50 text-white px-6 py-3 rounded text-xs font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors no-underline"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* Right — decorative quote card */}
          <div className="relative">
            <div className="bg-white/8 border border-white/15 rounded-2xl p-8">
              <svg className="w-10 h-10 fill-white/20 mb-5" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p className="text-white text-base leading-relaxed italic mb-5">
                &quot;Our stories are meant to spark love, strengthen faith, and awaken hope.&quot;
              </p>
              <div className="h-px bg-white/15 mb-5" />
              <p className="text-blue-300 text-xs tracking-widest uppercase font-medium">
                South Bend First SDA Church
              </p>
            </div>
            {/* Decorative glow */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(55,138,221,0.25) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Share Your Story CTA ── */}
      <section className="py-20 px-6 text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-[#1a3a5c]/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 fill-[#1a3a5c]" viewBox="0 0 24 24">
            <path d="M21 6.5C21 5.12 19.88 4 18.5 4h-13C4.12 4 3 5.12 3 6.5v9C3 16.88 4.12 18 5.5 18H8l-3 3h14l-3-3h2.5c1.38 0 2.5-1.12 2.5-2.5v-9zM13 14h-2v-2h2v2zm0-4h-2V7h2v3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-5">Share Your Story</h2>
        <p className="text-gray-600 leading-relaxed mb-8 text-sm">
          Has God done something remarkable in your life through South Bend First? We would
          love to hear from you. Your testimony could be the very thing that sparks faith in
          someone else who needs it.
        </p>
        <Link
          href="/pages/contact"
          className="inline-block bg-[#1a3a5c] hover:bg-[#122940] text-white px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase transition-colors no-underline"
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
}