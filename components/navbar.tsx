"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Venues & Services", href: "/venues-services" },
    { label: "Wedding Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-crimson-light shadow-[0_8px_28px_rgba(83,19,30,0.12)]">
      <div className="hidden bg-crimson py-2 text-xs font-semibold text-white/85 md:block">
        <div className="luxury-container flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> {hotel.phone}</span>
            <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> {hotel.email}</span>
            <span className="hidden items-center gap-2 lg:flex"><MapPin className="h-3.5 w-3.5 text-gold" /> {hotel.address}</span>
          </div>
          <div className="flex items-center gap-2">
            {["f", "x", "in", "ig"].map((item) => (
              <span key={item} className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-[10px] uppercase text-gold">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <nav className={cn("luxury-container flex items-center justify-between bg-crimson-light transition-all", scrolled ? "py-3" : "py-4")}>
        <Link href="/" className="flex items-center gap-3" aria-label="Shri Ji Mandapam home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-crimson font-heading text-xl text-gold font-bold">S</span>
          <span>
            <span className="block font-heading text-2xl font-bold leading-none text-crimson">Shri Ji Mandapam</span>
            <span className="text-[10px] uppercase tracking-wider text-gold font-bold">Banquet Hall & Lawn</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3.5 py-2 text-sm font-semibold text-charcoal/75 transition hover:bg-crimson-light hover:text-crimson">
              {item.label}
            </Link>
          ))}
        </div>

        <Link 
          href="/book-now"
          className="hidden rounded-full bg-crimson px-6 py-3 text-sm font-bold text-white transition hover:bg-crimson-dark lg:inline-flex shadow-sm"
        >
          Book Now
        </Link>

        <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-crimson/10 bg-crimson-light p-4 shadow-soft lg:hidden">
          <div className="luxury-container grid gap-2">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-crimson-light px-4 py-3 font-semibold text-crimson">
                {item.label}
              </Link>
            ))}
            <Link 
              href="/book-now"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-crimson px-4 py-3 text-center font-bold text-white block"
            >
              Book Now
            </Link>
          </div>
        </div>
      ) : null}

      <ScrollProgress />
    </header>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed left-0 top-0 h-1 bg-gold transition-[width]" style={{ width: `${width}%` }} />;
}
