export interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  religion: string;
  language: string;
  location: string;
  profession: string;
  image: string;
  gender: "bride" | "groom";
}

export interface SuccessStory {
  id: string;
  names: string;
  date: string;
  title: string;
  text: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const featuredProfiles: Profile[] = [
  {
    id: "p1",
    name: "Priya Sharma",
    age: 26,
    height: "5'4\"",
    religion: "Hindu",
    language: "Hindi",
    location: "Delhi, India",
    profession: "Software Engineer",
    image: "/wedding-1.jpg",
    gender: "bride",
  },
  {
    id: "p2",
    name: "Rahul Verma",
    age: 28,
    height: "5'11\"",
    religion: "Hindu",
    language: "Hindi",
    location: "Mumbai, India",
    profession: "Product Manager",
    image: "/wedding-2.jpg",
    gender: "groom",
  },
  {
    id: "p3",
    name: "Ananya Iyer",
    age: 25,
    height: "5'3\"",
    religion: "Hindu",
    language: "Tamil",
    location: "Bangalore, India",
    profession: "Data Scientist",
    image: "/wedding-4.png",
    gender: "bride",
  },
  {
    id: "p4",
    name: "Amit Patel",
    age: 29,
    height: "5'9\"",
    religion: "Hindu",
    language: "Gujarati",
    location: "Ahmedabad, India",
    profession: "Chartered Accountant",
    image: "/wedding-3.jpg",
    gender: "groom",
  },
];

export const successStories: SuccessStory[] = [
  {
    id: "s1",
    names: "Vikram & Neha",
    date: "June 15, 2025",
    title: "She Said Yes!",
    text: "We connected through Best Matrimony. From the first chat, we knew there was a special connection. Our families met soon after, and today we are happily married. Thank you for bringing us together!",
    image: "/wedding-3.jpg",
  },
  {
    id: "s2",
    names: "Rohan & Sneha",
    date: "December 24, 2025",
    title: "A Match Made in Heaven",
    text: "Finding a life partner who shares the same values was my priority. The detailed profiles and matchmaking filters made it incredibly easy to find Sneha. We tied the knot in a beautiful winter ceremony.",
    image: "/wedding-4.png",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", url: "/wedding_hall_chandeliers.jpg", caption: "Grand Chandeliers Hall" },
  { id: "g2", url: "/wedding_mandap_canopy.jpg", caption: "Flower Canopy Mandap" },
  { id: "g3", url: "/wedding_stage_fireworks.png", caption: "Royal Stage Fireworks" },
  { id: "g4", url: "/wedding_couple_dance.png", caption: "Couple Celebration" },
  { id: "g5", url: "/wedding_night_entry.jpg", caption: "Magical Light Entryway" },
  { id: "g6", url: "/catering_setup_lawn.jpg", caption: "Lawn Catering Setup" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Aarav Mehta",
    role: "Chief Matchmaker",
    image: "/wedding_hall_chandeliers.jpg",
  },
  {
    id: "t2",
    name: "Meera Sen",
    role: "Relationship Manager",
    image: "/wedding_mandap_canopy.jpg",
  },
  {
    id: "t3",
    name: "Karan Johar",
    role: "Event & Wedding Coordinator",
    image: "/wedding_couple_dance.png",
  },
  {
    id: "t4",
    name: "Shalini Roy",
    role: "Family Consultant",
    image: "/wedding_night_entry.jpg",
  },
];
