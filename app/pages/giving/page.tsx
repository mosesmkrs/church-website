import Link from "next/link";

const givingOptions = [
  {
    title: "Online Giving",
    description:
      "Give securely online through Adventist Giving — the official platform for Seventh-day Adventist churches. Fast, safe, and available anytime.",
    cta: "Give Online",
    href: "https://adventistgiving.org/#/org/ANF8JG/envelope/start",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
  {
    title: "In-Person Giving",
    description:
      "Bring your tithe and offerings during our Sabbath worship service. Collection is taken during the service each week.",
    cta: "Service Times",
    href: "/pages/worship",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    title: "HOPE Ministry",
    description:
      "Support our HOPE tract ministry. Your gift helps us print and distribute free tracts that spark love, strengthen faith, and awaken hope.",
    cta: "Donate to HOPE",
    href: "/pages/our-stories",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

const usages = [
  { label: "Local Church Ministry", percent: 40 },
  { label: "Community Outreach", percent: 25 },
  { label: "Education & Schools", percent: 20 },
  { label: "Global Mission", percent: 15 },
];

export default function GivingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            Generosity
          </p>
          <h1 className="text-4xl font-semibold text-white mb-5">Give & Support</h1>
          <p className="text-blue-200 text-base leading-relaxed">
            Your generosity fuels our mission — from local community outreach to global gospel
            proclamation. Every gift makes an eternal difference.
          </p>
          <Link
            href="https://adventistgiving.org/#/org/ANF8JG/envelope/start"
            target="_blank"
            className="inline-block mt-8 bg-white text-[#1a3a5c] px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
          >
            Give Now
          </Link>
        </div>
      </section>

      {/* Ways to give */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">Ways to Give</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {givingOptions.map((opt) => (
            <div
              key={opt.title}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="mb-4">{opt.icon}</div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-3">
                {opt.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                {opt.description}
              </p>
              <Link
                href={opt.href}
                target={opt.href.startsWith("http") ? "_blank" : undefined}
                className="bg-[#1a3a5c] text-white text-center px-5 py-2.5 rounded text-xs font-semibold tracking-widest uppercase hover:bg-[#122940] transition-colors no-underline"
              >
                {opt.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How funds are used */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            How Your Gift Is Used
          </h2>
          <div className="flex flex-col gap-6">
            {usages.map((u) => (
              <div key={u.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{u.label}</span>
                  <span className="text-sm font-semibold text-[#1a3a5c]">{u.percent}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1a3a5c] rounded-full"
                    style={{ width: `${u.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture CTA */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
          &quot;Each of you should give what you have decided in your heart to give, not reluctantly or
          under compulsion, for God loves a cheerful giver.&quot;
        </blockquote>
        <p className="text-sm text-gray-500 mb-8">— 2 Corinthians 9:7</p>
        <Link
          href="https://adventistgiving.org/#/org/ANF8JG/envelope/start"
          target="_blank"
          className="inline-block bg-[#1a3a5c] text-white px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-[#122940] transition-colors no-underline"
        >
          Give Cheerfully
        </Link>
      </section>
    </main>
  );
}