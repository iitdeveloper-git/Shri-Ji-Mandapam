"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Phone, MapPin, Clock, Mail } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export default function AboutUsPage() {
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
          <h1 className="font-heading text-5xl font-bold text-white mb-2">About Shri Ji Mandapam</h1>
          <p className="text-lg text-gold font-devanagari">
            आपका विश्वसनीय शादी और समारोह का स्थल – हर ख़ास पल को यादगार बनाने के लिए
          </p>
        </div>
      </section>

      {/* Core Story Section */}
      <section className="luxury-container space-y-12 mb-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-green font-bold">हमारी कहानी</h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              2005 में स्थापित, Shri Ji Mandapam ने उत्तर प्रदेश के सबसे बड़े वेडिंग लॉन और बैनक्वेट हॉल को अपने पोर्टफोलियो में जोड़ते हुए एक भरोसेमंद नाम बनाया। हम एवर‑ग्रीन डेकोर, 100 % शाकाहारी कैटरिंग, और 24‑घंटे की पावर सप्लाई के साथ हर इवेंट को स्मूथ चलाते हैं। हमारी टीम के पास 15 साल का इवेंट मैनेजमेंट अनुभव है और हम हर महमान को राजसी अनुभव देना चाहते हैं।
            </p>
            <ul className="grid gap-3 text-sm text-charcoal/70">
              <li>✅ एसी बैनक्वेट हॉल (800 सिट्स)</li>
              <li>✅ 15,000 sq ft गार्डन लॉन</li>
              <li>✅ 10 लक्ज़री गेस्ट रूम्स</li>
              <li>✅ 100 % शुद्ध शाकाहारी भोजन</li>
              <li>✅ 24/7 पावर बैक‑अप & डेकोर सपोर्ट</li>
            </ul>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src="/shri_ji_1.png" alt="Mandapam interior" fill className="object-cover" />
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden order-2 lg:order-1">
            <Image src="/shri_ji_room_1.jpg" alt="Luxury Guest Suite" fill className="object-cover" />
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="font-heading text-3xl text-green font-bold">हमारी दृष्टि</h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              हर जोड़े को एक ऐसा स्थल देना जहाँ वे अपनी कहानी को अनोखे अंदाज़ में लिख सकें। हम लगातार बेस्ट‑इन‑क्लास सर्विस, नई डिज़ाइन ट्रेंड और प्रीमियम अमेनेजमेंट टूल्स को अपनाते हैं ताकि आपका इवेंट सिर्फ़ एक इवेंट न, बल्कि एक जीवन‑भर याद बन जाए।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Block – same style as Footer */}
      <section className="bg-charcoal py-12">
        <div className="luxury-container grid gap-8 lg:grid-cols-2 text-white">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p className="text-sm opacity-80">
              हमें आपके इस खास दिन की तैयारी में मदद करके खुशी होगी। नीचे दी गयी जानकारी से हमें एसेज़ करें या सीधे कॉल करें।
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
