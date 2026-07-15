"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  category: "Celebrations" | "Venue" | "Decor" | "Dining" | "Stay";
  tall?: boolean;
};

export function GalleryLightbox({ photos, images }: { photos?: GalleryPhoto[]; images?: string[] }) {
  const allPhotos: GalleryPhoto[] = photos ?? (images ?? []).map((src, index) => ({
    src,
    alt: `Shri Ji Mandapam gallery view ${index + 1}`,
    category: "Venue",
    tall: index % 3 === 1,
  }));
  const categories = ["All", "Celebrations", "Venue", "Decor", "Dining", "Stay"] as const;
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const filtered = filter === "All" ? allPhotos : allPhotos.filter((photo) => photo.category === filter);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % filtered.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, filtered.length]);

  return (
    <>
      <div className="mb-9 flex flex-wrap justify-center gap-2" aria-label="Gallery filters">
        {categories.map((category) => (
          <button key={category} onClick={() => { setFilter(category); setActive(null); }} className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[.12em] transition ${filter === category ? "border-crimson bg-crimson text-white" : "border-crimson/15 bg-white text-charcoal/65 hover:border-gold hover:text-crimson"}`}>
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((photo, index) => (
          <button key={photo.src} onClick={() => setActive(index)} className="group relative mb-4 block w-full break-inside-avoid overflow-hidden bg-charcoal text-left shadow-[0_12px_35px_rgba(55,25,15,.12)]">
            <div className={`relative w-full ${photo.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 transition group-hover:opacity-100" />
              <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/90 text-crimson opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><Expand className="h-4 w-4" /></span>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">{photo.category}</p><p className="mt-1 font-heading text-2xl font-bold">{photo.alt}</p></div>
            </div>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-black/95 p-4" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label="Wedding gallery image preview">
          <button onClick={() => setActive(null)} className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-charcoal" aria-label="Close gallery"><X className="h-5 w-5" /></button>
          <button onClick={(event) => { event.stopPropagation(); setActive((active - 1 + filtered.length) % filtered.length); }} className="absolute left-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-crimson" aria-label="Previous image"><ChevronLeft /></button>
          <div className="relative h-[82vh] w-[88vw] max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={filtered[active].src} alt={filtered[active].alt} fill sizes="90vw" className="object-contain" /></div>
          <button onClick={(event) => { event.stopPropagation(); setActive((active + 1) % filtered.length); }} className="absolute right-3 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur hover:bg-crimson" aria-label="Next image"><ChevronRight /></button>
          <p className="absolute bottom-4 font-heading text-xl font-bold text-white">{filtered[active].alt} <span className="ml-2 text-sm font-normal text-white/50">{active + 1} / {filtered.length}</span></p>
        </div>
      ) : null}
    </>
  );
}
