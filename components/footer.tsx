import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Venues & Services", href: "#services" },
    { label: "Wedding Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="luxury-container py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.7fr_.7fr_.9fr]">
          <div>
            <p className="font-heading text-4xl text-crimson font-bold">Shri Ji Mandapam</p>
            <p className="text-[10px] uppercase tracking-wider text-gold font-bold">Banquet Hall & Lawn</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Aonla's premier banquet hall and marriage celebration lawn. We offer grand air-conditioned indoor halls, lush green party lawns, luxury lodging, and premium pure veg catering.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a key={index} className="icon-button border-white/20 bg-white/10 text-white hover:bg-crimson hover:border-crimson" href="#" aria-label="Social profile">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-title">Explore</p>
            <div className="mt-4 grid gap-3">
              {navLinks.map((item) => <Link key={item.href} className="footer-link hover:text-crimson" href={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="footer-title">Services</p>
            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <p>Grand Banquet Hall</p>
              <p>Lush Green Party Lawn</p>
              <p>AC Guest & Bridal Rooms</p>
              <p>Pure Veg Catering & Buffets</p>
              <p>Creative Stage & Mandap Decor</p>
            </div>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <div className="mt-4 grid gap-4 text-sm text-white/72 font-semibold">
              <a 
                href="https://share.google/rvWQvE5dir6Yqm5mC"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 hover:text-crimson transition"
              >
                <MapPin className="h-5 w-5 text-gold shrink-0" /> {hotel.address}
              </a>
              <a className="flex gap-3 hover:text-crimson transition" href={`tel:${hotel.phone.replace(/\s+/g, '')}`}><Phone className="h-5 w-5 text-gold shrink-0" /> {hotel.phone}</a>
              <a className="flex gap-3 hover:text-crimson transition" href={`mailto:${hotel.email}`}><Mail className="h-5 w-5 text-gold shrink-0" /> {hotel.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {hotel.name}. All rights reserved.</p>
          <p>
            IIT-Developer dwara banaya hai{" "}
            <a className="font-bold text-gold hover:text-crimson" href="https://iitdeveloper.com" target="_blank" rel="noreferrer">
              IIT-Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
