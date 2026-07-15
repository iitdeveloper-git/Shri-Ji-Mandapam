"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Maximize2,
  Clock,
  ChevronRight,
  PartyPopper,
  UtensilsCrossed,
  Home,
  CheckSquare
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { hotel } from "@/lib/hotel-data";

export default function HomePage() {
  // Booking Form States
  const [eventType, setEventType] = useState("wedding");
  const [guestCount, setGuestCount] = useState("300-600");
  const [eventDate, setEventDate] = useState("");
  const [contactNo, setContactNo] = useState("");

  // Contact Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Checking availability for ${eventType} on ${eventDate} for ${guestCount} guests. We will call you on ${contactNo} shortly!`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitted(false);
      alert("Inquiry details submitted successfully! Our event manager will contact you within 24 hours.");
    }, 1500);
  };

  const venuesAndServices = [
    {
      title: "Grand Banquet Hall",
      icon: Home,
      image: "/shri_ji_1.png",
      details: "Fully air-conditioned indoor hall with a capacity of up to 800 guests. Features luxury seating, high ceilings, an elegant bridal stage, and state-of-the-art acoustic sound setup."
    },
    {
      title: "Lush Green Outdoor Lawn",
      icon: Sparkles,
      image: "/shri_ji_facade_day.jpg",
      details: "A massive open-air landscape lawn (15,000+ sq ft) surrounded by beautiful landscaping. Perfect for grand buffet setups, floral mandaps, and evening reception themes of up to 1,500 guests."
    },
    {
      title: "Luxury Guest Suites",
      icon: CheckSquare,
      image: "/shri_ji_room_1.jpg",
      details: "Well-furnished air-conditioned guest rooms and a private bridal suite featuring comfortable double beds, premium decor, attached clean washrooms, and 24/7 service support."
    },
    {
      title: "Pure Veg Indian Catering",
      icon: UtensilsCrossed,
      image: "/catering-1.jpg",
      details: "Delight your guests with our customized, 100% pure vegetarian multi-cuisine menu. Prepared fresh on-site under strict hygiene, from traditional sweets to modern snacks."
    }
  ];

  const galleryImages = [
    { url: "/shri_ji_facade_day.jpg", caption: "Grand Facade Day View" },
    { url: "/shri_ji_1.png", caption: "Majestic Night Illumination" },
    { url: "/shri_ji_corridor.jpg", caption: "Guest Rooms Corridor" },
    { url: "/shri_ji_room_1.jpg", caption: "Banquet Suite Bed" },
    { url: "/shri_ji_room_2.jpg", caption: "Banquet Suite Interior" },
    { url: "/shri_ji_reception.jpg", caption: "Reception & Lounge Counter" }
  ];

  return (
    <main className="bg-ivory text-charcoal min-h-screen">
      
      {/* 1. Hero Section (Day View Background) */}
      <section id="home" className="relative min-h-screen overflow-hidden bg-charcoal text-white flex items-center justify-center pt-24 pb-12">
        <Image 
          src="/shri_ji_facade_day.jpg" 
          alt="Shri Ji Mandapam Banquet Hall Daytime View" 
          fill 
          priority 
          sizes="100vw" 
          className="object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/90" />
        
        <div className="luxury-container relative z-10 text-center flex flex-col items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-crimson/25 px-4 py-1.5 text-xs font-semibold text-gold tracking-widest uppercase border border-crimson/30 mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Aonla's Premier Wedding Venue & Banquet Hall
            </span>
            <h1 className="heading-xl mx-auto max-w-5xl font-heading text-white">
              Shri Ji Mandapam Banquet Hall
            </h1>
            <p className="mt-4 font-devanagari text-2xl text-gold">
              आंवला-बिसौली रोड पर भव्य मैरिज लॉन और वातानुकूलित बैंक्वेट हॉल
            </p>
            <p className="mt-6 mx-auto max-w-2xl text-base leading-8 text-neutral-200">
              Celebrate your life's special moments in a setting that matches your dreams. Elegant architectural arches, spacious indoor hall, lush green outdoor party lawn, and luxurious guest rooms near Manona Dham.
            </p>
          </Reveal>

          {/* Quick Date & Event Availability Check */}
          <div className="mt-12 w-full max-w-4xl">
            <Reveal delay={0.15}>
              <form onSubmit={handleBookingSubmit} className="glass rounded-[28px] p-6 shadow-glow grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-end text-charcoal">
                
                {/* Event Type */}
                <div className="flex flex-col text-left gap-1 bg-white rounded-xl p-3 border border-neutral-100">
                  <span className="text-[10px] uppercase font-bold text-neutral-400">Event Type</span>
                  <select 
                    value={eventType} 
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none font-semibold text-sm text-charcoal cursor-pointer"
                  >
                    <option value="wedding">Wedding (विवाह)</option>
                    <option value="sangeet">Sangeet / Haldi (संगीत)</option>
                    <option value="reception">Reception (रिसेप्शन)</option>
                    <option value="engagement">Engagement (सगाई)</option>
                    <option value="private">Private Party / Birthday</option>
                  </select>
                </div>

                {/* Event Date */}
                <div className="flex flex-col text-left gap-1 bg-white rounded-xl p-3 border border-neutral-100">
                  <span className="text-[10px] uppercase font-bold text-neutral-400">Preferred Date</span>
                  <input 
                    type="date" 
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none font-semibold text-sm text-charcoal cursor-pointer"
                  />
                </div>

                {/* Guest Count */}
                <div className="flex flex-col text-left gap-1 bg-white rounded-xl p-3 border border-neutral-100">
                  <span className="text-[10px] uppercase font-bold text-neutral-400">Expected Guests</span>
                  <select 
                    value={guestCount} 
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none font-semibold text-sm text-charcoal cursor-pointer"
                  >
                    <option value="100-300">100 - 300 Guests</option>
                    <option value="300-600">300 - 600 Guests</option>
                    <option value="600-1000">600 - 1000 Guests</option>
                    <option value="1000+">1000+ Guests</option>
                  </select>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="w-full h-[54px] rounded-xl bg-crimson hover:bg-crimson-dark text-white font-bold text-sm tracking-wide transition duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="h-4 w-4" /> Book Hall / Query
                </button>

              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. About Us Section (Night View Facade) */}
      <section id="about" className="section-y bg-white">
        <div className="luxury-container grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Night Facade Photo */}
          <Reveal>
            <div className="relative h-[560px] w-full overflow-hidden rounded-[32px] shadow-soft border border-neutral-100">
              <Image 
                src="/shri_ji_1.png" 
                alt="Shri Ji Mandapam Front Facade at Night" 
                fill 
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute bottom-6 left-6 glass rounded-2xl p-5 max-w-[280px]">
                <p className="font-heading text-4xl text-crimson font-bold">100+</p>
                <p className="text-xs font-bold text-charcoal/70 mt-1 uppercase tracking-wider">Grand Celebrations Hosted Successfully</p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Copy & Benefits Checklist */}
          <Reveal delay={0.1}>
            <div>
              <SectionHeader 
                eyebrow="Welcome to Aonla's Finest Venue" 
                title="The Destination for Your Dream Celebrations" 
                hindi="आंवला का भव्य वैवाहिक केंद्र" 
                text="Located near Manona Dham on Aonla-Bisauli Road, Shri Ji Mandapam Banquet Hall is a premium celebration destination. Spanning across a grand architectural indoor hall, beautiful expansive party lawns, and premium air-conditioned rooms, we provide unmatched hospitality to elevate your special functions."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Grand Indoor Banquet Hall",
                  "Lush Green Party Lawn (15,000+ sq ft)",
                  "Fully AC Bridal Suite & Dressing Rooms",
                  "Comfortable Staying Rooms for Guests",
                  "In-House Delicious Pure Veg Catering",
                  "Professional Event & Stage Decorators",
                  "Full Power Backup & Security",
                  "Ample Convenient Parking Space"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-crimson shrink-0" />
                    <span className="text-sm font-semibold text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button 
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full bg-crimson px-8 py-3.5 text-sm font-bold text-white transition hover:bg-crimson-dark shadow-sm"
                >
                  Schedule A Visit
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 3. Venues & Services Section */}
      <section id="services" className="section-y bg-ivory">
        <div className="luxury-container">
          <Reveal>
            <SectionHeader 
              align="center"
              eyebrow="Our Venues & Amenities" 
              title="Everything Needed for Grand Weddings" 
              hindi="हमारी उत्कृष्ट सुविधाएं" 
              text="From custom lighting, grand catering buffets, stays for wedding guests, to stunning floral stages, we handle every detail."
            />
          </Reveal>

          {/* Venues Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {venuesAndServices.map((venue, index) => (
              <Reveal key={venue.title} delay={index * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft border border-neutral-100 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={venue.image} 
                      alt={venue.title} 
                      fill 
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <venue.icon className="h-5 w-5 text-gold shrink-0" />
                      <h3 className="font-heading text-2xl font-bold text-charcoal">{venue.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-charcoal/70 flex-1">{venue.details}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Wedding Celebrations Hosted / Happy Couples */}
      <section id="stories" className="section-y bg-white">
        <div className="luxury-container">
          <Reveal>
            <SectionHeader 
              align="center"
              eyebrow="Celebration Highlights" 
              title="Happy Weddings at Shri Ji Mandapam" 
              hindi="हमारे यहाँ संपन्न विवाह" 
              text="A glimpse into the grand wedding ceremonies and happy milestones hosted at our banquet hall."
            />
          </Reveal>

          <div className="mt-12 space-y-12">
            {[
              {
                title: "Rohan & Sneha's Grand Wedding",
                date: "November 2025",
                image: "/wedding-3.jpg",
                text: "We hosted our royal wedding at Shri Ji Mandapam. The night lighting on the arches looked majestic. The catering was delicious and all guest AC rooms were clean and highly comfortable. Thank you to the team!"
              },
              {
                title: "Amit & Pooja's Reception Ceremony",
                date: "February 2026",
                image: "/wedding-4.png",
                text: "Shri Ji Mandapam provided the perfect open-air lawn setting for our grand reception party of 1000+ guests. The catering service was extremely professional, and the decor matching was exact."
              }
            ].map((story, index) => (
              <Reveal key={story.title} delay={index * 0.05}>
                <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}>
                  {/* Story Image */}
                  <div className={`relative h-96 w-full overflow-hidden rounded-[28px] shadow-soft border border-neutral-100 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}>
                    <Image 
                      src={story.image} 
                      alt={story.title} 
                      fill 
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover" 
                    />
                  </div>

                  {/* Story Content */}
                  <div className={`space-y-4 ${
                    index % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-12"
                  }`}>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-crimson-light text-crimson font-bold text-xs rounded-full">
                        {story.date}
                      </span>
                      <span className="flex items-center gap-1 text-gold font-bold text-sm">
                        <PartyPopper className="h-4 w-4" /> Royal Celebration
                      </span>
                    </div>
                    <h3 className="font-heading text-3xl text-charcoal font-bold">{story.title}</h3>
                    <p className="text-base leading-7 text-charcoal/70 italic">"{story.text}"</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Photo Gallery Section */}
      <section id="gallery" className="section-y bg-ivory">
        <div className="luxury-container">
          <Reveal>
            <SectionHeader 
              align="center"
              eyebrow="Photo Gallery" 
              title="A Glimpse of Shri Ji Mandapam" 
              hindi="विवाह और उत्सव गैलरी" 
              text="Explore photos of our beautiful hall lighting, facade, party lawns, catering, and floral wedding setups."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Reveal key={image.url} delay={index * 0.04}>
                <div className="group relative h-72 overflow-hidden rounded-2xl shadow-soft cursor-pointer">
                  <Image 
                    src={image.url} 
                    alt={image.caption} 
                    fill 
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
                  <div className="absolute bottom-5 left-5 right-5 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">Shri Ji Mandapam</p>
                    <h4 className="font-heading text-2xl font-bold mt-1">{image.caption}</h4>
                  </div>
                  <span className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition opacity-0 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Event Booking Inquiry Section */}
      <section id="contact" className="relative section-y bg-charcoal text-white overflow-hidden">
        <Image 
          src="/shri_ji_1.png" 
          alt="Shri Ji Mandapam Night Backdrop" 
          fill 
          sizes="100vw" 
          className="object-cover opacity-25" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/90" />

        <div className="luxury-container relative z-10 max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Contact Details & Google Map info */}
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-4 py-1 text-xs font-semibold text-gold tracking-wider uppercase mb-2">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified Location & Booking
              </span>
              <h2 className="heading-lg text-white font-bold">Plan Your Celebration With Us</h2>
              <p className="text-neutral-300 leading-7 text-sm max-w-md">
                Get in touch with our event management team to check date availability, get pricing quotes for catering and decor, or schedule a physical tour of our banquet hall.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-neutral-300">
                <a 
                  href="https://www.google.com/maps/dir/28.4936737,77.1158283/Shri+Ji+Mandapam,+Aonla-Bisauli+Road,+near+manona+dham,+Aonla,+Uttar+Pradesh+243301/@28.2766899,79.1460182,731m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390ab3003bc516df:0xc2ca5bc64c8aa47a!2m2!1d79.1508838!2d28.27669?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 hover:text-crimson transition group"
                >
                  <MapPin className="h-5 w-5 text-gold shrink-0 group-hover:text-crimson" />
                  <div>
                    <h5 className="font-bold text-white mb-0.5 group-hover:text-crimson">Address:</h5>
                    <p>{hotel.address}</p>
                  </div>
                </a>
                
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <h5 className="font-bold text-white mb-0.5">Contact Number:</h5>
                    <a className="hover:text-crimson text-white font-semibold transition" href={`tel:${hotel.phone.replace(/\s+/g, '')}`}>
                      {hotel.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <h5 className="font-bold text-white mb-0.5">Hours:</h5>
                    <p>Open 24 hours (Confirmed by phone call)</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="https://www.google.com/maps/dir/28.4936737,77.1158283/Shri+Ji+Mandapam,+Aonla-Bisauli+Road,+near+manona+dham,+Aonla,+Uttar+Pradesh+243301/@28.2766899,79.1460182,731m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390ab3003bc516df:0xc2ca5bc64c8aa47a!2m2!1d79.1508838!2d28.27669?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-crimson px-5 py-2.5 text-xs font-bold text-white transition hover:bg-crimson-dark shadow-sm"
                  >
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Inquiry Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleContactSubmit} className="glass rounded-[28px] p-8 shadow-glow text-charcoal space-y-4">
              <h3 className="font-heading text-3xl font-bold text-crimson text-center mb-2">Request Quote / Date</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-neutral-500">Your Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name" 
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-crimson bg-white" 
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-neutral-500">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-crimson bg-white" 
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-neutral-500">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number" 
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-crimson bg-white" 
                  />
                </div>

                {/* Event Type selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold text-neutral-500">Type of Celebration</label>
                  <select className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-crimson bg-white cursor-pointer">
                    <option value="wedding">Grand Wedding Ceremony</option>
                    <option value="sangeet">Sangeet / Mehendi Ceremony</option>
                    <option value="reception">Reception Celebration</option>
                    <option value="engagement">Engagement Function</option>
                    <option value="other">Other Celebration / Party</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-bold text-neutral-500">Catering, Decor, or Custom Requests</label>
                <textarea 
                  rows={3} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about expected guest count, decorations, or catering preferences..." 
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-crimson bg-white resize-none" 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={submitted}
                className="w-full rounded-xl bg-crimson hover:bg-crimson-dark text-white font-bold py-3.5 transition duration-200 shadow-sm uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                {submitted ? "Sending Request..." : "Request Call / Details"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
      
    </main>
  );
}
