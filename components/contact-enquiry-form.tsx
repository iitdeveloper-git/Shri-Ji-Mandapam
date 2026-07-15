"use client";

import { FormEvent, useState } from "react";
import { CalendarDays, CheckCircle2, MessageCircle, Users } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function ContactEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Namaste ${hotel.name}!`,
      "I would like to enquire about an event booking.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Event: ${data.get("eventType")}`,
      `Event date: ${data.get("eventDate") || "Not decided"}`,
      `Guests: ${data.get("guests") || "Not decided"}`,
      `Message: ${data.get("message") || "Please share availability and packages."}`,
    ].join("\n");
    setSubmitted(true);
    window.open(`https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Event enquiry form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="contact-field"><span>Your name *</span><input name="name" required placeholder="Enter your full name" autoComplete="name" /></label>
        <label className="contact-field"><span>Mobile number *</span><input name="phone" required type="tel" inputMode="tel" minLength={10} placeholder="10-digit mobile number" autoComplete="tel" /></label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="contact-field">
          <span>Celebration type *</span>
          <select name="eventType" required defaultValue=""><option value="" disabled>Select an event</option><option>Wedding</option><option>Reception</option><option>Engagement</option><option>Sangeet / Mehendi</option><option>Birthday / Anniversary</option><option>Corporate / Social Event</option><option>Room Booking</option><option>Other</option></select>
        </label>
        <label className="contact-field"><span><CalendarDays className="h-4 w-4" /> Preferred date</span><input name="eventDate" type="date" /></label>
      </div>
      <label className="contact-field"><span><Users className="h-4 w-4" /> Expected guests</span><input name="guests" type="number" min="1" placeholder="Approximate guest count" /></label>
      <label className="contact-field"><span>How can we help?</span><textarea name="message" rows={4} placeholder="Tell us about venue, catering, rooms, décor or any special requirement..." /></label>
      <button type="submit" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-sm bg-crimson px-6 py-4 font-bold text-white shadow-lg transition hover:bg-crimson-dark focus:outline-none focus:ring-4 focus:ring-crimson/20"><MessageCircle className="h-5 w-5" /> Send enquiry on WhatsApp</button>
      {submitted ? <p className="flex items-center gap-2 text-sm font-semibold text-green" role="status"><CheckCircle2 className="h-4 w-4" /> WhatsApp opened with your enquiry details.</p> : null}
      <p className="text-xs leading-5 text-charcoal/55">By submitting, you agree to be contacted about your enquiry. We never share your details.</p>
    </form>
  );
}
