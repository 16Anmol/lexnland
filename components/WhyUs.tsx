import { Check, X } from "lucide-react";
import Reveal from "./Reveal";
import { COMPARE } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <Reveal className="max-w-[640px] mx-auto text-center mb-14">
          <div className="flex justify-center items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            The difference
          </div>
          <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
            Why Lex n Land
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.75] text-ink-soft">
            A side-by-side look at what real estate search used to be — and what
            it becomes.
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-x-auto rounded-md border border-ink/[0.08]">
            <table className="w-full border-collapse min-w-[560px] bg-white">
              <thead>
                <tr>
                  <th className="font-serif text-base font-semibold text-left px-6 py-5">
                    Capability
                  </th>
                  <th className="font-serif text-base font-semibold text-left px-6 py-5 text-ink-soft">
                    Traditional Search
                  </th>
                  <th className="font-serif text-base font-semibold text-left px-6 py-5 bg-gradient-to-br from-wine-dark to-wine text-white rounded-t-2xl">
                    Lex n Land
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((c, i) => (
                  <tr key={c}>
                    <td className="px-6 py-4 text-sm text-ink-soft font-medium border-t border-ink/[0.06]">
                      {c}
                    </td>
                    <td className="px-6 py-4 text-center border-t border-ink/[0.06]">
                      <X size={17} className="inline text-[#c95c5c]" />
                    </td>
                    <td
                      className={`px-6 py-4 text-center border-t border-ink/[0.06] bg-wine/5 text-wine-dark ${
                        i === COMPARE.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                    >
                      <Check size={17} className="inline" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
