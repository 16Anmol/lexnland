import { ArrowRight, Rocket, Home as HomeIcon, MapPinned, Lock } from "lucide-react";
import Reveal from "./Reveal";

const CARDS = [
  {
    icon: Rocket,
    t: "Launching Soon",
    d: "Official release coming soon on Google Play and the Apple App Store.",
  },
  {
    icon: HomeIcon,
    t: "Verified Listings",
    d: "Every listing is carefully reviewed for authenticity and trust.",
  },
  {
    icon: MapPinned,
    t: "Buy · Rent · Sell",
    d: "Everything you need in one seamless real estate ecosystem.",
  },
  {
    icon: Lock,
    t: "Secure & Trusted",
    d: "OTP authentication, role-based onboarding, and privacy-first design.",
  },
];

export default function LaunchingSoon() {
  return (
    <section id="launching" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <Reveal className="max-w-[640px] mx-auto text-center mb-16">
          <div className="flex justify-center items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            Pre-Launch
          </div>
          <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
            Launching Soon
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.75] text-ink-soft">
            Lex n Land is preparing to redefine the way people buy, rent and sell
            properties. Be among the first to experience a smarter, more trusted
            real estate platform.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CARDS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="glass rounded-md p-8 h-full shadow-[0_24px_50px_-30px_rgba(127,46,80,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_60px_-26px_rgba(127,46,80,0.45)]">
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-pink flex items-center justify-center text-wine-dark mb-5">
                  <c.icon size={22} />
                </div>
                <h3 className="font-serif text-[19px] font-semibold mb-2.5">{c.t}</h3>
                <p className="text-sm leading-[1.65] text-ink-soft">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center py-16 px-6 md:px-10 rounded-lg bg-gradient-to-b from-pink to-white">
            <h3 className="font-serif text-[24px] md:text-[34px] mb-6">
              Be Among the First to Experience Lex n Land
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#download"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-wine text-white font-semibold text-[14.5px] shadow-wine transition-all duration-300 hover:-translate-y-1 hover:bg-wine-dark"
              >
                Notify Me <ArrowRight size={16} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-ink/15 text-ink font-semibold text-[14.5px] transition-all duration-300 hover:-translate-y-1 hover:border-wine hover:text-wine-dark"
              >
                Watch App Demo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
