"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { faqs } from "@/lib/hotel-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div
            key={index}
            className="perspective-[1000px] h-fit"
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-[28px] bg-white p-5 border border-champagne/45 transition-all duration-500 shadow-soft",
                "hover:-translate-y-2 hover:rotate-1 hover:shadow-glow",
                isOpen && "border-gold shadow-glow"
              )}
              style={{ transformStyle: "preserve-3d" }}
            >
              <button
                className="flex w-full items-start justify-between gap-4 text-left"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                type="button"
              >
                <div className="flex gap-3">
                  <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-green/10 text-green">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-green leading-snug">{faq.q}</h3>
                    <p className="mt-1 font-devanagari text-xs text-gold font-bold">{faq.hiQ}</p>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-gold transition-transform duration-300 mt-1",
                    isOpen && "rotate-180 text-green"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-champagne/40 pt-4 flex gap-3">
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                        <MessageSquare className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-relaxed text-charcoal">{faq.a}</p>
                        <p className="mt-2 font-devanagari text-xs font-bold leading-relaxed text-charcoal">{faq.hiA}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
