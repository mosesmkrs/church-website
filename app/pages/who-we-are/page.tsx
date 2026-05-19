const values = [
  {
    title: "Faith",
    description:
      "We are rooted in Scripture and the Seventh-day Adventist beliefs, committed to sharing the everlasting gospel with the world.",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "With members from over 50 nations, we celebrate unity in diversity, cherishing every individual as part of our family.",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Service",
    description:
      "We serve our city through the Music Center, Soccer Ministry, and the Fountain of Life — transforming lives through hands-on outreach.",
    icon: (
      <svg className="w-8 h-8 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "1962", event: "Ceremonial groundbreaking on October 28 — members and visitors gathered to mark the start of the new church building." },
  { year: "1970s", event: "Congregation grows steadily, launching early community outreach programs throughout South Bend." },
  { year: "1990s", event: "Music Ministry and youth programs expand, drawing families from across the region." },
  { year: "2000s", event: "Soccer Ministry and Fountain of Life established, deepening roots in the South Bend community." },
  { year: "Today", event: "A vibrant, intergenerational church representing over 50 nations, united in faith and service." },
];

export default function WhoWeArePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">Our Story</p>
          <h1 className="text-4xl font-semibold text-white mb-5">Who We Are</h1>
          <p className="text-blue-200 text-base leading-relaxed">
            A diverse, Spirit-filled church in the heart of South Bend — rooted in Scripture,
            united by love, and sent into the world to share the hope of Jesus Christ.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our History</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          On the morning of Sunday, October 28, 1962, church members and visitors gathered to witness
          the ceremonial groundbreaking for the new church. That moment marked the beginning of a
          journey that has shaped generations of faithful believers in South Bend, Indiana.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Over the decades, South Bend First has grown into a thriving, intergenerational congregation
          representing more than 50 nations. We are a church that believes in the power of community,
          the truth of Scripture, and the transforming love of Jesus Christ.
        </p>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">A History of Faithfulness</h2>
          <div className="relative border-l-2 border-[#1a3a5c]/20 pl-8 flex flex-col gap-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[2.65rem] top-1 w-4 h-4 rounded-full bg-[#1a3a5c] border-2 border-white" />
                <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-1">{item.year}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">{v.icon}</div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-3">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Koinonia Circles */}
      <section className="bg-[#0d2137] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-5">Koinonia Circles</h2>
          <p className="text-blue-200 leading-relaxed">
            South Bend First showcases unity in diversity with its intergenerational membership
            representing over 50 nations. In this community, every individual is cherished. Our
            Koinonia Circles are small groups designed to foster deep fellowship, accountability,
            and spiritual growth among members of all ages and backgrounds.
          </p>
        </div>
      </section>
    </main>
  );
}