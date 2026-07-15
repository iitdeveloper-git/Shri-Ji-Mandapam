"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const diningOptions = [
  { label: "Royal Thali", image: "/catering_buffet_food.png" },
  { label: "Chef Table", image: "/catering_setup_lawn.jpg" },
  { label: "Private Dining", image: "/new-gallery-3.jpg" },
  { label: "Cocktail Bar", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=85" }
];

export function DiningButtons() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        {diningOptions.map((item) => {
          const isActive = activeLabel === item.label;
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                if (isActive) {
                  setActiveImage(null);
                  setActiveLabel(null);
                } else {
                  setActiveImage(item.image);
                  setActiveLabel(item.label);
                }
              }}
              className={`rounded-full px-5 py-4 text-center font-bold shadow-soft transition duration-300 hover:scale-105 ${
                isActive ? "bg-gold text-white" : "bg-white text-green hover:bg-gold hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 360 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full overflow-hidden rounded-[24px] border border-champagne bg-white shadow-soft"
          >
            <Image src={activeImage} alt={activeLabel || "Dining"} fill className="object-cover" />
            {activeLabel && (
              <div className="absolute bottom-4 left-4 rounded-xl bg-charcoal/85 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
                {activeLabel} (Click button to close)
              </div>
            )}
            <button
              onClick={() => {
                setActiveImage(null);
                setActiveLabel(null);
              }}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white text-charcoal shadow-soft hover:bg-gold hover:text-white transition duration-200"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
