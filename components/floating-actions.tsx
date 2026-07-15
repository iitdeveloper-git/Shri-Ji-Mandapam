"use client";

import { MessageCircle, Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function FloatingActions() {
  const message = `Namaste ${hotel.name}! I would like to know about venue availability and event packages.`;

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between pointer-events-none sm:inset-x-5 sm:bottom-5">
      <a
        className="pointer-events-auto inline-flex min-h-14 items-center gap-2 rounded-full bg-crimson px-5 text-sm font-bold text-white shadow-glow transition hover:scale-105 hover:bg-crimson-dark sm:h-14 sm:w-14 sm:justify-center sm:px-0"
        href={`tel:${hotel.phone.replace(/\s+/g, "")}`}
        aria-label={`Call ${hotel.name} at ${hotel.phone}`}
      >
        <Phone className="h-5 w-5" />
        <span className="sm:hidden">Call now</span>
      </a>
      <a
        className="pointer-events-auto inline-flex min-h-14 items-center gap-2 rounded-full bg-[#128c4b] px-5 text-sm font-bold text-white shadow-glow transition hover:scale-105 hover:bg-[#0f7a41] sm:h-14 sm:w-14 sm:justify-center sm:px-0"
        href={`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Shri Ji Mandapam on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
