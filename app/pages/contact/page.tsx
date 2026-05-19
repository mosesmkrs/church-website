"use client";

import { useState } from "react";

const contactDetails = [
  {
    label: "Address",
    value: "1936 E Altgeld St, South Bend, IN 46614",
    icon: (
      <svg className="w-5 h-5 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "574-234-3044",
    icon: (
      <svg className="w-5 h-5 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "office@sbadventist.org",
    href: "mailto:office@sbadventist.org",
    icon: (
      <svg className="w-5 h-5 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "Service Times",
    value: "Bible Study 9:45 AM · Worship 11:00 AM (Saturday)",
    icon: (
      <svg className="w-5 h-5 fill-[#1a3a5c]" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0d2137] to-[#1a3a5c] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3 font-medium">
            Get in Touch
          </p>
          <h1 className="text-4xl font-semibold text-white mb-5">Contact Us</h1>
          <p className="text-blue-200 text-base leading-relaxed">
            We would love to hear from you. Whether you have a question, prayer request, or
            just want to connect — our doors and inboxes are open.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left — info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Church Information</h2>
            <div className="flex flex-col gap-7">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0">{d.icon}</div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-1">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-sm text-[#1a3a5c] hover:underline no-underline"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 h-52 rounded-xl bg-gradient-to-br from-[#1a3a5c]/10 to-[#1a3a5c]/5 border border-gray-200 flex flex-col items-center justify-center gap-3">
              <svg className="w-10 h-10 fill-[#1a3a5c]/30" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p className="text-sm text-gray-400">1936 E Altgeld St, South Bend, IN 46614</p>
              <a
                href="https://maps.google.com/?q=1936+E+Altgeld+St+South+Bend+IN+46614"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#1a3a5c] hover:underline no-underline tracking-wide"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Send a Message</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                <svg className="w-12 h-12 fill-green-500 mx-auto mb-4" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <h3 className="text-base font-semibold text-green-800 mb-2">Message sent!</h3>
                <p className="text-sm text-green-700">
                  Thank you for reaching out. We will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-gray-600 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a5c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-gray-600 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a5c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-gray-600 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1a3a5c]"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="membership">Membership</option>
                    <option value="hope">HOPE Tracts</option>
                    <option value="school">School Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-gray-600 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1a3a5c] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1a3a5c] text-white px-8 py-3 rounded-lg text-sm font-semibold tracking-widest uppercase hover:bg-[#122940] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Visiting info */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Planning a Visit?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We would love to welcome you in person. Join us any Saturday — no prior arrangements
            needed. Dress comfortably, come as you are, and expect a warm reception from our family.
          </p>
        </div>
      </section>
    </main>
  );
}