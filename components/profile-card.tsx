import Image from "next/image";
import { MapPin, Briefcase, Heart, Calendar } from "lucide-react";
import { Profile } from "@/lib/matrimony-data";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 border border-neutral-100">
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Gender Badge */}
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm uppercase tracking-wider ${
          profile.gender === "bride" ? "bg-crimson" : "bg-blue-600"
        }`}>
          {profile.gender}
        </span>
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-2xl text-charcoal font-semibold">{profile.name}</h3>
          <span className="text-sm font-semibold text-crimson">{profile.age} Yrs · {profile.height}</span>
        </div>

        <div className="space-y-2 mt-2 flex-1 text-sm text-charcoal/70">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-gold shrink-0" />
            <span>{profile.profession}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold shrink-0" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gold shrink-0" />
            <span>{profile.religion} · {profile.language}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-5 w-full rounded-xl bg-crimson py-2.5 text-center text-sm font-bold text-white transition duration-200 hover:bg-crimson-dark flex items-center justify-center gap-2 shadow-sm">
          <Heart className="h-4 w-4 fill-current" />
          Connect Now
        </button>
      </div>
    </article>
  );
}
