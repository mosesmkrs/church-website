const lifeAreas = [
  {
    title: "Youth & Young Adults",
    description:
      "From Pathfinders to young adult fellowships, we invest in the next generation — creating spaces where young people can grow in faith, build friendships, and discover their calling.",
    bg: "from-[#1a3a5c] to-[#2a5a8c]",
    icon: (
      <svg className="w-10 h-10 fill-white/80" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Family Life",
    description:
      "We believe the family is the foundational unit of society. Our family ministries support marriages, parenting, and intergenerational relationships through workshops and fellowships.",
    bg: "from-[#0f6e56] to-[#1d9e75]",
    icon: (
      <svg className="w-10 h-10 fill-white/80" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "Women's Ministry",
    description:
      "A community of women encouraging one another in faith, purpose, and service. Through retreats, Bible studies, and outreach, women flourish and lead at South Bend First.",
    bg: "from-[#993c1d] to-[#d85a30]",
    icon: (
      <svg className="w-10 h-10 fill-white/80" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Men's Ministry",
    description:
      "Inspiring men to be spiritual leaders in their homes, workplaces, and communities. Monthly gatherings, mentorship, and service projects strengthen brotherhood in Christ.",
    bg: "from-[#534ab7] to-[#7f77dd]",
    icon: (
      <svg className="w-10 h-10 fill-white/80" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    description:
      "Adventists are known for healthy living. We offer cooking classes, wellness seminars, and health screenings — caring for the whole person as God's temple.",
    bg: "from-[#1d9e75] to-[#0f6e56]",
    icon: (
      <svg className="w-10 h-10 fill-white/80" viewBox="0 0 24 24">
        <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2C20 10.48 17.33 6.55 12 2z" />
      </svg>
    ),
  },
  {
    title: "Prayer Ministry",
    description:
      "Prayer is the heartbeat of our church. Our intercessory prayer team meets weekly, and we invite all members to bring their needs to God together in faith.",
    bg: "from-[#3b6d11] to-[#639922]",
    icon: (
      <svg className="w-10 h-10 fill-white/80" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
];

const upcomingActivities = [
  { name: "Sabbath Potluck", schedule: "First Sabbath of each month", note: "Bring a dish to share!" },
  { name: "Pathfinders Meeting", schedule: "Every Wednesday, 6:00 PM", note: "Ages 10–15 welcome" },
  { name: "Women's Bible Circle", schedule: "Thursdays, 10:00 AM", note: "All women invited" },
  { name: "Men's Breakfast", schedule: "Second Saturday, 8:00 AM", note: "Before Bible Study" },
];

export default function OurLifePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            Community Life
          </p>
          <h1 className="text-4xl font-semibold text-white mb-5">Our Life Together</h1>
          <p className="text-blue-200 text-base leading-relaxed">
            Church is more than a Sunday — or in our case, a Saturday — service. It is a community
            of people living, growing, and serving together every day of the week.
          </p>
        </div>
      </section>

      {/* Ministry grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">
          Ministries for Every Season of Life
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifeAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`h-36 bg-gradient-to-br ${area.bg} flex items-center justify-center`}>
                {area.icon}
              </div>
              <div className="p-7">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regular activities */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Regular Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {upcomingActivities.map((act) => (
              <div
                key={act.name}
                className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{act.name}</h3>
                <p className="text-xs text-[#1a3a5c] font-medium mb-2 tracking-wide">
                  {act.schedule}
                </p>
                <p className="text-xs text-gray-500">{act.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity quote */}
      <section className="bg-[#0d2137] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <svg className="w-10 h-10 fill-white/20 mx-auto mb-6" viewBox="0 0 24 24">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
          <p className="text-xl text-white leading-relaxed font-light italic mb-6">
            &quot;Unity in diversity — more than 50 nations, one Spirit, one Lord, one faith.&quot;
          </p>
          <p className="text-blue-300 text-sm tracking-wide">South Bend First SDA Church</p>
        </div>
      </section>
    </main>
  );
}