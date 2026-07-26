import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-7">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Lex n Land" width={32} height={32} />
              <span className="font-serif font-bold text-xl">Lex n Land</span>
            </a>
            <p className="text-[13.5px] text-ink-soft leading-[1.7] max-w-[280px] mb-5">
              A luxury real estate platform built to help you find, trust and
              own your next property — launching soon.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-ink/[0.14] flex items-center justify-center transition-colors hover:bg-wine hover:border-wine hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-ink-soft mb-5">
              Company
            </h5>
            {[
              { l: "About", href: "/#about" },
              { l: "Features", href: "/#features" },
              { l: "Careers", href: "/careers" },
              { l: "FAQ", href: "/#faq" },
              { l: "Contact", href: "/#contact" },
            ].map(({ l, href }) => (
              <a
                key={l}
                href={href}
                className="block text-sm mb-3.5 transition-colors hover:text-wine"
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <h5 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-ink-soft mb-5">
              Legal
            </h5>
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="block text-sm mb-3.5 transition-colors hover:text-wine">
                {l}
              </a>
            ))}
          </div>

          <div>
            <h5 className="text-[13px] font-semibold uppercase tracking-[0.04em] text-ink-soft mb-5">
              Follow
            </h5>
            {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((l) => (
              <a key={l} href="#" className="block text-sm mb-3.5 transition-colors hover:text-wine">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-7 border-t border-ink/[0.08] text-[12.5px] text-ink-soft flex-wrap gap-3">
          <span>© 2026 Lex n Land. All rights reserved.</span>
          <span>Find. Trust. Own.</span>
        </div>
      </div>
    </footer>
  );
}
