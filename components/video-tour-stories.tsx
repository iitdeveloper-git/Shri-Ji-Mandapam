"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

interface StorySlide {
  image: string;
  title: string;
  subtitle: string;
  badge: string;
}

const slides: StorySlide[] = [
  {
    image: "/hotel-b-anand-facade.png",
    badge: "Welcome",
    title: "Hotel B Anand",
    subtitle: "Experience premium hospitality and luxury comfort near Manona Dham."
  },
  {
    image: "/room-service-bed.jpg",
    badge: "Luxury Stay",
    title: "Premium AC Suites",
    subtitle: "Comfortable air-conditioned rooms with 24/7 royal room service."
  },
  {
    image: "/hotel-temple-shrine.png",
    badge: "Devotion",
    title: "Spiritual Sanctum",
    subtitle: "Beautiful indoor marble temple for peaceful prayers and assembly."
  },
  {
    image: "/indoor-pool-garden.jpg",
    badge: "Recreation",
    title: "Serene Garden Pool",
    subtitle: "Relax and rejuvenate in our clean indoor swimming pool oasis."
  },
  {
    image: "/basement-parking.png",
    badge: "Convenience",
    title: "Secure Parking Slots",
    subtitle: "Spacious underground basement and valet parking for your safety."
  }
];

export function VideoTourStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const duration = 4000; // 4 seconds per slide
  const stepTime = 40; // update progress bar every 40ms

  useEffect(() => {
    if (!isPlaying) return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          return 0;
        }
        return prev + (stepTime / duration) * 100;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-sm aspect-[9/16] overflow-hidden rounded-[32px] border-4 border-gold shadow-glow bg-charcoal select-none">
      {/* Slides Container */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            {isActive && (
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="380px"
                priority
                className="object-cover transform scale-100 animate-kenburns opacity-60"
              />
            )}
          </div>
        );
      })}

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/70 z-10 pointer-events-none" />

      {/* Top Progress Bars (Instagram Stories style) */}
      <div className="absolute top-4 left-4 right-4 flex gap-1.5 z-20">
        {slides.map((_, index) => {
          let barProgress = 0;
          if (index < currentIndex) barProgress = 100;
          if (index === currentIndex) barProgress = progress;

          return (
            <div key={index} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-75"
                style={{ width: `${barProgress}%` }}
              />
            </div>
          );
        })}
      </div>

      {/* Top Brand Header */}
      <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-20 text-white">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gold/20 border border-gold flex items-center justify-center font-heading text-gold text-xs font-bold">
            B
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-champagne">Hotel B Anand</p>
            <p className="text-[10px] text-white/70">Virtual Walkthrough</p>
          </div>
        </div>
        <button
          onClick={togglePlay}
          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition backdrop-blur-sm"
        >
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </button>
      </div>

      {/* Center Left/Right Navigation Taps */}
      <div className="absolute inset-x-0 top-24 bottom-28 z-20 flex justify-between px-2">
        <button
          onClick={handlePrev}
          className="h-10 w-10 my-auto rounded-full bg-charcoal/40 hover:bg-charcoal/60 border border-white/10 flex items-center justify-center text-white transition backdrop-blur-sm opacity-0 hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 my-auto rounded-full bg-charcoal/40 hover:bg-charcoal/60 border border-white/10 flex items-center justify-center text-white transition backdrop-blur-sm opacity-0 hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom Text Overlays (Stories Text content) */}
      <div className="absolute bottom-6 left-5 right-5 z-20 text-white flex flex-col items-center text-center">
        <div className="inline-block bg-gold/15 border border-gold/40 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider text-gold font-bold mb-3 backdrop-blur-sm">
          {slides[currentIndex].badge}
        </div>
        <h3 className="text-2xl font-heading text-white tracking-wide drop-shadow-md">
          {slides[currentIndex].title}
        </h3>
        <p className="mt-2 text-xs leading-5 text-white/80 max-w-[280px] drop-shadow-sm font-medium">
          {slides[currentIndex].subtitle}
        </p>

        {/* Branding Footer */}
        <div className="mt-5 pt-3 border-t border-white/15 w-full flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-widest text-champagne font-bold">
          <span>www.iitdeveloper.com</span>
        </div>
      </div>
    </div>
  );
}
