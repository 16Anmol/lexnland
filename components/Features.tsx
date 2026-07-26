import {
  ShieldCheck,
  Home as HomeIcon,
  KeyRound,
  Banknote,
  MapPin,
  MessageCircle,
  Heart,
  Columns3,
  Fingerprint,
  Zap,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import { FEATURES } from "@/lib/data";

const ICONS = [
  ShieldCheck,
  HomeIcon,
  KeyRound,
  Banknote,
  MapPin,
  MessageCircle,
  Heart,
  Columns3,
  Fingerprint,
  Zap,
  LayoutGrid,
  Sparkles,
];

export default function Features() {
  return (
    <section id="features" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[640px] mb-16">
          <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4 before:content-[''] before:w-[26px] before:h-[1.4px] before:bg-gold">
            Everything you need
          </div>
          <Reveal>
            <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
              Designed for how people actually search for homes
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[16.5px] leading-[1.75] text-ink-soft">
              Every feature in Lex n Land is built to remove friction between
              finding a property and trusting it.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={f.t} delay={(i % 4) * 0.06}>
                <div className="bg-white border border-ink/[0.06] rounded-md p-7 h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-28px_rgba(127,46,80,0.3)] hover:border-transparent">
                  <div className="w-[46px] h-[46px] rounded-2xl bg-pink text-wine-dark flex items-center justify-center mb-4.5">
                    <Icon size={21} />
                  </div>
                  <h4 className="text-[15.5px] font-semibold mb-2">{f.t}</h4>
                  <p className="text-[13.3px] text-ink-soft leading-[1.6]">{f.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
