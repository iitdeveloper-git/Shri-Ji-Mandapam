"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  SlidersHorizontal, 
  Check, 
  Calendar, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Building, 
  X,
  Phone,
  Clock,
  HelpCircle,
  PartyPopper,
  CalendarClock,
  CreditCard,
  IndianRupee,
  MessageCircle,
  ListChecks,
  BadgeCheck
} from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { BookingCalendar } from "@/components/booking-calendar";

// Authentic Shri Ji Mandapam Packages
const initialPackages = [
  {
    id: 1,
    title: "Complete Wedding Package (Lawn + Hall + Rooms)",
    type: "package",
    rating: 9.8,
    reviewsCount: 148,
    ratingText: "Exceptional",
    price: 150000,
    priceLabel: "per day / event",
    image: "/shri_ji_1.png",
    stars: 5,
    tag: "Most Popular",
    details: "Includes the fully decorated grand air-conditioned banquet hall, vast landscape lawn (15,000+ sq ft), 10 luxury guest stay rooms, and a private bridal suite.",
    features: [
      "AC Banquet Hall (800 capacity)",
      "Lush Green Party Lawn",
      "10 Luxury AC Guest Suites",
      "Bridal Makeup Suite included",
      "24/7 Power backup & decoration support"
    ],
    amenities: ["AC", "Decor", "Guest Stay", "Catering Ready"]
  },
  {
    id: 2,
    title: "Grand AC Banquet Hall Venue",
    type: "hall",
    rating: 9.6,
    reviewsCount: 94,
    ratingText: "Excellent",
    price: 75000,
    priceLabel: "per day",
    image: "/shri_ji_reception.jpg",
    stars: 5,
    tag: "Best Indoor Space",
    details: "Fully air-conditioned indoor banquet hall with high ceilings, premium chandeliers, built-in bridal stage, sound acoustics, and seating arrangements.",
    features: [
      "Comfortably hosts 500-800 guests",
      "Built-in decorated bridal stage",
      "Premium luxury lighting & chandeliers",
      "Acoustic sound setup ready",
      "Pure Veg pantry access"
    ],
    amenities: ["AC", "Decor"]
  },
  {
    id: 3,
    title: "Lush Green Outdoor Celebration Lawn",
    type: "lawn",
    rating: 9.5,
    reviewsCount: 86,
    ratingText: "Excellent",
    price: 60000,
    priceLabel: "per day",
    image: "/shri_ji_facade_day.jpg",
    stars: 5,
    tag: "Best Outdoor",
    details: "A massive open-air landscaped party lawn surrounded by beautiful boundary lighting, perfect for grand buffet setups, mandaps, and evening receptions.",
    features: [
      "Massive 15,000+ sq ft lawn area",
      "Accommodates up to 1,500 guests",
      "Fairy lights boundary decor included",
      "DJ floor & stage space allocation",
      "Catering buffet stall structures"
    ],
    amenities: ["Decor", "Catering Ready"]
  },
  {
    id: 4,
    title: "Luxury AC Guest Rooms (Pack of 5 Rooms)",
    type: "rooms",
    rating: 9.4,
    reviewsCount: 42,
    ratingText: "Very Good",
    price: 15000,
    priceLabel: "per night",
    image: "/shri_ji_room_1.jpg",
    stars: 4,
    tag: "Stay Package",
    details: "Pack of 5 newly built luxury stay rooms with premium double beds, air conditioning, modern attached washrooms, and immediate corridor lawn access.",
    features: [
      "Double King beds in all 5 rooms",
      "Individual split air conditioners",
      "Corridor walkway access",
      "Clean attached western washrooms",
      "24/7 service boy assistance"
    ],
    amenities: ["AC", "Guest Stay"]
  }
];

export default function BookNowPage() {
  // Search & Filter States
  const [selectedType, setSelectedType] = useState("all");
  const [maxBudget, setMaxBudget] = useState(200000);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");
  const [searchGuests, setSearchGuests] = useState("300-600");
  const [sortBy, setSortBy] = useState("recommended");
  const [availabilityChecked, setAvailabilityChecked] = useState(false);

  // Booking Modal States
  const [bookingPackage, setBookingPackage] = useState<any | null>(null);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientDate, setClientDate] = useState("");
  const [cateringRequest, setCateringRequest] = useState("veg-catering");
  const [notes, setNotes] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [eventSlot, setEventSlot] = useState("evening");
  const [paymentMethod, setPaymentMethod] = useState("pay-at-venue");
  const [addOns, setAddOns] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const date = params.get("date");
    const guests = params.get("guests");
    const type = params.get("type");
    if (date) {
      setSearchDate(date);
      setClientDate(date);
    }
    if (guests) setSearchGuests(guests);
    if (type) setSelectedType(type === "private" ? "lawn" : type === "wedding" ? "package" : "hall");
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const addOnOptions = [
    { id: "premium-decor", label: "Premium floral décor", price: 25000 },
    { id: "sound-dj", label: "DJ & professional sound", price: 15000 },
    { id: "photo-video", label: "Photography coordination", price: 10000 },
    { id: "extra-rooms", label: "5 additional guest rooms", price: 15000 },
  ];
  const addOnTotal = addOnOptions.filter((item) => addOns.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  const bookingTotal = bookingPackage ? bookingPackage.price + addOnTotal : 0;
  const suggestedAdvance = Math.round(bookingTotal * 0.2);

  // Toggle Amenities Filter
  const handleAmenityChange = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const toggleAddOn = (id: string) => {
    setAddOns((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  // Filter Logic
  const filteredPackages = initialPackages.filter(item => {
    // Type Filter
    if (selectedType !== "all" && item.type !== selectedType) return false;
    // Budget Filter
    if (item.price > maxBudget) return false;
    // Amenities Filter
    if (selectedAmenities.length > 0) {
      const hasAllSelected = selectedAmenities.every(a => item.amenities.includes(a));
      if (!hasAllSelected) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // Default Recommended
  });

  // Handle Booking Submit (WhatsApp integration)
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !clientDate) {
      alert("Please fill in Name, Phone Number, and Event Date!");
      return;
    }

    const selectedAddOns = addOnOptions.filter((item) => addOns.includes(item.id));
    const waMessage = `Namaste Shri Ji Mandapam Aonla!
I would like to request a provisional event reservation.

Name: ${clientName}
Mobile: +91 ${clientPhone}
Email: ${clientEmail || "Not provided"}
Package: ${bookingPackage.title}
Event date: ${clientDate}
Preferred slot: ${eventSlot === "morning" ? "Morning (8 AM - 2 PM)" : eventSlot === "full-day" ? "Full day (8 AM - 11 PM)" : "Evening (4 PM - 11 PM)"}
Guests: ${searchGuests}
Catering: ${cateringRequest === "veg-catering" ? "Pure vegetarian catering required" : "Venue only / self catering"}
Add-ons: ${selectedAddOns.length ? selectedAddOns.map((item) => item.label).join(", ") : "None"}
Base price: INR ${bookingPackage.price.toLocaleString()}
Estimated total: INR ${bookingTotal.toLocaleString()}
Preferred payment: ${paymentMethod === "upi-advance" ? "UPI advance after availability confirmation" : "Pay at venue / bank transfer after confirmation"}
Special request: ${notes || "None"}

Please confirm availability, final quotation and payment instructions. Thank you!`;

    window.open(`https://wa.me/918273476006?text=${encodeURIComponent(waMessage)}`, "_blank");
    setIsBooked(true);
  };

  // Close modal reset
  const closeModal = () => {
    setBookingPackage(null);
    setIsBooked(false);
    setClientName("");
    setClientPhone("");
    setClientEmail("");
    setClientDate("");
    setNotes("");
    setEventSlot("evening");
    setPaymentMethod("pay-at-venue");
    setAddOns([]);
  };

  return (
    <main className="min-h-screen bg-crimson-light text-charcoal pt-24 pb-16">
      
      {/* Top Banner section */}
      <section className="relative bg-charcoal text-white py-16 px-4 mb-8 overflow-hidden">
        <Image 
          src="/shri_ji_facade_day.jpg" 
          alt="Shri Ji Mandapam Lawn Facade"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/90" />
        
        <div className="luxury-container relative z-10 text-center max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest hover:text-white transition mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Home Page
          </Link>
          <h1 className="font-heading text-5xl text-white font-bold">Search Venues & Packages</h1>
          <p className="mt-2 font-devanagari text-xl text-gold">श्री जी मंडपम - उपलब्धता एवं दरें</p>
          
          {/* Booking.com styled Search Header */}
          <div className="mt-8 bg-white p-4 rounded-2xl shadow-lg text-charcoal grid gap-4 grid-cols-1 md:grid-cols-4 items-end text-left border border-neutral-100">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase">Venue Type</span>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-neutral-50 rounded-xl px-3 py-2.5 text-sm font-semibold border-0 outline-none cursor-pointer"
              >
                <option value="all">All Venues / Packages</option>
                <option value="package">Full Wedding Package</option>
                <option value="hall">Indoor AC Hall Only</option>
                <option value="lawn">Party Lawn Only</option>
                <option value="rooms">Luxury Guest Rooms</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase">Preferred Date</span>
              <div className="relative">
                <input 
                  id="booking-date"
                  type="date"
                  min={today}
                  value={searchDate}
                  onChange={(e) => { setSearchDate(e.target.value); setAvailabilityChecked(false); }}
                  className="w-full bg-neutral-50 rounded-xl px-3 py-2.5 text-sm font-semibold border-0 outline-none cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-neutral-400 uppercase">Expected Guests</span>
              <select 
                value={searchGuests}
                onChange={(e) => setSearchGuests(e.target.value)}
                className="w-full bg-neutral-50 rounded-xl px-3 py-2.5 text-sm font-semibold border-0 outline-none cursor-pointer"
              >
                <option value="100-300">100 - 300 guests</option>
                <option value="300-600">300 - 600 guests</option>
                <option value="600-1000">600 - 1,000 guests</option>
                <option value="1000+">1000+ guests</option>
              </select>
            </div>

            <button 
              onClick={() => {
                if (!searchDate) {
                  document.getElementById("booking-date")?.focus();
                  return;
                }
                setAvailabilityChecked(true);
              }}
              className="w-full bg-crimson hover:bg-crimson-dark text-white font-bold py-3 rounded-xl transition duration-150 text-sm shadow-sm"
            >
              Search Availability
            </button>
          </div>
          {availabilityChecked ? (
            <div className="mx-auto mt-4 flex max-w-2xl items-start gap-3 rounded-xl border border-gold/30 bg-charcoal/75 px-4 py-3 text-left text-sm backdrop-blur">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p><strong>Options ready for {new Date(`${searchDate}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}.</strong><span className="block text-xs text-white/65">Select a package below to send a provisional reservation request. Final availability is confirmed by the booking desk.</span></p>
            </div>
          ) : null}
        </div>
      </section>

      {/* App-style reservation progress */}
      <section className="luxury-container relative z-10 -mt-14 mb-8 px-4">
        <div className="grid overflow-hidden rounded-2xl border border-crimson/10 bg-white shadow-soft sm:grid-cols-3">
          {[
            { number: "01", icon: CalendarClock, title: "Choose date & guests", text: "Select your preferred calendar range and guest count." },
            { number: "02", icon: ListChecks, title: "Select venue package", text: "Compare hall, lawn, rooms and complete packages." },
            { number: "03", icon: BadgeCheck, title: "Request confirmation", text: "Review pricing and receive confirmation from our desk." },
          ].map((step, index) => (
            <div key={step.number} className={`flex gap-4 p-5 ${index < 2 ? "border-b border-crimson/10 sm:border-b-0 sm:border-r" : ""}`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-crimson-light text-crimson"><step.icon className="h-5 w-5" /></span>
              <div><p className="text-[9px] font-extrabold uppercase tracking-[.18em] text-crimson/55">Step {step.number}</p><h2 className="mt-1 text-sm font-extrabold">{step.title}</h2><p className="mt-1 text-xs leading-5 text-charcoal/50">{step.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <section className="luxury-container grid gap-8 lg:grid-cols-4 items-start px-4">
        
        {/* Left Side: Booking.com filters panel */}
        <aside className="space-y-5 lg:sticky lg:top-36">
          <BookingCalendar
            startDate={searchDate}
            endDate={searchEndDate}
            onStartDateChange={(date) => {
              setSearchDate(date);
              setClientDate(date);
              setAvailabilityChecked(false);
            }}
            onEndDateChange={setSearchEndDate}
            onAvailability={() => setAvailabilityChecked(true)}
          />
          <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-soft space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h3 className="font-bold text-base flex items-center gap-2"><SlidersHorizontal className="h-4 w-4 text-crimson" /> Filter By</h3>
            <button 
              onClick={() => {
                setSelectedType("all");
                setMaxBudget(200000);
                setSelectedAmenities([]);
              }}
              className="text-xs text-crimson hover:underline font-bold"
            >
              Clear All
            </button>
          </div>

          {/* Budget per day slider */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase text-neutral-400 tracking-wider">Budget Per Day / Stay</h4>
            <div className="flex justify-between text-xs font-semibold text-charcoal/70">
              <span>Min: ₹10,000</span>
              <span>Max: ₹{maxBudget.toLocaleString()}</span>
            </div>
            <input 
              type="range"
              min="10000"
              max="200000"
              step="5000"
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full accent-crimson cursor-pointer h-1.5 bg-neutral-100 rounded-lg"
            />
          </div>

          {/* Venue Category Filters */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase text-neutral-400 tracking-wider">Venue Category</h4>
            <div className="grid gap-2 text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type-filter" 
                  checked={selectedType === "all"} 
                  onChange={() => setSelectedType("all")} 
                  className="accent-crimson h-4 w-4" 
                />
                <span>All Options</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type-filter" 
                  checked={selectedType === "package"} 
                  onChange={() => setSelectedType("package")} 
                  className="accent-crimson h-4 w-4" 
                />
                <span>Complete Packages</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type-filter" 
                  checked={selectedType === "hall"} 
                  onChange={() => setSelectedType("hall")} 
                  className="accent-crimson h-4 w-4" 
                />
                <span>Air-Conditioned Halls</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type-filter" 
                  checked={selectedType === "lawn"} 
                  onChange={() => setSelectedType("lawn")} 
                  className="accent-crimson h-4 w-4" 
                />
                <span>Party Lawns</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="type-filter" 
                  checked={selectedType === "rooms"} 
                  onChange={() => setSelectedType("rooms")} 
                  className="accent-crimson h-4 w-4" 
                />
                <span>Stay Guest Rooms</span>
              </label>
            </div>
          </div>

          {/* Included Services checkboxes */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase text-neutral-400 tracking-wider">Included Services</h4>
            <div className="grid gap-2.5 text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={selectedAmenities.includes("AC")}
                  onChange={() => handleAmenityChange("AC")}
                  className="rounded accent-crimson h-4 w-4 cursor-pointer" 
                />
                <span>Air Conditioning (AC)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={selectedAmenities.includes("Decor")}
                  onChange={() => handleAmenityChange("Decor")}
                  className="rounded accent-crimson h-4 w-4 cursor-pointer" 
                />
                <span>Stage & Mandap Decor</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={selectedAmenities.includes("Guest Stay")}
                  onChange={() => handleAmenityChange("Guest Stay")}
                  className="rounded accent-crimson h-4 w-4 cursor-pointer" 
                />
                <span>AC Guest Suites</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={selectedAmenities.includes("Catering Ready")}
                  onChange={() => handleAmenityChange("Catering Ready")}
                  className="rounded accent-crimson h-4 w-4 cursor-pointer" 
                />
                <span>Catering Prep Area</span>
              </label>
            </div>
          </div>

          {/* Direct verification badge */}
          <div className="p-4 bg-crimson/5 rounded-xl border border-crimson/15 space-y-2">
            <div className="flex items-center gap-2 text-crimson font-bold text-xs uppercase">
              <ShieldCheck className="h-4 w-4" /> Direct Booking Support
            </div>
            <p className="text-xs text-neutral-600 leading-normal">
              Get 100% reservation transparency without broker fees. All online reservations are completed directly through Manona Dham.
            </p>
          </div>
          </div>
        </aside>

        {/* Right Side: Packages listing */}
        <section className="lg:col-span-3 space-y-6">
          
          {/* Header Sorting Bar */}
          <div className="bg-white p-4 rounded-2xl border border-crimson/10 shadow-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="font-bold text-lg text-charcoal/90">
              Shri Ji Mandapam: <span className="text-crimson font-extrabold">{filteredPackages.length} options found</span>
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-neutral-400">Sort By:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-neutral-50 px-3 py-1.5 rounded-lg border-0 font-bold outline-none cursor-pointer text-charcoal"
              >
                <option value="recommended">Our Recommendation</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Review Score</option>
              </select>
            </div>
          </div>

          {/* List of property cards */}
          <div className="grid gap-6">
            {filteredPackages.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-crimson/10 shadow-soft overflow-hidden grid grid-cols-1 md:grid-cols-3 transition-transform duration-200 hover:-translate-y-1 hover:border-crimson/25 hover:shadow-glow"
              >
                {/* Left Column: Image with Tag */}
                <div className="relative h-64 md:h-full min-h-[220px] bg-charcoal">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover" 
                  />
                  {item.tag && (
                    <span className="absolute top-4 left-4 bg-crimson text-white text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Middle Column: Description & features */}
                <div className="p-6 md:col-span-2 flex flex-col justify-between">
                  <div>
                    {/* Header: Title and Rating */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-heading text-2xl text-charcoal font-bold">{item.title}</h3>
                        <div className="flex items-center gap-1 mt-1 text-gold">
                          {[...Array(item.stars)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Booking rating badge */}
                      <div className="flex items-center gap-2 text-right shrink-0">
                        <div>
                          <p className="text-xs font-bold text-charcoal">{item.ratingText}</p>
                          <p className="text-[10px] text-neutral-400 font-bold">{item.reviewsCount} reviews</p>
                        </div>
                        <div className="h-9 w-9 rounded-xl bg-crimson text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                          {item.rating}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 leading-normal mb-4">{item.details}</p>

                    {/* Features bullet checklist */}
                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 text-xs font-medium text-neutral-700 mb-4">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green shrink-0 bg-green/10 rounded-full p-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Call-To-Action Bottom Bar */}
                  <div className="border-t pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold text-neutral-400">Exclusive Pricing</span>
                      <span className="text-3xl font-extrabold text-gold">₹{item.price.toLocaleString()}</span>
                      <span className="text-xs text-neutral-500 font-semibold ml-1.5">{item.priceLabel}</span>
                    </div>
                    
                    <button 
                      onClick={() => {
                        setBookingPackage(item);
                        setClientDate(searchDate);
                      }}
                      className="bg-crimson hover:bg-crimson-dark text-white font-bold px-6 py-3 rounded-lg transition duration-150 text-sm shadow-sm flex items-center justify-center gap-2 group"
                    >
                      Check Availability & Book
                    </button>
                  </div>
                </div>

              </div>
            ))}

            {filteredPackages.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center border border-neutral-100 shadow-soft space-y-4 max-w-lg mx-auto">
                <HelpCircle className="h-16 w-16 text-neutral-300 mx-auto" />
                <h3 className="font-heading text-2xl font-bold text-charcoal">No packages match your filters</h3>
                <p className="text-sm text-neutral-500">
                  Try clearing some of your selected service checks or increasing the maximum budget range to find matching venue facilities.
                </p>
                <button 
                  onClick={() => {
                    setSelectedType("all");
                    setMaxBudget(200000);
                    setSelectedAmenities([]);
                  }}
                  className="bg-crimson hover:bg-crimson-dark text-white font-bold px-5 py-2.5 rounded-xl transition duration-150 text-xs shadow-sm"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </section>

      {/* Booking Form Modal Overlay */}
      {bookingPackage && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-crimson/10 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-crimson p-6 text-white relative">
              <h3 className="font-heading text-2xl font-bold">{isBooked ? "Booking Query Sent!" : "Reserve Venue Space"}</h3>
              <p className="text-xs text-white/80 font-medium mt-1">{bookingPackage.title}</p>
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition bg-white/10 hover:bg-white/20 p-1.5 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body / Scrollable Area */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              
              {!isBooked ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase font-bold text-neutral-500">Full Name</label>
                      <input 
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-crimson"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase font-bold text-neutral-500">Phone Number (WhatsApp)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-neutral-400">+91</span>
                        <input 
                          type="tel"
                          required
                          maxLength={10}
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value.replace(/\D/g, ""))}
                          placeholder="9876543210"
                          className="w-full rounded-xl border border-neutral-200 pl-14 pr-4 py-2.5 text-sm outline-none focus:border-crimson"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase font-bold text-neutral-500">Email Address (Optional)</label>
                      <input 
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-crimson"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase font-bold text-neutral-500">Preferred Event Date</label>
                      <input 
                        type="date"
                        required
                        min={today}
                        value={clientDate}
                        onChange={(e) => setClientDate(e.target.value)}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-crimson cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Event time slot */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-neutral-500 flex items-center gap-2"><CalendarClock className="h-4 w-4 text-crimson" /> Preferred Booking Slot</label>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {[
                        { id: "morning", label: "Morning", time: "8 AM - 2 PM" },
                        { id: "evening", label: "Evening", time: "4 PM - 11 PM" },
                        { id: "full-day", label: "Full Day", time: "8 AM - 11 PM" },
                      ].map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setEventSlot(slot.id)}
                          className={`rounded-xl border p-3 text-left transition ${eventSlot === slot.id ? "border-crimson bg-crimson text-white" : "border-crimson/15 bg-crimson-light text-charcoal hover:border-crimson"}`}
                        >
                          <span className="block text-xs font-bold">{slot.label}</span>
                          <span className={`text-[10px] ${eventSlot === slot.id ? "text-white/70" : "text-charcoal/50"}`}>{slot.time}</span>
                        </button>
                      ))}
                    </div>
                    <p className="text-[10px] text-neutral-500">Final slot is locked only after the venue team confirms availability.</p>
                  </div>

                  {/* Catering selector */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-neutral-500">Catering Preference</label>
                    <select 
                      value={cateringRequest}
                      onChange={(e) => setCateringRequest(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-crimson bg-white cursor-pointer"
                    >
                      <option value="veg-catering">Include Pure Veg Indian Catering (स्वादिष्ट शाकाहारी भोजन)</option>
                      <option value="decor-only">Venue & Decor Only (Catering arranged by self)</option>
                    </select>
                  </div>

                  {/* Optional services */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-neutral-500">Optional Services</label>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {addOnOptions.map((item) => (
                        <label key={item.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${addOns.includes(item.id) ? "border-crimson bg-crimson/5" : "border-neutral-200"}`}>
                          <input type="checkbox" checked={addOns.includes(item.id)} onChange={() => toggleAddOn(item.id)} className="mt-0.5 h-4 w-4 accent-crimson" />
                          <span><span className="block text-xs font-bold text-charcoal">{item.label}</span><span className="text-[10px] font-semibold text-crimson">+ ₹{item.price.toLocaleString()}</span></span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase font-bold text-neutral-500">Special Requirements / Customization</label>
                    <textarea 
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Enter details like expected guest count, stage floral decoration, or guest suite stay requirements..."
                      className="w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:border-crimson resize-none"
                    />
                  </div>

                  {/* Price and payment */}
                  <div className="rounded-2xl border border-crimson/15 bg-crimson-light p-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson"><IndianRupee className="h-4 w-4" /> Estimated booking summary</div>
                    <div className="mt-3 grid gap-2 text-xs">
                      <div className="flex justify-between"><span className="text-charcoal/60">Package base price</span><span className="font-bold">₹{bookingPackage.price.toLocaleString()}</span></div>
                      <div className="flex justify-between"><span className="text-charcoal/60">Selected add-ons</span><span className="font-bold">₹{addOnTotal.toLocaleString()}</span></div>
                      <div className="flex justify-between border-t border-crimson/10 pt-2 text-sm"><span className="font-bold">Estimated total</span><span className="font-extrabold text-crimson">₹{bookingTotal.toLocaleString()}</span></div>
                      <div className="flex justify-between text-[10px]"><span className="text-charcoal/55">Suggested advance after confirmation (20%)</span><span className="font-bold">₹{suggestedAdvance.toLocaleString()}</span></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-neutral-500 flex items-center gap-2"><CreditCard className="h-4 w-4 text-crimson" /> Payment Preference</label>
                    <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 ${paymentMethod === "pay-at-venue" ? "border-crimson bg-crimson/5" : "border-neutral-200"}`}>
                      <input type="radio" name="payment" checked={paymentMethod === "pay-at-venue"} onChange={() => setPaymentMethod("pay-at-venue")} className="h-4 w-4 accent-crimson" />
                      <span><span className="block text-xs font-bold">Pay after confirmation</span><span className="text-[10px] text-charcoal/55">Cash, bank transfer or card at the booking desk</span></span>
                    </label>
                    <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 ${paymentMethod === "upi-advance" ? "border-crimson bg-crimson/5" : "border-neutral-200"}`}>
                      <input type="radio" name="payment" checked={paymentMethod === "upi-advance"} onChange={() => setPaymentMethod("upi-advance")} className="h-4 w-4 accent-crimson" />
                      <span><span className="block text-xs font-bold">UPI advance after availability check</span><span className="text-[10px] text-charcoal/55">The official payment link/QR is shared by the venue manager</span></span>
                    </label>
                  </div>

                  <div className="p-4 bg-gold/20 rounded-xl border border-gold/40 text-xs font-semibold text-charcoal flex items-start gap-2 leading-relaxed">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-crimson" />
                    <span>No payment is collected on this page. Submit the request first; pay only after availability, final quotation and official payment instructions are confirmed.</span>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-crimson hover:bg-crimson-dark text-white font-bold py-3.5 rounded-xl transition duration-150 text-sm shadow-sm flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <MessageCircle className="h-4 w-4" /> Review & Send Booking Request
                  </button>
                </form>
              ) : (
                <div className="py-5 space-y-5 max-w-md mx-auto">
                  <div className="mx-auto h-16 w-16 rounded-full bg-green/10 text-green flex items-center justify-center">
                    <Check className="h-10 w-10" />
                  </div>
                  <div className="text-center"><span className="rounded-full bg-crimson/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-crimson">Provisional request</span><h4 className="mt-3 font-heading text-3xl font-bold text-green">Reservation request ready</h4></div>
                  <p className="text-center text-neutral-500 text-xs leading-normal">
                    We have drafted a reservation query text and opened a WhatsApp window to connect you directly with the booking desk of Shri Ji Mandapam.
                  </p>
                  <div className="rounded-xl border border-crimson/10 bg-crimson-light p-4 text-xs">
                    <div className="flex justify-between border-b border-crimson/10 pb-2"><span className="text-charcoal/50">Package</span><span className="max-w-[60%] text-right font-bold">{bookingPackage.title}</span></div>
                    <div className="flex justify-between border-b border-crimson/10 py-2"><span className="text-charcoal/50">Event date</span><span className="font-bold">{clientDate}</span></div>
                    <div className="flex justify-between border-b border-crimson/10 py-2"><span className="text-charcoal/50">Estimated total</span><span className="font-bold text-crimson">₹{bookingTotal.toLocaleString()}</span></div>
                    <div className="flex justify-between pt-2"><span className="text-charcoal/50">Status</span><span className="font-bold text-crimson">Awaiting confirmation</span></div>
                  </div>
                  <div className="pt-2">
                    <button 
                      onClick={closeModal}
                      className="w-full bg-charcoal hover:bg-neutral-800 text-white font-bold py-2.5 rounded-xl text-xs transition duration-150"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Micro Reveal library helper for animations */}
      <script dangerouslySetInnerHTML={{__html: `
        // Check scroll elements
        const reveals = document.querySelectorAll('.Reveal');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, { threshold: 0.1 });
        reveals.forEach(r => observer.observe(r));
      `}} />

      <style jsx global>{`
        .Reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .Reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      
    </main>
  );
}
