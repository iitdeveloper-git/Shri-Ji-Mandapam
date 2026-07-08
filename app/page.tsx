import Image from "next/image";
import { Gem, Map, MapPin, Navigation, Play, Quote, Clock, Bell, Car, Gift } from "lucide-react";
import { BookingCard } from "@/components/booking-card";
import { EditorialCard, ReviewCard, RoomCards } from "@/components/cards";
import { DiningButtons } from "@/components/dining-buttons";
import { AwardCards } from "@/components/award-cards";
import { ExperienceSlider } from "@/components/experience-slider";
import { FAQAccordion } from "@/components/accordion";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { attractions, awards, blogPosts, experiences, gallery, hotel, images, offers, reviews, villas } from "@/lib/hotel-data";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-charcoal text-white">
        <Image src={images.hero} alt="Hotel B Anand premium entrance near Manona Dham" fill priority sizes="100vw" className="object-cover opacity-82" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/18 to-charcoal/78" />
        <div className="luxury-container relative flex min-h-screen flex-col justify-center items-center text-center pb-10 pt-32">
          <Reveal>
            <p className="eyebrow mb-5">Hotel B Anand · Aonla, Bareilly</p>
            <h1 className="heading-xl mx-auto max-w-6xl">Hotel B Anand</h1>
            <p className="mt-3 font-devanagari text-3xl text-champagne">लक्ज़री स्टे और बेमिसाल मेहमाननवाज़ी</p>
            <p className="mt-7 mx-auto max-w-2xl text-lg leading-8 text-white font-semibold">Divine comfort meets premium luxury. Savor shuddh shakahari dining and clean, peaceful AC rooms just 2.5 km from Shree Khatu Shyam Mandir, Manona Dham.</p>
          </Reveal>
          <div className="mt-14 w-full max-w-4xl">
            <BookingCard />
          </div>
        </div>
      </section>

      <section id="rooms" className="section-y bg-ivory">
        <div className="luxury-container">
          <Reveal>
            <div className="mb-8 grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <p className="eyebrow">Accommodations</p>
                <h2 className="mt-4 heading-lg text-green">Neat, clean, and comfortable air-conditioned rooms</h2>
                <p className="mt-2 font-devanagari text-lg text-gold">आरामदायक कमरे</p>
                <p className="mt-4 max-w-none text-base leading-7 text-charcoal font-semibold">
                  Equipped with attached baths, cooling, cozy double beds, and 24/7 room service for pilgrims and visitors.
                </p>
              </div>
            </div>
          </Reveal>
          <RoomCards />
        </div>
      </section>

      <section className="section-y bg-green text-white">
        <div className="luxury-container">
          <SectionHeader align="center" eyebrow="Signature Experiences" title="Experiences shown exactly as guests use them" hindi="विशेष अनुभव" text="Dining rooms, spa areas, luxury suite stays, relaxing lounges, meeting rooms, and local travel support are presented with clear, guest-friendly details." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group relative min-h-96 overflow-hidden rounded-[28px] bg-brown p-7 text-white shadow-soft">
                  <Image src={item.image} alt={`${item.title} at Hotel B Anand`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-55 transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green via-green/25 to-transparent" />
                  <div className="relative flex h-full min-h-80 flex-col justify-end">
                    <item.icon className="mb-5 h-8 w-8 text-gold" />
                    <h3 className="font-heading text-4xl">{item.title}</h3>
                    <p className="font-devanagari text-lg text-champagne">{item.hi}</p>
                    <p className="mt-3 text-sm leading-7 text-white font-medium">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="restaurant" className="section-y bg-marble">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="grid gap-5 md:grid-cols-2">
            {[images.dining, images.thali].map((image, index) => (
              <div key={image} className={`relative overflow-hidden rounded-[28px] ${index === 0 ? "h-[520px]" : "h-[420px] md:mt-16"}`}>
                <Image src={image} alt="Fine dining at Hotel B Anand" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <Reveal>
            <SectionHeader eyebrow="Fine Dining" title="Pure Veg Restaurant & Catering" hindi="प्रीमियम रेस्टोरेंट" text="Our in-house kitchen serves delicious pure vegetarian Indian dishes prepared fresh daily for pilgrim groups and families." />
            <DiningButtons />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader eyebrow="Spiritual Assembly" title="A sacred space for pilgrim gatherings" hindi="सत्संग और प्रार्थना हॉल" text="Hotel B Anand features a beautifully decorated grand satsang and assembly hall for prayer sessions, spiritual discourses, and group pilgrim events." />
          </Reveal>
          <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-soft">
            <Image src={images.spa} alt="Spiritual satsang hall at Hotel B Anand" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section id="amenities" className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Hotel Exterior & Luxury" title="Your premium retreat near Manona Dham" hindi="लक्ज़री होटल और भव्य प्रवेश" align="center" text="Hotel B Anand offers a grand multi-story luxury facade, beautifully lit suites, safe bus parking, and royal hospitality." />
          <div className="relative min-h-[620px] overflow-hidden rounded-[32px] bg-green p-8 text-white shadow-soft">
            <Image src="/hotel-b-anand-facade.png" alt="Hotel B Anand premium building facade" fill sizes="100vw" className="object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-r from-green/85 via-green/45 to-transparent" />
            <div className="relative flex min-h-[560px] max-w-2xl flex-col justify-end">
              <Gem className="mb-5 h-10 w-10 text-gold animate-pulse" />
              <h3 className="font-heading text-4xl sm:text-5xl leading-tight">A state-of-the-art modern luxury hotel facade designed for premium comfort.</h3>
              <p className="mt-3 font-devanagari text-xl text-champagne font-bold">आधुनिक वास्तुकला और शाही प्रवेश द्वार से युक्त मनोना धाम के पास सर्वश्रेष्ठ लक्ज़री होटल।</p>
              <div className="mt-8">
                <a 
                  href={`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent("🙏 नमस्ते Hotel B Anand! मुझे आपके होटल में रूम बुकिंग/लक्ज़री स्टे के बारे में जानकारी चाहिए।")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-green shadow-glow hover:scale-105 duration-300"
                >
                  Book Your Room / कमरा बुक करें 🏨
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="section-y bg-ivory">
        <div className="luxury-container">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="eyebrow">Signature Experiences</p>
              <h2 className="mt-4 heading-lg text-green">Experiences shown exactly as guests use them</h2>
              <p className="mt-2 font-devanagari text-2xl text-gold">विशेष अनुभव</p>
            </div>
          </Reveal>

          <ExperienceSlider />
        </div>
      </section>

      <section id="video-tour" className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader align="center" eyebrow="Video Tour" title="Cinematic Walkthrough of Hotel B Anand" hindi="सिनेमैटिक वीडियो टूर" text="Take a virtual motion walkthrough of our premium luxury spaces, elegant suites, and serene lounge settings." />
          <div className="flex justify-center mt-10">
            <div className="relative w-full max-w-sm aspect-[9/16] overflow-hidden rounded-[32px] border-4 border-gold shadow-glow bg-charcoal">
              <iframe 
                src="https://assets.pinterest.com/ext/embed.html?id=295830269298114117" 
                className="absolute w-[108%] h-[108%] -left-[4%] -top-[4%] border-0" 
                scrolling="no" 
                allowFullScreen
                title="Hotel B Anand Cinematic Video Tour"
              />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 bg-charcoal/85 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/40 shadow-soft pointer-events-none whitespace-nowrap">
                <span className="text-xs uppercase tracking-widest text-champagne font-bold">Hotel B Anand</span>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-charcoal/85 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/40 shadow-soft pointer-events-none whitespace-nowrap">
                <span className="text-xs uppercase tracking-widest text-champagne font-bold">www.iitdeveloper.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-champagne/45">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4 text-center">
            <div className="col-span-12">
              <p className="eyebrow">Awards</p>
              <h2 className="mt-4 heading-lg text-green">Trusted for comfort, service, and pilgrim convenience</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">विशेषताएं</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal font-semibold">
                Hotel B Anand is appreciated by guests for clean AC rooms, pure vegetarian dining, luxury amenities, and proximity to Manona Dham.
              </p>
            </div>
          </div>
          <AwardCards />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Guest Testimonials" title="Trusted by guests who notice detail" hindi="अतिथि अनुभव" align="center" />
          <div className="grid gap-5 lg:grid-cols-3">{reviews.map((review) => <ReviewCard key={review.name} {...review} />)}</div>
          <div className="mt-8 grid gap-5 rounded-[28px] bg-green p-5 text-white shadow-soft lg:grid-cols-[.42fr_1fr] lg:items-center">
            <div className="relative grid aspect-video place-items-center rounded-[22px] overflow-hidden bg-charcoal">
              <video 
                src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pool-41443-large.mp4"
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-green/20" />
              <Play className="relative z-10 h-12 w-12 fill-gold text-gold animate-pulse cursor-pointer hover:scale-110 transition duration-300" />
            </div>
            <div className="p-3">
              <Quote className="mb-4 h-8 w-8 text-gold" />
              <p className="text-xl font-semibold leading-9 text-white">
                "Watch our virtual tour! Experience pristine AC rooms, warm reception services, and modern luxury suites."
              </p>
              <p className="mt-2 font-devanagari text-lg text-champagne font-bold leading-8">
                "हमारे होटल का वर्चुअल वीडियो टूर देखें! साफ़-सुथरे कमरे, स्वागत कक्ष की सेवाएं और आधुनिक लक्ज़री सुइट्स का साक्षात अनुभव करें।"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-y bg-ivory">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-4 heading-lg text-green">A glimpse of Hotel B Anand</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">गैलरी</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal font-semibold">
                View our luxury suites, fine-dining restaurant, premium bar, indoor swimming pool, library, and scenic rooftop lounge.
              </p>
            </div>
          </div>
          <GalleryLightbox images={gallery} />
        </div>
      </section>

      <section id="dham-guide" className="section-y bg-marble">
        <div className="luxury-container">
          <Reveal>
            <div className="mb-10 grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <p className="eyebrow">Pilgrimage Guide / धाम यात्रा गाइड</p>
                <h2 className="mt-4 heading-lg text-green">Khatu Shyam Ji Manona Dham Darshan Assistance</h2>
                <p className="mt-2 font-devanagari text-2xl text-gold">श्री खाटू श्याम जी मनोना धाम दर्शन गाइड</p>
                <p className="mt-4 max-w-none text-base leading-7 text-charcoal font-semibold">
                  For the convenience of devotees, we provide updated temple timings, route maps, transport support, and direct assistance for Darshan.
                  मनोना धाम आने वाले श्रद्धालुओं की सुविधा के लिए हम दर्शन समय, मार्ग, वाहन सहायता और मंदिर दर्शन से संबंधित सभी आवश्यक जानकारी प्रदान करते हैं।
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Darshan Timings",
                hi: "दर्शन का समय",
                desc: "Open Daily: 5:30 AM - 9:00 PM",
                hiDesc: "प्रतिदिन: सुबह 5:30 से रात्रि 9:00 बजे तक",
                detail: "Darshan remains open throughout the day for all devotees.",
                hiDetail: "श्रद्धालुओं के लिए पूरे दिन दर्शन खुले रहते हैं।",
                icon: Clock
              },
              {
                title: "Aarti Schedule",
                hi: "आरती समय-सारणी",
                desc: "Mangala: 6:00 AM | Sandhya: 7:00 PM",
                hiDesc: "मंगला: सुबह 6:00 | संध्या: शाम 7:00 बजे",
                detail: "Experience the spiritual bliss of daily Aarti ceremonies.",
                hiDetail: "दैनिक आरती उत्सव में शामिल होकर आध्यात्मिक आनंद प्राप्त करें।",
                icon: Bell
              },
              {
                title: "Travel Assistance",
                hi: "यात्रा एवं वाहन सहायता",
                desc: "Just 2.5 km from Hotel",
                hiDesc: "होटल से मात्र 2.5 किमी की दूरी",
                detail: "Local auto and cab booking assistance is available 24/7 at the front desk.",
                hiDetail: "रिसेप्शन पर 24/7 लोकल ऑटो और टैक्सी बुकिंग सेवा उपलब्ध है।",
                icon: Car
              },
              {
                title: "Prasad & Offerings",
                hi: "भोग एवं शुद्ध प्रसाद",
                desc: "Fresh Prasad Counter",
                hiDesc: "ताज़ा शुद्ध प्रसाद काउंटर",
                detail: "Get fresh flowers, coconut, and pure traditional sweets directly from the counter.",
                hiDetail: "काउंटर से ताजे फूल, नारियल और शुद्ध प्रसाद प्राप्त करें।",
                icon: Gift
              }
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-[28px] bg-white p-6 shadow-soft border border-champagne/45 hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
                  <div className="mb-4 inline-block rounded-full bg-gold/10 p-3 text-gold">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-green">{item.title}</h3>
                  <p className="font-devanagari text-sm font-bold text-gold mb-3">{item.hi}</p>
                  <div className="border-t border-champagne/30 pt-3 space-y-2">
                    <p className="text-sm font-semibold text-charcoal">{item.desc}</p>
                    <p className="font-devanagari text-xs font-bold text-charcoal">{item.hiDesc}</p>
                    <p className="text-xs text-charcoal/60 leading-relaxed mt-2">{item.detail}</p>
                    <p className="font-devanagari text-[11px] text-charcoal/50 leading-relaxed">{item.hiDetail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <a 
                href="https://maps.google.com/?q=Manona+Dham+Shyam+Mandir+Aonla"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green px-8 py-4 font-bold text-white shadow-soft transition hover:bg-gold hover:scale-105 duration-300"
              >
                <Map className="h-5 w-5 text-gold" /> Get Directions to Manona Dham / मार्ग निर्देश देखें 🗺️
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section-y bg-white">
        <div className="luxury-container grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeader eyebrow="Nearby Attractions" title="Aonla, curated with comfort" hindi="नज़दीकी आकर्षण" text="Plan local transfers, business visits, shopping, dining, and nearby attractions with simple guidance from the hotel team." />
            <div className="grid gap-3">{attractions.map((item) => <div key={item.title} className="flex gap-4 rounded-[22px] bg-ivory p-5 shadow-soft"><item.icon className="h-6 w-6 shrink-0 text-gold" /><div><h3 className="font-bold text-green">{item.title} · {item.distance}</h3><p className="mt-1 text-sm text-charcoal/64">{item.text}</p></div></div>)}</div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-green p-8 text-white shadow-soft">
            <div className="absolute inset-6 rounded-[28px] bg-white/8" />
            <div className="absolute inset-10 rounded-[24px] border border-white/15" />
            <Map className="absolute right-8 top-8 h-10 w-10 text-gold" />
            <div className="absolute left-[15%] top-[22%] h-20 w-20 rounded-full border border-gold/40" />
            <div className="absolute left-[58%] top-[28%] h-28 w-28 rounded-full border border-white/15" />
            <div className="absolute left-[35%] top-[58%] h-24 w-24 rounded-full border border-gold/25" />
            <div className="absolute left-[24%] top-[36%] flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-green shadow-soft">
              <MapPin className="h-4 w-4 text-gold" />
              Hotel B Anand
            </div>
            <div className="absolute right-[18%] top-[48%] flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-white shadow-glow">
              <Navigation className="h-4 w-4" />
              Manona Dham (2.5 km)
            </div>
            <div className="absolute left-[18%] top-[24%] h-4 w-4 rounded-full bg-gold shadow-glow" />
            <div className="absolute left-[58%] top-[36%] h-4 w-4 rounded-full bg-white" />
            <div className="absolute left-[42%] top-[66%] h-4 w-4 rounded-full bg-gold shadow-glow" />
            <div className="absolute bottom-8 left-8 max-w-sm">
              <p className="eyebrow">Location Map</p>
              <h3 className="mt-3 font-heading text-4xl">Hotel B Anand in Aonla</h3>
              <p className="mt-3 text-sm leading-6 text-white font-medium">Conveniently located on Aonla-Shahabad Road, Bareilly. Closest premium stay to Shree Khatu Shyam Ji Manona Dham.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container"><SectionHeader eyebrow="FAQ" title="Questions before arrival" hindi="अक्सर पूछे जाने वाले प्रश्न" align="center" /><FAQAccordion /></div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <p className="eyebrow">Offers</p>
              <h2 className="mt-4 heading-lg text-green">Stay packages for every occasion</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">विशेष ऑफर</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal font-semibold">
                Choose from weekend stays, wedding preview visits, wellness breaks, and family-friendly packages with thoughtful inclusions.
              </p>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">{offers.map((offer) => <EditorialCard key={offer.title} item={offer} href="/offers" />)}</div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <p className="eyebrow">Blog</p>
              <h2 className="mt-4 heading-lg text-green">Hotel stories, travel tips, and celebration guides</h2>
              <p className="mt-2 font-devanagari text-lg text-gold">ब्लॉग</p>
              <p className="mt-4 max-w-none text-base leading-7 text-charcoal font-semibold">
                Read helpful ideas for hotel stays, wellness breaks, dining plans, pilgrim guide, and comfortable lodging experiences near Manona Dham.
              </p>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">{blogPosts.map((post) => <EditorialCard key={post.slug} item={{ ...post, title: post.title }} href={`/blog/${post.slug}`} />)}</div>
        </div>
      </section>

      <section className="bg-green py-20 text-white">
        <div className="luxury-container rounded-[32px] bg-white p-8 text-charcoal shadow-soft md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl text-green">Receive private invitations, seasonal packages, and chef table releases.</h2>
              <p className="mt-2 font-devanagari text-xl text-green font-bold">विशेष निमंत्रण और ऑफर प्राप्त करें</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row"><input className="min-h-14 flex-1 rounded-full border border-champagne bg-ivory px-5 outline-none focus:border-gold" placeholder="Your email address" aria-label="Email address" /><button className="rounded-full bg-gold px-7 py-4 font-bold text-white transition hover:bg-green" type="submit">Subscribe</button></form>
          </div>
        </div>
      </section>

    </main>
  );
}
