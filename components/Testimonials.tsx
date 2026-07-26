import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_COLORS = ["#A63B69", "#7F2E50", "#D4AF37", "#A63B69"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[640px] mb-14">
          <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            Early feedback
          </div>
          <Reveal>
            <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
              What early testers are saying
            </h2>
          </Reveal>
        </div>

        <div className="flex gap-5.5 overflow-x-auto pb-2.5 snap-x snap-mandatory scrollbar-thin">
          {TESTIMONIALS.map((t, i) => {
            const initials = t.n
              .split(" ")
              .map((w) => w[0])
              .join("");
            return (
              <Reveal key={t.n} delay={i * 0.06} className="min-w-[340px] snap-start">
                <div className="bg-white rounded-md p-7.5 border border-ink/[0.06] h-full transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-30px_rgba(127,46,80,0.3)]">
                  <div className="text-gold text-sm tracking-[2px] mb-4">★★★★★</div>
                  <p className="text-[14.5px] leading-[1.75] mb-5.5">&quot;{t.t}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-serif font-bold text-white text-[15px] flex-shrink-0"
                      style={{ background: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                    >
                      {initials}
                    </div>
                    <div>
                      <b className="block text-sm">{t.n}</b>
                      <span className="text-xs text-ink-soft">{t.r}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
