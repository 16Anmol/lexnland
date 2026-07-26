"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [visible, setVisible] = useState(true);
  const barRef = useRef<HTMLSpanElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
          onComplete: () => setHidden(true),
        });
      },
    });
    tl.to(barRef.current, { width: "100%", duration: 1.1, ease: "power2.inOut" }).to(
      {},
      { duration: 0.35 }
    );

    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={loaderRef}
      className={`fixed inset-0 z-[10000] bg-bg flex items-center justify-center flex-col gap-6 ${
        visible ? "" : "pointer-events-none"
      }`}
    >
      <div className="w-[74px] h-[74px] relative">
        <Image
          src="/logo.png"
          alt="Lex n Land"
          fill
          className="object-contain animate-pulseMark"
          priority
        />
      </div>
      <div className="w-[180px] h-[2px] bg-wine/15 rounded-full overflow-hidden">
        <span
          ref={barRef}
          className="block h-full w-0 bg-gradient-to-r from-wine to-gold"
        />
      </div>
      <div className="font-serif uppercase tracking-[0.05em] text-[13px] text-ink-soft">
        Find · Trust · Own
      </div>
    </div>
  );
}
