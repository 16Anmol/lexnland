import Image from "next/image";
import { Heart, MapPin, BedDouble, Bath, Ruler } from "lucide-react";
import Reveal from "./Reveal";
import { PROPERTIES } from "@/lib/data";

export default function Properties() {
  return (
    <section id="properties" className="py-[90px] md:py-[130px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[640px] mb-14">
          <div className="flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-wine mb-4">
            Featured
          </div>
          <Reveal>
            <h2 className="font-serif text-[30px] md:text-[48px] font-bold leading-[1.14] tracking-tight">
              A glimpse of what&apos;s coming
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[16.5px] leading-[1.75] text-ink-soft">
              Curated, verified homes — presented the way they deserve to be.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="bg-white rounded-md overflow-hidden shadow-[0_20px_50px_-32px_rgba(29,29,31,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_64px_-26px_rgba(127,46,80,0.4)] group">
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-[800ms] group-hover:scale-110"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/85 backdrop-blur px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-wine-dark">
                    {p.tag}
                  </div>
                  <button className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/85 backdrop-blur flex items-center justify-center transition-colors hover:bg-white">
                    <Heart size={16} className="text-wine" />
                  </button>
                </div>
                <div className="p-5.5 p-6">
                  <div className="font-serif text-[21px] font-bold text-wine-dark mb-1.5">
                    {p.price}
                    {p.suffix && (
                      <span className="text-xs font-normal text-ink-soft">{p.suffix}</span>
                    )}
                  </div>
                  <div className="text-[15px] font-semibold mb-1">{p.title}</div>
                  <div className="flex items-center gap-1.5 text-[12.5px] text-ink-soft mb-4">
                    <MapPin size={13} /> {p.loc}
                  </div>
                  <div className="flex gap-4 pt-3.5 border-t border-ink/[0.07]">
                    <div className="flex items-center gap-1.5 text-xs text-ink-soft">
                      <BedDouble size={15} className="text-wine" /> {p.beds} Beds
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-ink-soft">
                      <Bath size={15} className="text-wine" /> {p.baths} Baths
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-ink-soft">
                      <Ruler size={15} className="text-wine" /> {p.area}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
