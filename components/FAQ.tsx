"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[640px] mb-14">
          <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            Questions
          </div>
          <Reveal>
            <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
              Frequently asked questions
            </h2>
          </Reveal>
        </div>

        <div className="max-w-[800px]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-ink/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 px-1 text-left text-base font-medium"
                >
                  {f.q}
                  <span
                    className={`w-6.5 h-6.5 w-[26px] h-[26px] rounded-full border border-wine/35 flex items-center justify-center flex-shrink-0 transition-transform duration-400 ${
                      isOpen ? "rotate-180 bg-wine border-wine text-white" : "text-wine"
                    }`}
                  >
                    <Plus size={13} className={isOpen ? "rotate-45 transition-transform" : "transition-transform"} />
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "220px" : "0px" }}
                >
                  <p className="px-1 pb-6 text-sm text-ink-soft leading-[1.75] max-w-[640px]">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
