"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="pt-0 pb-[90px] md:pb-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="rounded-lg bg-gradient-to-br from-white to-pink border border-wine/15 px-6 py-14 md:px-16 md:py-16 text-center">
            <h3 className="font-serif text-[24px] md:text-[32px] mb-3">Stay Updated</h3>
            <p className="text-ink-soft text-[14.5px] mb-7">
              Subscribe for launch updates, early access invites and
              behind-the-scenes progress.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="flex flex-col sm:flex-row gap-2.5 max-w-[440px] mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-full border border-ink/[0.14] text-sm focus:outline-none focus:border-wine"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-wine text-white font-semibold text-sm whitespace-nowrap transition-all duration-300 hover:bg-wine-dark hover:-translate-y-0.5"
              >
                {done ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
