import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { rooms } from "@/lib/hotel-data";
import { Reveal } from "@/components/reveal";

export function RoomCards() {
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-3">
      {rooms.map((room, index) => (
        <Reveal key={room.title} delay={index * 0.05}>
          <article className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-[18px] bg-white shadow-soft">
            <div className="relative h-64 shrink-0 overflow-hidden">
              <Image src={room.image} alt={`${room.title} at Hotel B Anand`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="font-devanagari text-sm text-gold">{room.hi}</p>
              <h3 className="mt-1 font-heading text-3xl text-green">{room.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-charcoal/68">{room.details}</p>
              <p className="mt-5 border-t border-champagne pt-4 font-bold text-brown">{room.price}<span className="text-xs font-medium text-charcoal/55"> / night</span></p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function ReviewCard({ name, role, text, rating }: { name: string; role: string; text: string; rating: number }) {
  return (
    <article className="rounded-[18px] bg-white p-6 shadow-soft">
      <div className="mb-5 flex gap-1 text-gold" aria-label={`${rating} star review`}>
        {Array.from({ length: rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
      </div>
      <p className="text-base leading-7 text-charcoal/75">&ldquo;{text}&rdquo;</p>
      <div className="mt-6 border-t border-champagne pt-5">
        <p className="font-bold text-green">{name}</p>
        <p className="text-sm text-charcoal/55">{role}</p>
      </div>
    </article>
  );
}

export function EditorialCard({ item, href }: { item: { title: string; hi?: string; image: string; text?: string; price?: string; tag?: string }; href?: string }) {
  const inner = (
    <article className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-[18px] bg-white shadow-soft">
      <div className="relative h-60 shrink-0 overflow-hidden">
        <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
        {item.tag ? <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-green backdrop-blur">{item.tag}</span> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {item.hi ? <p className="font-devanagari text-sm text-gold">{item.hi}</p> : null}
        <h3 className="font-heading text-3xl text-green">{item.title}</h3>
        {item.price ? <p className="mt-2 font-bold text-gold">{item.price}</p> : null}
        {item.text ? <p className="mt-3 flex-1 text-sm leading-6 text-charcoal/65">{item.text}</p> : null}
      </div>
    </article>
  );

  return href ? <Link href={href}>{inner}</Link> : inner;
}
