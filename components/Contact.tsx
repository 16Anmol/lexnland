"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import Reveal from "./Reveal";

const INFO = [
  { icon: Mail, label: "Email", value: "hello@lexnland.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Studio", value: "Bengaluru, Karnataka, India" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sat, 10am – 7pm IST" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
        <div>
          <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            Get in touch
          </div>
          <Reveal>
            <h2 className="font-serif text-[26px] md:text-[36px] mb-7">
              We&apos;d love to hear from you
            </h2>
          </Reveal>

          {INFO.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05} className="flex gap-4 mb-6.5 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-pink text-wine-dark flex items-center justify-center flex-shrink-0">
                <item.icon size={19} />
              </div>
              <div>
                <b className="block text-[14.5px] mb-0.5">{item.label}</b>
                <span className="text-[13.5px] text-ink-soft">{item.value}</span>
              </div>
            </Reveal>
          ))}

          <Reveal className="flex gap-3 mt-2">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-ink/[0.14] flex items-center justify-center transition-all duration-300 hover:bg-wine hover:border-wine hover:text-white hover:-translate-y-1"
              >
                <Icon size={16} />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-white rounded-md p-8 md:p-9 shadow-[0_30px_70px_-40px_rgba(127,46,80,0.35)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4.5 mb-5">
                <label className="block text-[12.5px] font-semibold mb-2 text-ink-soft">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-ink/[0.12] bg-bg text-sm focus:outline-none focus:border-wine focus:ring-4 focus:ring-wine/10 transition"
                />
              </div>
              <div className="mb-4.5 mb-5">
                <label className="block text-[12.5px] font-semibold mb-2 text-ink-soft">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-ink/[0.12] bg-bg text-sm focus:outline-none focus:border-wine focus:ring-4 focus:ring-wine/10 transition"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-[12.5px] font-semibold mb-2 text-ink-soft">
                Message
              </label>
              <textarea
                placeholder="Tell us what you're looking for..."
                required
                rows={4}
                className="w-full px-4 py-3.5 rounded-xl border border-ink/[0.12] bg-bg text-sm focus:outline-none focus:border-wine focus:ring-4 focus:ring-wine/10 transition resize-y min-h-[110px]"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-7 py-4 rounded-full bg-wine text-white font-semibold text-[14.5px] shadow-wine transition-all duration-300 hover:bg-wine-dark"
            >
              Send Message
            </button>
            {sent && (
              <p className="mt-3.5 text-[13px] text-wine-dark text-center">
                Thank you — we&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
