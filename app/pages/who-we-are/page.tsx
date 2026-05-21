const teamMembers = [
  {
    name: "Omwocha Nyaribo, MDiv",
    role: "Senior Pastor",
    bio: "Pastor Omwocha Nyaribo serves as the Senior Pastor of South Bend First Seventh-day Adventist Church. He holds an MDiv and is passionate about community outreach, discipleship, and leading the congregation in worship and service.",
    image: "https://static.wixstatic.com/media/7eeecb_28484739f06444f597912f85bcd31596~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/onk%20(1).jpg",
  },
  {
    name: "Janet Gomez",
    role: "Office Manager",
    bio: "Janet Gomez serves as the Office Manager of South Bend First Seventh-day Adventist Church, overseeing the day-to-day administrative operations and supporting the pastoral team and congregation.",
    image: "https://static.wixstatic.com/media/a3c153_100f08099c424ff79cb1d9d2c57a2aa6~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4184.jpg",
  },
];

const historyParagraphs = [
  `During the late 1800s, there was an active Seventh-day Adventist Church in North Liberty, and it was felt there should be a presence in the South Bend area, so tent meetings were held in July and August of 1899. Because of the interest, Elder I. G. Bigelow established a Sabbath School in connection with the tent meetings and the 11 members met in various homes until they rented an upstairs hall at 911 South Michigan Street.`,
  `More members were added, including an elderly lady who had been keeping the Sabbath alone for 23 years. On June 30, 1900, Elder R. I. Donnell, President of the Indiana Conference, met with the church family and officially organized the South Bend church with eighteen charter members. Elder Bigelow held the first baptism of July 14, 1900, in the Saint Joseph River, adding three more members. The first communion service was conducted on July 21. Christian education was very important to these members, and a church school, which met in various locations, including the Dean Building and the Broadway Hall, was in existence by 1917. In March 1921 a committee of five was commissioned to locate a suitable lot for a church and school. A wooded lot in River Park, on Pleasant Street, was one choice. However, they purchased property at Ewing and Saint Joseph Street, where a school was constructed first.`,
  `In January 1926, after considering other sites and other church buildings it was decided to build a church on the corner of Ewing and Saint Joseph St. where the school was located, so they moved the school to the next lot east and by fall the students were attending school in the basement of the church and the school building became the parsonage. In December 1926, the first baptism was held in the new church, and on January 2, 1927, the church was consecrated — just one year after the building committee was established. The congregation had raised over $19,000.00 during that year, and by December 1927, the church was debt-free.`,
  `The Little Colonial Seventh-day Adventist Church continued to grow. School was held in the basement, and on Friday, everything was stored and the rooms were ready for Sabbath School classes, and eventually, two church services were held each Sabbath morning. In 1955, 8 acres of property on Ironwood, south of Ewing and running west to Hoke Street, was available for $14,400.00. The purchase of the property was authorized in April, and in November, it was voted to build a school before constructing a church. Plans for the school were approved in February 1956, and it was decided to add the 9th grade. Construction was begun with Oris Kinsey, one of our church members, as the general contractor. Members put many hours of free labor into the building on Sundays and after work during the week. The wooden arches came in by train and were brought to the building site on a borrowed truck. Students moved into the school in the spring of 1957 and the 10th grade was added in the fall. The school was dedicated on November 1, 1958.`,
  `The Little Colonial Church was sold in 1960, and once again, the students at South Bend Jr. Academy put their books away on Friday, moved their desks up against the wall, and the classrooms became Sabbath School rooms, and church and adult Sabbath School were held in the gym for four years. On Sunday morning, October 28, 1962, church members and visitors witnessed the groundbreaking for the new church. Once again, people volunteered their time to make the church a reality. There were setbacks, especially when, during a windstorm, the north wall of the sanctuary blew down, but finally, on Sabbath, March 21, 1964, the congregation met in the school gymnasium, and with the pastor and elders leading the procession to the church, the Sabbath services were completed in the new building. The church was dedicated debt-free on Sabbath, November 19, 1966.`,
  `It can be said that the entire church and school complex is in existence due to a congregation of loyal, devoted, self-sacrificing members who have had dreams and ambitions and given generously of their financial resources and time for the last 100 years.`,
];

export default function WhoWeArePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-linear-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#93c5fd] text-3xl tracking-widest uppercase mb-3 font-medium">
            About Us
          </p>
          <p className="text-blue-200 text-base leading-relaxed">
          No matter your story, your questions, your background, or your struggles, you are welcome. Revelation 22:17 reminds us of the invitation Jesus still gives: “Let anyone who is thirsty come.” If you&apos;re longing for peace, healing, purpose, or just a place to breathe again, there is room here for you.
          </p>
        </div>
      </section>

      {/* ── Welcome / About ── */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <p className="text-3xl font-semibold tracking-widest text-[#1a3a5c] mb-3 text-center">
          There&apos;s room here for you
        </p>
        <h2 className="text-md font-semibold text-gray-900 text-center mb-10">
          We&apos;re so glad you&apos;re here.
        </h2>
        <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
          <p>
            At our core, we long to be known as followers of Jesus — not just by our words, but by
            how we love and how we live together. Jesus said the world would recognize His people
            by their love (John 13:34–35) and unity (John 17:23). That&apos;s the kind of community
            we&apos;re building — one shaped by grace, compassion, and authentic relationships.
          </p>
          <p>
            And there&apos;s room here for you. No matter your story, your questions, your background,
            or your struggles, you are welcome. Revelation 22:17 reminds us of the invitation Jesus
            still gives: &quot;Let anyone who is thirsty come.&quot; If you&apos;re longing for peace, healing,
            purpose, or just a place to breathe again — Jesus offers all of that and more.
          </p>
          <p>
            He is gentle and humble. He is full of mercy and overflowing with hope. And we want our
            church to reflect His heart — a place where the tired can rest, the searching can find
            direction, and all people can feel loved and accepted.
          </p>
          <p>
            So whether you&apos;re visiting for the first time or returning after a while, know this:
            you&apos;re not just welcome to join us — you&apos;re invited to belong.
          </p>
          <p className="font-medium text-gray-800">
            Welcome to a place where Jesus is the center, and people matter deeply.
          </p>
        </div>
      </section>

      {/* ── Vision / What We Do / Community ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#1a3a5c]/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 fill-[#1a3a5c]" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To build an active and authentic congregation where people from every nation, tribe,
              language, culture, and societal group come and find Jesus.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#0f6e56]/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 fill-[#0f6e56]" viewBox="0 0 24 24">
                <path d="M16.5 6.5c0 1.5-.5 2.9-1.3 4L20 16.2V19h-2.8l-4.7-4.7c-.5.1-1 .2-1.5.2C7.9 14.5 5 11.6 5 8s2.9-6.5 6.5-6.5 5.5 2.9 5.5 6.5zM11.5 3C8.5 3 6 5.5 6 8.5S8.5 14 11.5 14 17 11.5 17 8.5 14.5 3 11.5 3z" />
              </svg>
            </div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-3">
              What We Do
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Serve like Jesus: mingle with our neighbors, genuinely desiring their good, showing
              honest empathy, ministering to their felt needs, winning their confidence, and
              inviting them to follow Jesus.
            </p>
          </div>

          {/* Our Community */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#993c1d]/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 fill-[#993c1d]" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-3">
              Our Community
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We aim to embody a spirit of infectious, divine love and harmony. We welcome all who
              seek a deeper connection and a sense of belonging.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-2 text-center">
          Leadership
        </p>
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-3">Meet the Team</h2>
        <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-14">
          Meet our dedicated pastoral team — committed to serving God and leading our congregation
          with wisdom, compassion, and love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-72 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-7">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs font-medium tracking-widest uppercase text-[#1a3a5c] mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{member.bio}</p>
                {/* Social icons */}
                <div className="flex gap-3">
                  {["Facebook", "Twitter", "LinkedIn"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      aria-label={platform}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1a3a5c] hover:text-white flex items-center justify-center transition-colors text-gray-500"
                    >
                      {platform === "Facebook" && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      )}
                      {platform === "Twitter" && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      )}
                      {platform === "LinkedIn" && (
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our History ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#1a3a5c] mb-2 text-center">
            Since 1899
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Our History</h2>

          <div className="space-y-6 text-gray-600 leading-relaxed text-[15px]">
            {historyParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="text-sm text-gray-400 italic mt-2">Compiled by Ardis Meyer</p>
          </div>

          {/* Vimeo embed */}
          <div className="mt-14 rounded-xl overflow-hidden aspect-video shadow-md">
            <iframe
              src="https://player.vimeo.com/video/137799588?autoplay=false&muted=false&loop=false&byline=false&portrait=false&title=false"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="South Bend First SDA Church History Video"
            />
          </div>
        </div>
      </section>

      {/* ── Find Your Faith CTA ── */}
      <section className="bg-[#0d2137] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">Find Your Faith</h2>
          <p className="text-blue-200 leading-relaxed mb-8">
            You don&apos;t have to have it all figured out to belong here. Come with your questions,
            your doubts, your hopes — and discover a community walking together toward Jesus.
          </p>
          <a
            href="/pages/contact"
            className="inline-block bg-white text-[#1a3a5c] px-8 py-3 rounded text-sm font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors no-underline"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}