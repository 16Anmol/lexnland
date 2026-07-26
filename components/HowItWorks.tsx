"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { STEPS } from "@/lib/data";

const HUES = ["#A63B69", "#7F2E50", "#D4AF37", "#A63B69", "#7F2E50", "#D4AF37", "#A63B69", "#7F2E50"];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-[70px] items-center">
        <div className="w-[270px] h-[552px] mx-auto rounded-[44px] bg-[#0d0d0f] p-2.5 shadow-wine-lg">
          <div
            className="w-full h-full rounded-[34px] overflow-hidden relative flex items-center justify-center flex-col gap-3.5 p-8 text-center transition-colors duration-500"
            style={{ background: `linear-gradient(160deg, ${HUES[active]}22, #fff 65%)` }}
          >
            <div
              className="w-[52px] h-[52px] rounded-2xl text-white flex items-center justify-center font-serif font-bold text-lg transition-colors duration-500"
              style={{ background: HUES[active] }}
            >
              {active + 1}
            </div>
            <div className="font-serif font-semibold text-[17px]">{STEPS[active].t}</div>
            <div className="text-[12.5px] text-ink-soft leading-[1.6]">{STEPS[active].d}</div>
          </div>
        </div>

        <div>
          <div className="mb-9">
            <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
              The journey
            </div>
            <Reveal>
              <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight mb-4">
                How Lex n Land works
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16.5px] leading-[1.75] text-ink-soft">
                From download to move-in — a guided, trustworthy path in eight
                simple steps.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col">
            {STEPS.map((s, i) => (
              <button
                key={s.t}
                onClick={() => setActive(i)}
                className={`flex gap-5 py-5 border-b border-ink/[0.08] last:border-none text-left transition-opacity duration-400 ${
                  active === i ? "opacity-100" : "opacity-45 hover:opacity-70"
                }`}
              >
                <div
                  className={`font-serif text-[15px] font-semibold w-[38px] h-[38px] rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    active === i
                      ? "bg-wine text-white border-wine"
                      : "text-wine border-wine/30"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h5 className="text-base font-semibold mb-1">{s.t}</h5>
                  <p className="text-[13.5px] text-ink-soft leading-[1.6]">{s.d}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
