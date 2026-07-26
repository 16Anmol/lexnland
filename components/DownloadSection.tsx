import Image from "next/image";
import Reveal from "./Reveal";

export default function DownloadSection() {
  return (
    <section id="download" className="pt-0 pb-[130px] md:pb-[130px]">
      <Reveal>
        <div className="relative overflow-hidden rounded-lg mx-4 md:mx-10 px-6 py-14 md:px-16 md:py-20 text-white bg-gradient-to-br from-wine-dark via-wine to-[#8a3159]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 400px at 90% 0%, rgba(212,175,55,0.28), transparent 60%), radial-gradient(500px 500px at 0% 100%, rgba(255,255,255,0.10), transparent 60%)",
            }}
          />
          <div className="relative z-[2] grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-12 items-center text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-2 rounded-full text-[12.5px] font-semibold mb-5">
                🚀 Pre-Launch
              </div>
              <h2 className="font-serif text-[28px] md:text-[42px] mb-3.5">
                Get it first, the moment we launch.
              </h2>
              <p className="opacity-85 text-[15.5px] max-w-[480px] leading-[1.7] mx-auto md:mx-0">
                Lex n Land is currently in pre-launch. Scan the code or tap below to join
                the waitlist — we&apos;ll notify you the instant we go live on Google Play
                and the App Store.
              </p>

              <div className="flex gap-3.5 flex-wrap mt-6 justify-center md:justify-start">
                <a
                  href="#"
                  className="flex items-center gap-2.5 bg-white/10 border border-white/25 px-5 py-3 rounded-2xl backdrop-blur transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                    <path d="M3.6 2.3c-.4.4-.6.9-.6 1.6v16.2c0 .7.2 1.2.6 1.6l.1.1L13 12.5v-.2L3.7 2.2l-.1.1z" />
                    <path
                      d="M16.1 15.6l-3.1-3.1v-.2l3.1-3.1 3.5 2c1 .6 1 1.5 0 2.1l-3.5 2.3z"
                      opacity=".7"
                    />
                    <path d="M16.1 15.6L13 12.5l-9.3 9.3c.3.4.9.4 1.5.1l10.9-6.3z" />
                    <path
                      d="M16.1 9.4L5.2 3.1c-.6-.3-1.2-.3-1.5.1l9.3 9.3 3.1-3.1z"
                      opacity=".85"
                    />
                  </svg>
                  <span>
                    <small className="block text-[9.5px] opacity-80">Get it on</small>
                    <strong className="block text-sm font-semibold">Google Play</strong>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2.5 bg-white/10 border border-white/25 px-5 py-3 rounded-2xl backdrop-blur transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
                    <path d="M17.5 12.3c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.6 1.3-.1 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.3 3.1-2.5.7-1 1.3-2.2 1.6-3.4-2-.8-2.1-3-2.1-3.5zM14.9 4.6c.7-.8 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z" />
                  </svg>
                  <span>
                    <small className="block text-[9.5px] opacity-80">Download on the</small>
                    <strong className="block text-sm font-semibold">App Store</strong>
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-[22px] p-5 flex flex-col items-center gap-2.5 shadow-2xl justify-self-center md:justify-self-end">
              <Image
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=6&color=7F2E50&data=https://lexnland.example.com/waitlist"
                alt="Scan to join waitlist"
                width={132}
                height={132}
                className="rounded-lg"
                unoptimized
              />
              <span className="text-[11.5px] text-wine-dark font-semibold tracking-wide">
                SCAN TO JOIN WAITLIST
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
