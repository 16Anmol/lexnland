"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, PlayCircle, Home as HomeIcon, TrendingUp, MapPin } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const phone = phoneRef.current;
    if (!stage || !phone) return;

    const onMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(phone, {
        rotateY: px * 16,
        rotateX: -py * 16,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    const onLeave = () => {
      gsap.to(phone, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "elastic.out(1,0.5)" });
    };

    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    gsap.to(phone, { y: -16, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true });

    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-[150px] pb-24 overflow-hidden bg-bg">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1100px 600px at 82% -6%, rgba(212,175,55,0.14), transparent 60%), radial-gradient(900px 700px at -6% 30%, rgba(166,59,105,0.10), transparent 60%)",
        }}
      />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center relative z-[3] w-full">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/60 border border-wine/20 backdrop-blur-md text-[12.5px] font-semibold text-wine-dark mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.22)]" />
              Launching Soon on Google Play &amp; Apple App Store
            </div>
          </Reveal>

          <Reveal>
            <div className="font-serif italic font-semibold tracking-[0.02em] text-[19px] sm:text-[22px] mb-3 bg-gradient-to-r from-wine via-gold to-wine-dark bg-clip-text text-transparent">
              Find. Trust. Own.
            </div>
          </Reveal>

          <h1
            ref={headingRef}
            className="font-serif font-bold leading-[1.18] tracking-tight text-[40px] sm:text-[52px] lg:text-[68px] mb-6 pb-1"
          >
            <div className="hline hline-1">Buy. Rent. Sell.</div>
            <div className="hline hline-2 italic font-medium bg-gradient-to-r from-wine via-wine-dark to-gold bg-clip-text text-transparent pb-1">
              With Confidence
            </div>
          </h1>

          <Reveal delay={0.1}>
            <p className="text-[17.5px] leading-[1.7] text-ink-soft max-w-[490px] mb-9">
              Discover verified properties, connect directly with owners, and experience
              a smarter, more trusted way to buy, rent, and sell real estate.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex gap-4 flex-wrap mb-11">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-wine text-white font-semibold text-[14.5px] shadow-wine transition-all duration-300 hover:-translate-y-1 hover:bg-wine-dark"
            >
              Download App <ArrowRight size={16} />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-ink/15 text-ink font-semibold text-[14.5px] transition-all duration-300 hover:-translate-y-1 hover:border-wine hover:text-wine-dark"
            >
              <PlayCircle size={16} /> Watch Demo
            </a>
          </Reveal>

          <Reveal delay={0.3} className="flex gap-9">
            <div className="flex flex-col gap-0.5">
              <strong className="font-serif text-2xl text-wine-dark">100%</strong>
              <span className="text-[12.5px] text-ink-soft">Verified Listings</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <strong className="font-serif text-2xl text-wine-dark">OTP</strong>
              <span className="text-[12.5px] text-ink-soft">Secure Onboarding</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <strong className="font-serif text-2xl text-wine-dark">Buy·Rent·Sell</strong>
              <span className="text-[12.5px] text-ink-soft">One Ecosystem</span>
            </div>
          </Reveal>
        </div>

        <div
          ref={stageRef}
          className="relative flex items-center justify-center h-[420px] sm:h-[560px] lg:h-[640px]"
          style={{ perspective: "1400px" }}
        >
          <div
            className="absolute w-[420px] h-[420px] rounded-full blur-[10px]"
            style={{
              background:
                "radial-gradient(circle, rgba(166,59,105,0.28), transparent 68%)",
            }}
          />
          <div
            ref={phoneRef}
            className="relative w-[240px] h-[490px] sm:w-[288px] sm:h-[588px] rounded-[46px] bg-[#0d0d0f] p-3 shadow-wine-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-[#0d0d0f] rounded-b-2xl z-[5]" />
            <div className="w-full h-full rounded-[36px] overflow-hidden bg-white relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <Reveal className="hidden sm:flex absolute top-[6%] left-[-8%] items-center gap-2.5 px-4.5 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-xl z-[4] animate-floatY">
            <div className="w-8.5 h-8.5 rounded-[11px] bg-pink text-wine-dark flex items-center justify-center flex-shrink-0">
              <HomeIcon size={17} />
            </div>
            <div>
              <b className="block text-[12.5px] font-semibold leading-tight">Verified Villa</b>
              <small className="text-[10.5px] text-ink-soft">Whitefield, Bengaluru</small>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="hidden sm:flex absolute bottom-[14%] right-[-10%] items-center gap-2.5 px-4.5 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-xl z-[4]"
          >
            <div className="w-8.5 h-8.5 rounded-[11px] bg-[#fdf3e6] text-gold flex items-center justify-center flex-shrink-0">
              <TrendingUp size={17} />
            </div>
            <div>
              <b className="block text-[12.5px] font-semibold leading-tight">₹1.2 Cr</b>
              <small className="text-[10.5px] text-ink-soft">Best market value</small>
            </div>
          </Reveal>

          <Reveal
            delay={0.25}
            className="hidden sm:flex absolute bottom-[2%] left-[-4%] items-center gap-2.5 px-4.5 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-xl z-[4]"
          >
            <div className="w-8.5 h-8.5 rounded-[11px] bg-wine/10 text-wine flex items-center justify-center flex-shrink-0">
              <MapPin size={17} />
            </div>
            <div>
              <b className="block text-[12.5px] font-semibold leading-tight">Location Search</b>
              <small className="text-[10.5px] text-ink-soft">Discover nearby homes</small>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
