import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Bath, BedDouble, Play, Ruler, Star } from "lucide-react";
import { BookingCard } from "@/components/booking-card";
import { EditorialCard } from "@/components/cards";
import { FAQAccordion } from "@/components/accordion";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { SectionHeader } from "@/components/section-header";
import { attractions, diningVenues, experiences, gallery, images, offers, pageContent, policyPages, villas } from "@/lib/hotel-data";

const dynamicPageContent = Object.fromEntries(
  Object.entries(pageContent).filter(([slug]) => slug !== "book-now")
) as Omit<typeof pageContent, "book-now">;

const allPages = { ...dynamicPageContent, "privacy-policy": policyPages.privacy, terms: policyPages.terms };
type Slug = keyof typeof allPages;

export function generateStaticParams() {
  return Object.keys(allPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = allPages[slug as Slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.intro,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: page.title, description: page.intro }
  };
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: routeSlug } = await params;
  const slug = routeSlug as Slug;
  const page = allPages[slug];
  if (!page) notFound();
  const policy = "sections" in page ? page : null;
  const heroEyebrow = "eyebrow" in page ? page.eyebrow : "Guest Policy";
  const heroImage = "image" in page ? page.image : undefined;

  if (slug === "rooms-suites") {
    return <RoomsSuitesShowcase />;
  }

  return (
    <main>
      <section className="relative min-h-[74vh] overflow-hidden bg-green pt-32 text-white">
        {heroImage ? <Image src={heroImage} alt={page.title} fill priority sizes="100vw" className="object-cover opacity-55" /> : null}
        <div className="absolute inset-0 bg-gradient-to-t from-green via-green/55 to-charcoal/25" />
        <div className="luxury-container relative flex min-h-[62vh] flex-col justify-end pb-12">
          <p className="eyebrow">{heroEyebrow}</p>
          <h1 className="heading-xl mt-4 max-w-5xl">{page.title}</h1>
          <p className="mt-3 font-devanagari text-3xl text-champagne">{page.hi}</p>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-white/78">{page.intro}</p>
        </div>
      </section>

      {policy ? (
        <section className="section-y bg-ivory">
          <div className="luxury-container max-w-4xl">
            <div className="rounded-[28px] bg-white p-8 shadow-soft">
              {policy.sections.map((section) => <p key={section} className="border-b border-champagne py-5 text-lg leading-8 text-charcoal/75 last:border-0">{section}</p>)}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="section-y bg-ivory">
            <div className="luxury-container grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <SectionHeader eyebrow="Highlights" title="Designed for every guest intent" hindi="मुख्य विशेषताएं" text="This page is structured for search engines, AI answer engines, voice queries, and high-intent booking journeys." />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {"points" in page ? page.points.map((point) => <div key={point} className="rounded-[22px] bg-white p-5 font-bold text-green shadow-soft">{point}</div>) : null}
              </div>
            </div>
          </section>

          {slug === "luxury-villas" ? <section className="section-y bg-white"><div className="luxury-container"><SectionHeader eyebrow="Private Villas" title="Residential privacy with hotel service" /><div className="grid gap-5 md:grid-cols-2">{villas.map((villa) => <EditorialCard key={villa.title} item={villa} />)}</div></div></section> : null}
          {slug === "dining" ? <DiningVenues /> : null}
          {slug === "spa-wellness" ? <FeatureGrid title="Wellness Journeys" items={experiences.filter((item) => item.title === "Spa & Wellness")} /> : null}
          {["wedding", "banquet", "meetings", "experiences"].includes(slug) ? <FeatureGrid title="Signature Services" items={experiences} /> : null}
          {slug === "offers" ? <section className="section-y bg-white"><div className="luxury-container"><SectionHeader eyebrow="Packages" title="Direct booking benefits" /><div className="grid gap-5 lg:grid-cols-3">{offers.map((offer) => <EditorialCard key={offer.title} item={offer} />)}</div></div></section> : null}
          {slug === "nearby-attractions" ? <Attractions /> : null}
          {slug === "faq" ? <section className="section-y bg-white"><div className="luxury-container"><FAQAccordion /></div></section> : null}
          {slug === "contact" ? <ContactBooking compact /> : null}
          <section className="section-y bg-ivory"><div className="luxury-container"><SectionHeader eyebrow="Gallery" title="Visual proof for guests and search" hindi="गैलरी" /><GalleryLightbox images={gallery.slice(0, 8)} /></div></section>
        </>
      )}
    </main>
  );
}

const roomShowcase = [
  { title: "AC Comfort Room", tag: "Comfort AC Room", price: "₹1,500", rating: "4.8", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80", beds: "Double bed", baths: "1 Bath", size: "280 sqft" },
  { title: "Deluxe Room", tag: "Deluxe Room", price: "₹2,000", rating: "4.9", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80", beds: "King bed", baths: "1 Bath", size: "350 sqft" },
  { title: "Premium Suite", tag: "Premium Suite", price: "₹3,500", rating: "5.0", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80", beds: "King bed", baths: "1 Bath", size: "480 sqft" }
];

function RoomsSuitesShowcase() {
  return (
    <main>
      <section className="relative min-h-[340px] overflow-hidden bg-green pt-32 text-white">
        <Image src={images.suite} alt="Rooms and Suites at Hotel B Anand" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="luxury-container relative grid min-h-[220px] place-items-center text-center">
          <div>
            <h1 className="font-heading text-5xl md:text-7xl">Rooms & Suites</h1>
            <p className="mt-3 text-sm font-semibold text-white/80">Home / Rooms & Suites</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <div className="relative mb-12 text-center">
            <p className="pointer-events-none absolute inset-x-0 -top-12 font-heading text-7xl text-green/[0.04] md:text-9xl">ROOMS & SUITES</p>
            <p className="eyebrow">Rooms & Suites</p>
            <h2 className="mt-3 font-heading text-4xl text-charcoal md:text-6xl">Comfortable Rooms & Suites</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-charcoal/65">
              Choose elegant rooms and spacious suites with refined interiors, comfortable bedding, modern amenities, and warm Hotel B Anand service.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roomShowcase.map((room, index) => (
              <article key={room.title} className={`group overflow-hidden rounded-[18px] border bg-white shadow-soft ${index === 0 ? "border-green/45" : "border-green/10"}`}>
                <div className="relative h-60 overflow-hidden">
                  <Image src={room.image} alt={`${room.title} at Hotel B Anand`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  {index === 0 ? (
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-green shadow-soft">
                        <Play className="h-5 w-5 fill-current" />
                      </span>
                    </span>
                  ) : null}
                  <span className="absolute bottom-0 left-0 rounded-tr-[12px] bg-green px-5 py-3 text-xs font-bold text-white">{room.tag}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-heading text-3xl font-bold text-green">{room.price}<span className="ml-1 font-sans text-xs font-medium text-charcoal/50">/ night</span></p>
                    <p className="flex items-center gap-1 text-sm font-bold text-charcoal"><Star className="h-4 w-4 fill-gold text-gold" />{room.rating}</p>
                  </div>
                  <h3 className="mt-2 font-heading text-2xl text-charcoal">{room.title}</h3>
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-champagne pt-4 text-xs font-semibold text-charcoal/65">
                    <span className="flex items-center gap-1"><BedDouble className="h-4 w-4 text-gold" />{room.beds}</span>
                    <span className="flex items-center gap-1"><Bath className="h-4 w-4 text-gold" />{room.baths}</span>
                    <span className="flex items-center gap-1"><Ruler className="h-4 w-4 text-gold" />{room.size}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green py-5 text-white">
        <div className="luxury-container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-heading text-2xl">
          {["Breakfast Included", "Swimming Pool", "High Speed Wifi", "Spa & Wellness"].map((item) => (
            <span key={item} className="flex items-center gap-5"><span>{item}</span><Star className="h-5 w-5 fill-gold text-gold" /></span>
          ))}
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="eyebrow">Make a Reservation</p>
            <h2 className="mt-3 font-heading text-4xl text-green md:text-6xl">Book Your Stay and Enjoy Exceptional Comfort</h2>
            <p className="mt-4 text-charcoal/65">Calendar dates update live, and booking time is ready for your reservation enquiry.</p>
          </div>
          <BookingCard />
        </div>
      </section>
    </main>
  );
}

function FeatureGrid({ title, items }: { title: string; items: typeof experiences }) {
  return (
    <section className="section-y bg-white">
      <div className="luxury-container">
        <SectionHeader eyebrow="Hotel B Anand" title={title} align="center" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <EditorialCard key={item.title} item={item} />)}</div>
      </div>
    </section>
  );
}

function DiningVenues() {
  return (
    <section className="section-y bg-white">
      <div className="luxury-container">
        <SectionHeader
          eyebrow="Hotel B Anand"
          title="Dining Venues"
          hindi="शाही भोजन अनुभव"
          text="From royal thalis to courtyard dinners, each venue is designed for clear service, comforting flavours, and a refined hotel dining experience."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {diningVenues.map((venue) => (
            <article key={venue.title} className="compact-card grid overflow-hidden rounded-[18px] lg:grid-cols-[280px_1fr]">
              <div className="relative min-h-64">
                <Image src={venue.image} alt={`${venue.title} at Hotel B Anand`} fill sizes="(min-width: 1024px) 280px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <p className="font-devanagari text-sm text-gold">{venue.hi}</p>
                <h3 className="mt-1 font-heading text-3xl text-green">{venue.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/68">{venue.text}</p>
                <p className="mt-4 text-sm font-bold text-brown">{venue.timing}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {venue.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full bg-ivory px-3 py-1 text-xs font-bold text-green">{highlight}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Attractions() {
  return (
    <section className="section-y bg-white">
      <div className="luxury-container grid gap-4 md:grid-cols-2">
        {attractions.map((item) => <div key={item.title} className="flex gap-4 rounded-[24px] bg-ivory p-6 shadow-soft"><item.icon className="h-7 w-7 text-gold" /><div><h3 className="font-heading text-3xl text-green">{item.title}</h3><p className="font-bold text-gold">{item.distance}</p><p className="mt-2 text-charcoal/65">{item.text}</p></div></div>)}
      </div>
    </section>
  );
}

function ContactBooking({ compact }: { compact: boolean }) {
  return (
    <section className="section-y bg-white">
      <div className="luxury-container grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="rounded-[28px] bg-green p-8 text-white shadow-soft">
          <h2 className="font-heading text-5xl">Concierge Enquiry</h2>
          <p className="mt-3 font-devanagari text-xl text-champagne">कंसीयर्ज से संपर्क करें</p>
          <p className="mt-5 leading-8 text-white/72">This form is ready for CMS, CRM, payment, booking engine, and WhatsApp integration.</p>
        </div>
        <BookingCard compact={compact} />
      </div>
    </section>
  );
}
