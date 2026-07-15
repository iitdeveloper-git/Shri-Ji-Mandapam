import Image from "next/image";
import { Bath, BedDouble, Car, Check, SlidersHorizontal, Star, Users, Wifi } from "lucide-react";
import { rooms } from "@/lib/hotel-data";

const filters = {
  Destinations: ["Aonla", "Bareilly", "Manona Dham"],
  Rating: ["5 Star", "4 Star", "Guest Choice"],
  Budget: ["₹15,000 - ₹25,000", "₹25,000 - ₹50,000", "Above ₹50,000"],
  Amenities: ["Breakfast", "Free Parking", "Airport Pickup", "Spa Access"]
};

export function StayCategoryStrip() {
  const items = [
    { label: "All", icon: BedDouble },
    { label: "Lakefront", icon: Bath },
    { label: "Suites", icon: Star },
    { label: "Villas", icon: Users },
    { label: "Parking", icon: Car },
    { label: "Wi-Fi", icon: Wifi }
  ];

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {items.map((item, index) => (
        <div key={item.label} className={`grid min-w-24 place-items-center gap-2 rounded-[14px] px-4 py-3 text-center text-xs font-semibold ${index === 0 ? "bg-green text-white" : "soft-pill"}`}>
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </div>
      ))}
      <div className="ml-auto hidden min-w-28 items-center justify-center gap-2 rounded-[14px] bg-charcoal px-4 py-3 text-xs font-bold text-white md:flex">
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </div>
    </div>
  );
}

export function HotelListingSection() {
  return (
    <section className="section-y bg-crimson-light">
      <div className="luxury-container">
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Available Stays</p>
            <h2 className="mt-2 font-heading text-4xl text-green md:text-5xl">Top-rated stays at Hotel B Anand</h2>
          </div>
          <button className="w-fit rounded-full border border-green/15 bg-white px-4 py-2 text-xs font-bold text-green shadow-soft">Sort by highest rating</button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
          <aside className="hidden rounded-[18px] bg-white p-5 shadow-soft lg:block">
            <p className="mb-5 font-bold text-charcoal">Filter by</p>
            {Object.entries(filters).map(([group, values]) => (
              <div key={group} className="border-t border-champagne py-5 first:border-t-0 first:pt-0">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-green">{group}</p>
                <div className="grid gap-3">
                  {values.map((value, index) => (
                    <label key={value} className="flex items-center gap-2 text-sm text-charcoal/68">
                      <span className={`grid h-4 w-4 place-items-center rounded border ${index === 0 ? "border-green bg-green text-white" : "border-charcoal/20"}`}>
                        {index === 0 ? <Check className="h-3 w-3" /> : null}
                      </span>
                      {value}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          <div className="grid gap-4">
            {rooms.map((room) => (
              <article key={room.title} className="compact-card grid overflow-hidden rounded-[18px] md:grid-cols-[260px_1fr_150px]">
                <div className="relative min-h-56 md:min-h-full">
                  <Image src={room.image} alt={room.title} fill sizes="260px" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-3xl text-green">{room.title}</h3>
                  <p className="text-sm font-semibold text-gold">Hotel B Anand, Aonla, Bareilly</p>
                  <p className="mt-3 text-sm leading-6 text-charcoal/65">{room.details}</p>
                  <p className="mt-4 text-sm font-bold text-charcoal">Amenities</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((item) => (
                      <span key={item} className="rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-green">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between border-t border-champagne p-5 md:flex-col md:items-start md:border-l md:border-t-0">
                  <div>
                    <p className="text-xs text-charcoal/45">Starts from</p>
                    <p className="text-xl font-black text-green">{room.price}</p>
                    <div className="mt-2 flex text-gold">
                      {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                  </div>
                  <button className="rounded-full bg-green px-4 py-2 text-xs font-bold text-white">View Details</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
