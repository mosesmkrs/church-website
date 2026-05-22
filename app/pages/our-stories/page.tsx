import Link from "next/link";

const stories = [
  {
    category: "Faith",
    title: "A New Life in South Bend",
    excerpt:
      "After relocating from West Africa, one family found not just a church home, but a community that embraced them and helped them rediscover their faith in a new land.",
  },
  {
    category: "Community",
    title: "The Music That Brought Us Together",
    excerpt:
      "Two strangers — one from Brazil, one from South Korea — found friendship, purpose, and a shared love of worship through the South Bend First Music Center.",
  },
  {
    category: "Hope",
    title: "Restored Through the Fountain of Life",
    excerpt:
      "Facing hardship and uncertainty, a single mother discovered practical help and spiritual renewal through the Fountain of Life outreach ministry.",
  },
  {
    category: "Youth",
    title: "From the Soccer Field to the Pulpit",
    excerpt:
      "A teenager who first connected with the church through our Soccer Ministry now leads youth Sabbath School — a testimony to what God does through community.",
  },
  {
    category: "Faith",
    title: "HOPE Tracts That Crossed an Ocean",
    excerpt:
      "A single HOPE tract left in a waiting room found its way into the hands of a traveler, sparking a Bible study group thousands of miles from South Bend.",
  },
  {
    category: "Community",
    title: "Fifty Nations, One Family",
    excerpt:
      "Our Koinonia Circles bring together members from over 50 countries every week — a living demonstration that in Christ, every wall is broken down.",
  },
];

const categoryColors: Record<string, string> = {
  Faith: "bg-blue-50 text-blue-700",
  Community: "bg-green-50 text-green-700",
  Hope: "bg-orange-50 text-orange-700",
  Youth: "bg-purple-50 text-purple-700",
};

export default function OurStoriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-linear-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            Testimonies
          </p>
          <h1 className="text-4xl font-semibold text-white mb-5">Our Stories</h1>
          <p className="text-blue-200 text-base leading-relaxed">
            Stories of faith, hope, and love — shared by real people whose lives have been
            touched and transformed by the grace of Jesus Christ.
          </p>
        </div>
      </section>

      {/* HOPE Ministry banner */}
      <section className="bg-[#1a3a5c] py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-3">
              Helping Others Prepare for Eternity (HOPE)
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed">
              Our stories are meant to spark love, strengthen faith, and awaken hope. Order your
              free HOPE tracts today — read them, share them, and join us in spreading the message.
              You can also partner with us to support this ministry financially.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/pages/contact"
              className="bg-white text-[#1a3a5c] px-6 py-3 rounded text-xs font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline text-center"
            >
              Order Free Tracts
            </Link>
            <Link
              href="https://adventistgiving.org/donate/ANF8JG"
              target="_blank"
              className="border border-white/60 text-white px-6 py-3 rounded text-xs font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors no-underline text-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stories grid */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">
          Stories of Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.title}
              className="border border-gray-200 rounded-xl p-7 hover:shadow-md transition-shadow flex flex-col"
            >
              <span
                className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4 self-start ${categoryColors[story.category]}`}
              >
                {story.category}
              </span>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug">
                {story.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{story.excerpt}</p>
              <button className="mt-5 text-xs font-semibold text-[#1a3a5c] hover:underline self-start tracking-wide">
                Read Full Story →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Share your story CTA */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">Share Your Story</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Has God done something remarkable in your life through South Bend First? We would love
            to hear from you and share your testimony to encourage others.
          </p>
          <Link
            href="/pages/contact"
            className="inline-block bg-[#1a3a5c] text-white px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-[#122940] transition-colors no-underline"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}