"use client";

import { MessageCircle, Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function FloatingActions() {
  return (
    <>
      <a
        className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-crimson p-4 text-white shadow-glow transition hover:scale-105 hover:bg-crimson-dark"
        href={`tel:${hotel.phone.replace(/\s+/g, '')}`}
        aria-label="Call Shri Ji Mandapam"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green p-4 text-white shadow-glow transition hover:scale-105 hover:bg-emerald-600"
        href={`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(`🙏 नमस्ते ${hotel.name}!\n\nमुझे शादी/समारोह के लिए बैंक्वेट हॉल की बुकिंग के संबंध में जानकारी चाहिए।`)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </>
  );
}
