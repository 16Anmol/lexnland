"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Reveal from "./Reveal";

export default function AppDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="demo" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <Reveal className="max-w-[640px] mx-auto text-center mb-14">
          <div className="flex justify-center items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            Watch
          </div>
          <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
            See Lex n Land in Action
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.75] text-ink-soft">
            Splash to sign-in, role selection to property details — the complete
            walkthrough.
          </p>
        </Reveal>

        <Reveal>
          <div
            onClick={toggle}
            className="relative rounded-lg overflow-hidden bg-[#0d0d0f] shadow-wine-lg max-w-[420px] mx-auto cursor-pointer"
          >
            <video ref={videoRef} muted loop playsInline className="w-full block">
              <source src="/videos/app-demo.mp4" type="video/mp4" />
            </video>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${
                playing ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.35))",
              }}
            >
              <div className="w-[70px] h-[70px] rounded-full bg-white/92 flex items-center justify-center shadow-2xl">
                <Play size={22} className="text-wine ml-0.5" fill="currentColor" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
