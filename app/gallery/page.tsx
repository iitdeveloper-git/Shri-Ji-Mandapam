import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Heart, MessageCircle, Sparkles } from "lucide-react";
import { GalleryLightbox, type GalleryPhoto } from "@/components/gallery-lightbox";
import { hotel } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Wedding Gallery",
  description: "Explore weddings, décor, banquet celebrations, catering and memorable moments at Shri Ji Mandapam, Aonla.",
};

const photos: GalleryPhoto[] = [
  { src: "/wedding-hero.jpg", alt: "A celebration made timeless", category: "Celebrations", tall: true },
  { src: "/wedding_hall_chandeliers.jpg", alt: "The grand chandelier hall", category: "Venue" },
  { src: "/wedding_mandap_canopy.jpg", alt: "Sacred mandap moments", category: "Decor", tall: true },
  { src: "/wedding_stage_fireworks.png", alt: "A spectacular wedding stage", category: "Celebrations" },
  { src: "/wedding_couple_dance.png", alt: "The first dance", category: "Celebrations", tall: true },
  { src: "/wedding_night_entry.jpg", alt: "A magical evening entrance", category: "Decor" },
  { src: "/wedding-1.jpg", alt: "Beautifully styled festivities", category: "Celebrations" },
  { src: "/wedding-2.jpg", alt: "Details that tell your story", category: "Decor", tall: true },
  { src: "/wedding-3.jpg", alt: "Joy in every frame", category: "Celebrations" },
  { src: "/wedding-4.png", alt: "An evening to remember", category: "Venue", tall: true },
  { src: "/new-gallery-1.jpg", alt: "Elegant venue ambience", category: "Venue" },
  { src: "/new-gallery-2.jpg", alt: "Celebration-ready spaces", category: "Venue", tall: true },
  { src: "/new-gallery-3.jpg", alt: "Dining with a royal touch", category: "Dining" },
  { src: "/new-gallery-4.jpg", alt: "Warm hospitality", category: "Stay" },
  { src: "/new-gallery-5.png", alt: "A grand welcome", category: "Venue", tall: true },
  { src: "/catering-1.jpg", alt: "Fresh vegetarian flavours", category: "Dining" },
  { src: "/catering-2.jpg", alt: "A feast for every guest", category: "Dining", tall: true },
  { src: "/catering_buffet_food.png", alt: "Curated celebration buffet", category: "Dining" },
  { src: "/catering_setup_lawn.jpg", alt: "Open-air dining setup", category: "Dining", tall: true },
  { src: "/shri_ji_room_1.jpg", alt: "Comfort for wedding guests", category: "Stay" },
  { src: "/shri_ji_room_2.jpg", alt: "Relax after the celebration", category: "Stay" },
];

export default function GalleryPage() {
  const whatsapp = `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent("Namaste Shri Ji Mandapam! I saw your wedding gallery and would like to discuss my celebration.")}`;
  return (
    <main className="bg-[#fbf1cf] pt-[104px] md:pt-[136px]">
      <section className="relative overflow-hidden bg-[#200b0c] pb-20 pt-14 text-white lg:pb-28">
        <div className="absolute inset-0 opacity-25"><Image src="/wedding-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover blur-[2px]" /></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,6,8,.95),rgba(31,6,8,.55),rgba(31,6,8,.9))]" />
        <div className="luxury-container relative">
          <div className="mb-10 max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.24em] text-gold"><Heart className="h-4 w-4" /> Weddings at Shri Ji Mandapam</p>
            <h1 className="mt-5 font-heading text-6xl font-bold leading-[.88] sm:text-8xl lg:text-[7rem]">Shaadi ki<br /><span className="text-gold">tayariyan</span> ho gayi?</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70">From the first welcome to the final dance, explore spaces and details designed to make your wedding beautifully yours.</p>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <div className="relative aspect-[16/10] border-[10px] border-[#fbf1cf] shadow-2xl sm:border-[16px]">
              <Image src="/wedding_mandap_canopy.jpg" alt="Wedding mandap prepared at Shri Ji Mandapam" fill sizes="90vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
              <p className="absolute bottom-7 left-7 max-w-lg font-heading text-4xl font-bold leading-none sm:bottom-10 sm:left-10 sm:text-6xl">A perfect wedding dream starts here.</p>
            </div>
            <div className="absolute -bottom-8 -right-2 hidden bg-crimson px-7 py-5 text-center shadow-xl sm:block"><Sparkles className="mx-auto h-5 w-5 text-gold" /><p className="mt-1 text-xs font-bold uppercase tracking-[.18em]">Love · Lights · Memories</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf1cf] py-20">
        <div className="luxury-container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[.24em] text-crimson"><Camera className="h-4 w-4" /> Wedding stories</p>
            <h2 className="mt-4 font-heading text-5xl font-bold text-charcoal sm:text-7xl">Moments worth remembering</h2>
            <p className="mt-5 leading-7 text-charcoal/65">Browse our venue, celebrations, décor, dining and guest stays. Select any photograph to enjoy the complete view.</p>
          </div>
          <GalleryLightbox photos={photos} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-crimson py-20 text-white">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/20" /><div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-gold/20" />
        <div className="luxury-container relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Your celebration, your story</p><h2 className="mt-4 max-w-3xl font-heading text-5xl font-bold leading-none sm:text-7xl">Let your wedding be our next beautiful story.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Talk to our team about venue availability, décor, catering, rooms and a personalized site visit.</p></div>
          <div className="flex flex-col gap-3">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-gold px-7 py-4 font-bold text-charcoal transition hover:bg-white"><MessageCircle className="h-5 w-5" /> Enquire on WhatsApp</a>
            <Link href="/contact-us" className="inline-flex min-h-14 items-center justify-center gap-2 border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-crimson">Plan a site visit <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
