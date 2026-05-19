import Link from "next/link";

const programs = [
  {
    title: "Early Childhood",
    grades: "Pre-K – K",
    description:
      "A nurturing environment where the youngest learners develop foundational skills through play, discovery, and faith-based instruction.",
  },
  {
    title: "Elementary",
    grades: "Grades 1–4",
    description:
      "Rigorous academics combined with character education, music, and physical activity — building confident, curious learners.",
  },
  {
    title: "Middle School",
    grades: "Grades 5–8",
    description:
      "Preparing students for high school and life through challenging coursework, leadership opportunities, and spiritual growth.",
  },
];

const highlights = [
  { stat: "K–8", label: "Grades offered" },
  { stat: "50+", label: "Nations represented" },
  { stat: "Faith", label: "Centered curriculum" },
  { stat: "1:1", label: "Student care focus" },
];

export default function OurSchoolPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            Christian Education
          </p>
          <h1 className="text-4xl font-semibold text-white mb-5">South Bend Junior Academy</h1>
          <p className="text-blue-200 text-base leading-relaxed">
            A place where academic excellence meets faith formation — equipping students to think,
            serve, and lead for eternity.
          </p>
          <Link
            href="https://www.oursbja.com/"
            target="_blank"
            className="inline-block mt-8 bg-white text-[#1a3a5c] px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
          >
            Visit School Website
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="text-3xl font-semibold text-[#1a3a5c] mb-1">{h.stat}</p>
              <p className="text-xs text-gray-500 tracking-wide uppercase">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">About Our School</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              South Bend Junior Academy is a Seventh-day Adventist school affiliated with South Bend
              First SDA Church. We provide a Christ-centered education that nurtures the whole
              child — spiritually, academically, socially, and physically.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our dedicated faculty are committed to helping every student discover their God-given
              potential and develop a personal relationship with Jesus Christ.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We welcome students from all backgrounds and invite you to become part of our
              school family.
            </p>
          </div>
          <div className="h-72 rounded-xl bg-gradient-to-br from-[#0f6e56] to-[#1d9e75] flex items-center justify-center">
            <svg className="w-20 h-20 fill-white/80" viewBox="0 0 24 24">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <span className="inline-block bg-[#1a3a5c]/10 text-[#1a3a5c] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded mb-4">
                  {p.grades}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 px-6 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-5">Enroll Your Child</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Spaces are limited. Contact us or visit the school website to learn about enrollment,
          tuition assistance, and upcoming open house events.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://www.oursbja.com/"
            target="_blank"
            className="bg-[#1a3a5c] text-white px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-[#122940] transition-colors no-underline"
          >
            Learn More
          </Link>
          <Link
            href="/pages/contact"
            className="border border-[#1a3a5c] text-[#1a3a5c] px-7 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-[#1a3a5c] hover:text-white transition-colors no-underline"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}