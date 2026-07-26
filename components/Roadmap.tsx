import {
  BrainCircuit,
  MapPin,
  Building2,
  Video,
  LineChart,
  Globe2,
} from "lucide-react";
import Reveal from "./Reveal";
import { ROADMAP } from "@/lib/data";

const ICONS = [BrainCircuit, MapPin, Building2, Video, LineChart, Globe2];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[640px] mb-14">
          <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            What&apos;s next
          </div>
          <Reveal>
            <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
              Founder&apos;s vision for the road ahead
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROADMAP.map((r, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={r.t} delay={(i % 3) * 0.08}>
                <div className="p-6.5 p-7 rounded-[20px] border border-dashed border-wine/30 transition-all duration-400 hover:bg-pink hover:border-solid hover:-translate-y-1 h-full">
                  <div className="w-10 h-10 rounded-xl bg-wine text-white flex items-center justify-center mb-3.5">
                    <Icon size={18} />
                  </div>
                  <h5 className="text-[14.5px] font-semibold mb-1.5">{r.t}</h5>
                  <p className="text-[12.5px] text-ink-soft leading-[1.6]">{r.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
