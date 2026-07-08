"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/luxury-lobby-chandelier.png",
    title: "Royal Chandelier Lobby",
    hi: "शाही झूमर लॉबी",
    text: "Experience the grand welcome under sparkling chandeliers in our premium reception lobby.",
    hiText: "हमारे प्रीमियम रिसेप्शन लॉबी में चमकते झूमरों के नीचे भव्य स्वागत का अनुभव करें।"
  },
  {
    image: "/hotel-1.jpg",
    title: "Spiritual Assembly Hall",
    hi: "सत्संग और प्रार्थना हॉल",
    text: "A beautifully decorated grand assembly hall for pilgrim gatherings, prayers, and spiritual discourses.",
    hiText: "धार्मिक सभाओं, भजनों और सत्संग के लिए फूलों से सजाया गया भव्य प्रार्थना हॉल।"
  },
  {
    image: "/catering-3.jpg",
    title: "Royal Shahi Thali",
    hi: "शाही राजभोग थाली",
    text: "Experience the true taste of shuddh shakahari traditional North Indian feasts.",
    hiText: "पारंपरिक उत्तर भारतीय शुद्ध शाकाहारी भोजन और शाही थाली का आनंद लें।"
  },
  {
    image: "/front-desk-warm.png",
    title: "Warm Front Desk",
    hi: "24/7 स्वागत कक्ष",
    text: "Our concierge team is available 24/7 to assist you with temple timings, room service, and travel bookings.",
    hiText: "हमारा स्वागत कक्ष मंदिर के दर्शन समय, रूम सर्विस और यात्रा बुकिंग के लिए 24/7 उपलब्ध है।"
  },
  {
    image: "/room-service-bed.jpg",
    title: "Luxury Housekeeping",
    hi: "लक्ज़री हाउसकीपिंग",
    text: "Professional housekeeping team preparing your suite bed daily with fresh linens.",
    hiText: "ताजा साफ बिस्तरों के साथ आपके सुइट रूम को प्रतिदिन तैयार करती लक्ज़री हाउसकीपिंग सेवा।"
  },
  {
    image: "/dining-celebration.jpg",
    title: "Toast to Celebrations",
    hi: "उत्सव और टोस्ट",
    text: "Enjoy custom food pairings and raise a toast to special family reunions.",
    hiText: "विशेष पारिवारिक पुनर्मिलन और दावतों के बीच चियर्स और भोजन का आनंद लें।"
  },
  {
    image: "/cityview-dining.png",
    title: "Skyline Dining Room",
    hi: "आकाशगंगा डाइनिंग रूम",
    text: "Indulge in fine-dining menus overlooking the beautiful city skyline views.",
    hiText: "शहर के भव्य स्काईलाइन नज़ारों को देखते हुए शाही डिनर का आनंद लें।"
  },
  {
    image: "/modern-hotel-lounge.png",
    title: "Luxury Library Lounge",
    hi: "लक्ज़री लाइब्रेरी लाउंज",
    text: "Relax, read, or catch up in our cozy, modern library lounge designed for premium guests.",
    hiText: "हमारे आरामदायक और आधुनिक लाइब्रेरी लाउंज में आराम करें, पढ़ें या समय बिताएं।"
  },
  {
    image: "/lounge-sunset.jpg",
    title: "Rooftop Sunset Lounge",
    hi: "रूफटॉप सनसेट लाउंज",
    text: "Experience twilight with panoramic views and ambient luxury seating.",
    hiText: "सुंदर दृश्यों और आरामदायक लक्जरी सीटों के साथ शाम की चाय और नाश्ते का आनंद लें।"
  },
  {
    image: "/luxury-bar.png",
    title: "The Royal Executive Bar",
    hi: "शाही एक्जीक्यूटिव बार",
    text: "Sip custom concoctions and premium mocktails in our luxury industrial bar lounge.",
    hiText: "हमारे लक्जरी इंडस्ट्रियल बार लाउंज में कस्टम ड्रिंक्स और प्रीमियम मॉकटेल्स का आनंद लें।"
  },
  {
    image: "/luxury-bathroom-suite.jpg",
    title: "Executive Ensuite Bathroom",
    hi: "एक्जीक्यूटिव संलग्न बाथरूम",
    text: "Premium wood-finished ensuite bathrooms featuring ambient lighting and floating sinks.",
    hiText: "शांत लाइट और फ्लोटिंग सिंक के साथ हमारे शानदार लकड़ी की बनावट वाले बाथरूम का आनंद लें।"
  },
  {
    image: "/marble-rainshower.jpg",
    title: "Marble Rain Shower",
    hi: "संगमरमर रेन शावर",
    text: "Indulge in our luxurious marble-tiled bathrooms equipped with premium rain shower setups.",
    hiText: "लक्ज़री रेन शावर और शानदार संगमरमर की दीवारों वाले हमारे प्रीमियम बाथरूम में स्नान का आनंद लें।"
  },
  {
    image: "/indoor-pool-garden.jpg",
    title: "Garden View Indoor Pool",
    hi: "बगीचे के दृश्य वाला इनडोर पूल",
    text: "Relax in our climate-controlled indoor pool overlooking beautiful lush green gardens.",
    hiText: "सुंदर हरे-भरे बगीचों के दृश्यों वाले हमारे वातानुकूलित इनडोर पूल में तैरने का आनंद लें।"
  },
  {
    image: "/luxury-lap-pool.jpg",
    title: "Luxury Lap Pool",
    hi: "लक्ज़री लैप पूल",
    text: "Enjoy a tranquil night swim in our masterfully designed lap pool with ambient illumination.",
    hiText: "शांत रोशनी से जगमगाते हमारे सुंदर और आधुनिक इनडोर लैप पूल में तैरने का आनंद लें।"
  }
];

export function ExperienceSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      {/* 3D Perspective Card Slider */}
      <div className="relative h-[480px] w-full overflow-hidden flex items-center justify-center perspective-[1200px]">
        <AnimatePresence mode="popLayout">
          {slides.map((slide, i) => {
            // Calculate active cards relative position
            let offset = i - index;
            if (offset < -slides.length / 2) offset += slides.length;
            if (offset > slides.length / 2) offset -= slides.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            return (
              <motion.div
                key={slide.title}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: offset * 35,
                  z: -200,
                  x: offset * 320
                }}
                animate={{
                  opacity: isActive ? 1 : 0.6,
                  scale: isActive ? 1 : 0.85,
                  rotateY: offset * 25,
                  z: isActive ? 0 : -150,
                  x: offset * 280,
                  zIndex: isActive ? 10 : 5
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: offset * -320
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[320px] sm:w-[420px] h-[380px] rounded-[32px] bg-white border border-champagne/45 shadow-glow overflow-hidden cursor-pointer"
                onClick={() => setIndex(i)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative w-full h-[60%] overflow-hidden bg-charcoal">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                </div>
                <div className="p-5 flex flex-col justify-between h-[40%] bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-green leading-snug">{slide.title}</h3>
                    <p className="font-devanagari text-sm font-bold text-gold">{slide.hi}</p>
                  </div>
                  <div className="mt-2 border-t border-champagne/30 pt-2 text-left">
                    <p className="text-xs text-charcoal/70 line-clamp-2">{slide.text}</p>
                    <p className="font-devanagari text-[10px] text-charcoal/60 line-clamp-1 mt-1 font-bold">{slide.hiText}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-green shadow-soft border border-champagne hover:bg-gold hover:text-white transition duration-300"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="grid h-12 w-12 place-items-center rounded-full bg-white text-green shadow-soft border border-champagne hover:bg-gold hover:text-white transition duration-300"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
