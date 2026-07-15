"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, Mail } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export default function VenuesServicesPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-charcoal text-white py-24 px-4 mb-12 overflow-hidden">
        <Image
          src="/shri_ji_facade_day.jpg"
          alt="Shri Ji Mandapam Hall Front"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-charcoal/50" />
        <div className="luxury-container relative z-10 max-w-3xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest hover:text-white transition mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="font-heading text-5xl font-bold text-white mb-2">Our Venues &amp; Services</h1>
          <p className="text-lg text-gold font-devanagari mb-4">
            आपके हर ख़ास पल को बनाता है शानदार – बैनक्वेट हॉल, लॉन, रूम्स और प्रीमियम सर्विसेज़.
          </p>
          <p className="text-lg text-gold">
            Elevating every special moment with our premium banquet hall, garden lawn, guest rooms, and top‑class services.
          </p>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="luxury-container space-y-16 mb-16">
        {/* Banquet Hall */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src="/shri_ji_1.png" alt="Banquet Hall interior" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-green font-bold">AC Banquet Hall (800 Seats)</h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              एसी‑डेडicated बैनक्वेट हॉल, 800 सिट्स के साथ, आधुनिक लाइटिंग, साउंड सिस्टम और 24‑घंटे पावर बैक‑अप।
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed">
              A climate‑controlled banquet hall with 800 seats, equipped with modern lighting, sound system and 24‑hour power backup.
            </p>
          </div>
        </div>

        {/* Garden Lawn */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-green font-bold">15,000 sq ft Garden Lawn</h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              खुला लॉन, 15,000 sq ft में फैला, हर मौसम में हरदम हरा-भरा। एवरी‑ग्रीन डेकोर, जल शो और विस्तृत पार्किंग।
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed">
              An open lawn spread over 15,000 sq ft, evergreen décor, water‑show installations and ample parking.
            </p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src="/shri_ji_facade_night.jpg" alt="Garden Lawn night view" fill className="object-cover" />
          </div>
        </div>

        {/* Guest Rooms */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src="/shri_ji_room_1.jpg" alt="Luxury Guest Suite" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-green font-bold">10 Luxury Guest Rooms</h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              एसी‑रूम्स, अल्ट्रा‑कोम्फर्टेबल बिस्तर, एंतेना‑वॉटर‑हॉटेल एंट्रीस और 24‑घंटे डिलिवरी सर्विस।
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Air‑conditioned rooms with ultra‑comfortable beds, premium amenities and 24‑hour room service.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-charcoal py-12">
        <div className="luxury-container text-white">
          <h2 className="font-heading text-3xl text-gold mb-8 text-center">Our Premium Services</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-base">
            <li>✅ 100 % Pure Vegetarian Catering – ताज़ा, हेल्दी और स्वाद से भरपूर.</li>
            <li>✅ 24/7 Power Backup & Décor Support – किसी भी अनपेक्षित स्थिति में तैयार.</li>
            <li>✅ Professional Event Management – 15 साल के अनुभवी टीम द्वारा.</li>
            <li>✅ Wedding & Event Planning Consultation – आपके सपनों को हम साकार करेंगे.</li>
            <li>✅ Advanced Audio‑Visual Setup – हाई‑फ़िडेलिटी साउंड, LED स्क्रीन और लाइटिंग.</li>
            <li>✅ Dedicated Parking & Valet Service – 200+ कारों की जगह.</li>
          </ul>
        </div>
      </section>

      {/* Contact Block – same style as Footer */}
      <section className="bg-charcoal py-12">
        <div className="luxury-container grid gap-8 lg:grid-cols-2 text-white">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us / संपर्क करें</h3>
            <p className="text-sm opacity-80 mb-2">
              अपने इवेंट की बुकिंग या कंसल्टेशन के लिए हमसे संपर्क करें.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://share.google/rvWQvE5dir6Yqm5mC" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition">
                <MapPin className="h-5 w-5 text-gold" /> {hotel.address}
              </a>
              <a className="flex items-center gap-2 hover:text-gold transition" href={`tel:${hotel.phone.replace(/\\s+/g, '')}`}>
                <Phone className="h-5 w-5 text-gold" /> {hotel.phone}
              </a>
              <a className="flex items-center gap-2 hover:text-gold transition" href={`mailto:${hotel.email}`}>
                <Mail className="h-5 w-5 text-gold" /> {hotel.email}
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" /> Open 24 Hours (Confirmed by call)
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image src="/shri_ji_facade_night.jpg" alt="Mandapam night view" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
