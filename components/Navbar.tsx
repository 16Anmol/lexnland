"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#properties", label: "Properties" },
  { href: "/#demo", label: "App Demo" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
        scrolled
          ? "py-2.5 bg-bg/75 backdrop-blur-xl shadow-[0_1px_0_rgba(29,29,31,0.06)]"
          : "py-4.5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Lex n Land logo" width={36} height={36} className="object-contain" />
          <span className="font-serif font-bold text-xl tracking-tight">Lex n Land</span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14.5px] font-medium relative py-1 group"
              >
                {l.label}
                <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-wine transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#download"
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wine text-white text-[13.5px] font-semibold shadow-wine transition-all duration-300 hover:-translate-y-0.5 hover:bg-wine-dark"
        >
          Get Notified
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden z-[950]"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[78%] max-w-[340px] bg-white shadow-2xl flex flex-col justify-center items-start gap-7 px-10 transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-[15px] font-medium"
          >
            {l.label}
          </a>
        ))}
        <a
          href="/#download"
          onClick={() => setOpen(false)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-wine text-white text-sm font-semibold"
        >
          Get Notified <ArrowRight size={15} />
        </a>
      </div>
    </header>
  );
}
