import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[70px] items-center">
        <Reveal>
          <div className="relative aspect-square rounded-lg bg-gradient-to-br from-pink to-white flex items-center justify-center overflow-hidden">
            <div className="absolute rounded-full border border-wine/[0.18] w-[80%] h-[80%]" />
            <div className="absolute rounded-full border border-wine/[0.18] w-[55%] h-[55%]" />
            <Image src="/logo.png" alt="Lex n Land" width={110} height={110} className="relative z-[2] opacity-90" />
          </div>
        </Reveal>

        <div>
          <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            About us
          </div>
          <Reveal>
            <h2 className="font-serif text-[28px] md:text-[40px] mb-4.5">
              Real estate, rebuilt around trust
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-soft leading-[1.75] text-[15.5px]">
              Lex n Land was created because finding a home shouldn&apos;t mean
              sifting through unverified listings and unreachable owners. We
              combined the rigor of legal verification with the elegance of
              modern design to build a platform buyers, renters and sellers can
              actually trust.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-7">
            <Reveal delay={0.15}>
              <div className="p-5.5 p-6 rounded-2xl bg-pink h-full">
                <h4 className="font-serif text-base mb-2 text-wine-dark">Mission</h4>
                <p className="text-[13px] text-ink-soft leading-[1.6]">
                  Make every property transaction transparent, verified and
                  effortless — for everyone, everywhere.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="p-5.5 p-6 rounded-2xl bg-pink h-full">
                <h4 className="font-serif text-base mb-2 text-wine-dark">Vision</h4>
                <p className="text-[13px] text-ink-soft leading-[1.6]">
                  To become India&apos;s most trusted real estate ecosystem,
                  connecting people directly to verified homes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
