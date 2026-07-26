import type { Metadata } from "next";
import { Briefcase, ArrowLeft, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers — Lex n Land",
  description:
    "Careers at Lex n Land. We're not hiring publicly yet — check back soon.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="min-h-screen flex items-center pt-[150px] pb-24 relative overflow-hidden bg-bg">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(1100px 600px at 82% -6%, rgba(212,175,55,0.14), transparent 60%), radial-gradient(900px 700px at -6% 30%, rgba(166,59,105,0.10), transparent 60%)",
            }}
          />
          <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center relative z-[2]">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/60 border border-wine/20 backdrop-blur-md text-[12.5px] font-semibold text-wine-dark mb-8">
              <Briefcase size={14} /> Careers at Lex n Land
            </div>

            <h1 className="font-serif font-bold leading-[1.15] tracking-tight text-[40px] sm:text-[56px] mb-6">
              Coming{" "}
              <span className="italic font-medium bg-gradient-to-r from-wine via-wine-dark to-gold bg-clip-text text-transparent">
                Soon
              </span>
              <span className="text-wine">.</span><span className="text-wine-dark">.</span><span className="text-gold">.</span>
            </h1>

            <p className="text-[17px] leading-[1.75] text-ink-soft max-w-[520px] mx-auto mb-12">
              We&apos;re building the team behind Lex n Land. Open roles aren&apos;t live
              just yet — but we&apos;d love to hear from people who believe in a more
              trusted way to buy, rent and sell property.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:careers@lexnland.com"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-wine text-white font-semibold text-[14.5px] shadow-wine transition-all duration-300 hover:-translate-y-1 hover:bg-wine-dark"
              >
                <Mail size={16} /> careers@lexnland.com
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-ink/15 text-ink font-semibold text-[14.5px] transition-all duration-300 hover:-translate-y-1 hover:border-wine hover:text-wine-dark"
              >
                <ArrowLeft size={16} /> Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
