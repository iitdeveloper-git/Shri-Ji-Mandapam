import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Check, Clock3, Mail, MapPin, MessageCircle, Phone, Route, ShieldCheck, Sparkles } from "lucide-react";
import { ContactEnquiryForm } from "@/components/contact-enquiry-form";
import { hotel } from "@/lib/hotel-data";

export const metadata: Metadata = { title: "Contact Us & Event Enquiry", description: "Contact Shri Ji Mandapam in Aonla for wedding, reception, banquet hall, lawn, catering and room booking enquiries. Call or chat with us on WhatsApp." };
const phoneHref = `tel:${hotel.phone.replace(/\s+/g, "")}`;
const whatsappHref = `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent("Namaste Shri Ji Mandapam! I would like to know about venue availability and event packages.")}`;
const directionsHref = "https://www.google.com/maps/search/?api=1&query=Shri+Ji+Mandapam+Aonla";

export default function ContactUsPage() {
  const methods = [
    { icon: Phone, label: "Speak with us", value: hotel.phone, note: "Tap to call directly", href: phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", note: "Fastest response", href: whatsappHref, external: true },
    { icon: Mail, label: "Write to us", value: hotel.email, note: "For detailed requirements", href: `mailto:${hotel.email}` },
    { icon: MapPin, label: "Visit the venue", value: "Aonla–Bisauli Road", note: "Get Google Maps directions", href: directionsHref, external: true },
  ];
  return (
    <main className="bg-crimson-light pt-[104px] md:pt-[136px]">
      <section className="relative min-h-[630px] overflow-hidden bg-charcoal">
        <Image src="/wedding_hall_chandeliers.jpg" alt="Elegant celebration hall at Shri Ji Mandapam" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,11,9,.92)_0%,rgba(20,11,9,.65)_48%,rgba(20,11,9,.2)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
        <div className="luxury-container relative z-10 grid min-h-[630px] items-center gap-10 py-16 lg:grid-cols-[1.15fr_.72fr]">
          <div className="max-w-2xl text-white">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.24em] text-gold"><Sparkles className="h-4 w-4" /> Let&apos;s plan your celebration</p>
            <h1 className="font-heading text-5xl font-bold leading-[.95] sm:text-7xl lg:text-[5.5rem]">Every grand event starts with a conversation.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">Wedding, reception, engagement or family celebration—share your vision and get venue availability, packages and planning support quickly.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 bg-gold px-7 py-4 font-bold text-charcoal transition hover:bg-white"><Phone className="h-5 w-5" /> Call {hotel.phone}</a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 border border-white/35 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-charcoal"><MessageCircle className="h-5 w-5" /> WhatsApp now</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/75"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Quick response</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Custom packages</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Site visit support</span></div>
          </div>
          <aside className="border-t-4 border-gold bg-white p-6 shadow-2xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-crimson">Quick enquiry</p><h2 className="mt-2 font-heading text-4xl font-bold text-charcoal">Plan your event</h2><p className="mb-6 mt-2 text-sm leading-6 text-charcoal/60">Fill in your details and continue the conversation directly on WhatsApp.</p><ContactEnquiryForm />
          </aside>
        </div>
      </section>
      <section className="luxury-container relative z-20 -mt-8 grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {methods.map((item) => <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="group border border-black/5 bg-white p-6 shadow-[0_16px_45px_rgba(60,35,20,.1)] transition hover:-translate-y-1 hover:border-gold"><item.icon className="h-7 w-7 text-crimson" /><p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-gold">{item.label}</p><p className="mt-2 font-heading text-xl font-bold text-charcoal group-hover:text-crimson">{item.value}</p><p className="mt-1 text-xs text-charcoal/50">{item.note}</p></a>)}
      </section>
      <section className="luxury-container grid gap-10 pb-20 lg:grid-cols-[.86fr_1.14fr] lg:items-stretch">
        <div className="bg-crimson p-8 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Visit Shri Ji Mandapam</p><h2 className="mt-3 font-heading text-5xl font-bold">Come, see the venue in person.</h2><p className="mt-5 leading-7 text-white/75">A site visit is the best way to experience the hall, lawn, rooms and celebration possibilities. Call before arriving so our team can give you a complete walkthrough.</p>
          <div className="mt-8 grid gap-6 border-t border-white/15 pt-8">
            <div className="flex gap-4"><MapPin className="mt-1 h-6 w-6 shrink-0 text-gold" /><div><p className="font-bold">Full address</p><p className="mt-1 text-sm leading-6 text-white/70">{hotel.address}</p></div></div>
            <div className="flex gap-4"><Clock3 className="mt-1 h-6 w-6 shrink-0 text-gold" /><div><p className="font-bold">Enquiry & site visits</p><p className="mt-1 text-sm leading-6 text-white/70">Open daily · Please call for a convenient visit time</p></div></div>
            <div className="flex gap-4"><CalendarCheck className="mt-1 h-6 w-6 shrink-0 text-gold" /><div><p className="font-bold">Booking assistance</p><p className="mt-1 text-sm leading-6 text-white/70">Venue, catering, rooms and décor requirements in one conversation</p></div></div>
          </div>
          <a href={directionsHref} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 bg-white px-6 py-4 font-bold text-crimson transition hover:bg-gold hover:text-charcoal"><Route className="h-5 w-5" /> Open directions</a>
        </div>
        <div className="min-h-[470px] overflow-hidden border-8 border-white bg-white shadow-xl"><iframe title="Shri Ji Mandapam location on Google Maps" src="https://www.google.com/maps?q=Shri%20Ji%20Mandapam%20Aonla&output=embed" width="100%" height="100%" className="min-h-[454px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </section>
      <section className="bg-charcoal py-16 text-white">
        <div className="luxury-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Easy & reliable</p><h2 className="mt-3 font-heading text-5xl font-bold">One team for your complete celebration.</h2><p className="mt-5 leading-7 text-white/65">Tell us what you need and we will guide you through availability, guest capacity, rooms, food and event arrangements.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ icon: ShieldCheck, title: "Clear guidance", text: "Straightforward information about venue options and requirements." }, { icon: CalendarCheck, title: "Easy scheduling", text: "Arrange a call or site visit at a time that works for you." }, { icon: Sparkles, title: "Personal support", text: "A thoughtful plan shaped around your celebration and guests." }].map((item) => <div key={item.title} className="border border-white/10 bg-white/5 p-6"><item.icon className="h-7 w-7 text-gold" /><h3 className="mt-5 font-heading text-2xl font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="bg-gold py-10"><div className="luxury-container flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left"><div><p className="font-heading text-4xl font-bold text-charcoal">Ready to discuss your celebration?</p><p className="mt-1 text-sm font-semibold text-charcoal/65">Our team is only a call or WhatsApp message away.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href={phoneHref} className="inline-flex items-center justify-center gap-2 bg-charcoal px-7 py-4 font-bold text-white"><Phone className="h-5 w-5" /> Call now</a><Link href="/book-now" className="inline-flex items-center justify-center gap-2 border-2 border-charcoal px-7 py-4 font-bold text-charcoal">Check booking options</Link></div></div></section>
    </main>
  );
}
