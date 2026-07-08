import {
  Award,
  Bath,
  BedDouble,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Car,
  ChefHat,
  Dumbbell,
  Gem,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Martini,
  MessageCircle,
  Mountain,
  PartyPopper,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Waves,
  Wifi
} from "lucide-react";

export const hotel = {
  name: "Hotel B Anand",
  hindiName: "होटल बी आनंद",
  tagline: "Luxury Hotel · Restaurant · Premium Rooms",
  hindiTagline: "मनोना धाम के पास सर्वश्रेष्ठ होटल · प्रीमियम रेस्टोरेंट · लक्ज़री रूम्स",
  phone: "+91-7302755534",
  whatsapp: "917302755534",
  email: "info@hotelbanand.com",
  address: "Aonla - Shahabad Road, Behta Janu, Aonla, Bareilly District, Uttar Pradesh 243301, India",
  shortAddress: "Aonla, Bareilly, Uttar Pradesh",
  coordinates: { lat: 28.2855111, lng: 79.1497908 },
  baseUrl: "https://www.hotelbanand.com"
};

export const navItems = [
  { label: "Home", hi: "होम", href: "/" },
  { label: "Rooms", hi: "कमरे", href: "/#rooms" },
  { label: "Restaurant", hi: "रेस्टोरेंट", href: "/#restaurant" },
  { label: "Amenities", hi: "सुविधाएं", href: "/#amenities" },
  { label: "Gallery", hi: "गैलरी", href: "/#gallery" },
  { label: "Contact", hi: "संपर्क", href: "/#contact" }
];

export const images = {
  hero: "/hotel-b-anand-facade.png",
  palace: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
  lobby: "/lobby-reception-royal.png",
  suite: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
  bath: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1800&q=85",
  villa: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85",
  thali: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1800&q=85",
  spa: "/hotel-1.jpg",
  wedding: "/room-service-bed.jpg",
  banquet: "/luxury-lobby-chandelier.png",
  meeting: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85",
  bar: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1800&q=85",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1800&q=85",
  courtyardRoom: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1800&q=85",
  familySuite: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
  courtyardDining: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=85",
  frontDesk: "/front-desk-warm.png",
  reception: "/modern-reception.png",
  attraction: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85"
};

export const rooms = [
  {
    title: "AC Comfort Room",
    hi: "एसी कम्फर्ट रूम",
    price: "₹1,500",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=85",
    size: "280 sq ft",
    details: "A comfortable air-conditioned room with a cozy double bed, premium linen, attached clean bathroom, and high-speed Wi-Fi.",
    hiDetails: "डबल बेड, एयर कंडीशनिंग, अटैच्ड साफ़ बाथरूम और हाई-स्पीड वाई-फाई के साथ एक आरामदायक कमरा।",
    amenities: ["Air Conditioning", "Double Bed", "Room Service", "Hot Water"]
  },
  {
    title: "Deluxe Room",
    hi: "डीलक्स रूम",
    price: "₹2,000",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85",
    size: "350 sq ft",
    details: "A spacious deluxe room featuring a king-size bed, a comfortable sitting area, and premium in-room amenities.",
    hiDetails: "किंग-साइज़ बेड, आरामदायक बैठने की जगह और प्रीमियम इन-रूम सुविधाओं के साथ एक विशाल डीलक्स कमरा।",
    amenities: ["Air Conditioning", "King Bed", "Sitting Area", "Premium Linen"]
  },
  {
    title: "Premium Suite",
    hi: "प्रीमियम सुइट",
    price: "₹3,500",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=85",
    size: "480 sq ft",
    details: "Our finest stay offering maximum space, elegant furniture, plush bedding, and dedicated room service.",
    hiDetails: "अधिकतम स्थान, सुंदर फर्नीचर, शानदार बिस्तर और समर्पित रूम सर्विस प्रदान करने वाला हमारा सबसे बेहतरीन कमरा।",
    amenities: ["King Bed", "Premium Lounge", "24/7 Room Service", "Luxury Amenities"]
  }
];

export const villas = [
  {
    title: "Raj Mahal Pool Villa",
    hi: "राज महल पूल विला",
    image: images.pool,
    price: "₹9,200",
    text: "A poolside private stay with open resort views, outdoor lounging, personal service, and space for families."
  }
];

export const experiences = [
  { title: "Pure Veg Dining", hi: "शुद्ध शाकाहारी भोजन", icon: Utensils, image: images.dining, text: "A fresh pure-vegetarian restaurant serving local North Indian culinary delights daily." },
  { title: "Luxury Suites", hi: "लक्ज़री सुइट्स", icon: Sparkles, image: images.suite, text: "Indulge in our beautifully designed luxury suites with modern amenities, premium linens, and quiet comfort." },
  { title: "Pilgrim Comfort", hi: "तीर्थयात्रियों की सुविधा", icon: Landmark, image: images.attraction, text: "Just 2.5 km from Shree Khatu Shyam Ji Manona Dham. Free parking and rest options for pilgrims." }
];

export const diningVenues = [
  {
    title: "The Garden Restaurant",
    hi: "द गार्डन रेस्टोरेंट",
    image: images.dining,
    text: "Indulge in freshly prepared pure vegetarian Indian cuisine in a lush, relaxing environment.",
    timing: "All Day: 7:00 AM - 11:00 PM",
    highlights: ["Pure Vegetarian", "Pilgrim Specials", "Family Dining"]
  }
];

export const awards = [
  "Closest Premium Hotel to Manona Dham",
  "Premium Luxury Rooms & Suites",
  "100% Pure Vegetarian In-House Kitchen",
  "Guest Choice Award 4.8/5"
];

export const reviews = [
  { name: "Rahul Sharma", role: "Pilgrim", text: "Manona Dham mandir se bilkul paas hai. Rooms bohot clean the aur khana bilkul shuddh aur swadisht tha.", rating: 5 },
  { name: "Suman Verma", role: "Hotel Guest", text: "Humne yahan family stay booking ki thi. Rooms bohot comfortable hain aur staff ki service bohot acchi thi.", rating: 5 },
  { name: "Amit Singh", role: "Business Traveler", text: "Best stay option near Aonla. Courteous staff and great service quality.", rating: 5 }
];

export const offers = [
  { title: "Pilgrim Special Offer", hi: "तीर्थयात्री विशेष", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80", price: "Special Rates", text: "Enjoy budget-friendly rooms and early check-in options for Khatu Shyam Ji devotees." },
  { title: "Luxury Suite Package", hi: "लक्जरी सुइट पैकेज", image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80", price: "Custom Pricing", text: "Enjoy our finest suite stay with complimentary high-tea, premium lounge access, and customized dining." },
  { title: "Weekend Comfort Stay", hi: "वीकेंड कम्फर्ट स्टे", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", price: "from ₹1,400/night", text: "A relaxing weekend break with complimentary breakfast and 24-hour room service." },
  { title: "Pure Veg Dining Package", hi: "शुद्ध शाकाहारी थाली पैकेज", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80", price: "₹299 onwards", text: "Delicious North Indian Thali cooked fresh daily using organic local ingredients." },
  { title: "Pilgrim Group Booking", hi: "तीर्थयात्री समूह बुकिंग", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", price: "Group Discounts", text: "Special room rates, large parking slots, and customizable menus for pilgrim buses." },
  { title: "Premium Corporate Stay", hi: "प्रीमियम कॉर्पोरेट प्रवास", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", price: "Custom Package", text: "Host birthday parties, engagements, and corporate meetings in our green lawns." }
];

export const gallery = [
  "/room-service-bed.jpg",
  "/luxury-bathroom-suite.jpg",
  "/marble-rainshower.jpg",
  "/indoor-pool-garden.jpg",
  "/luxury-lap-pool.jpg",
  "/luxury-bar.png",
  "/modern-hotel-lounge.png",
  "/lounge-sunset.jpg"
];

export const galleryCategories = [
  { title: "Rooms & Comfort", slug: "rooms-comfort", image: images.suite, intro: "Clean, comfortable air-conditioned rooms featuring cozy beds and pristine bathrooms.", highlights: ["Air Conditioning", "King Beds", "24/7 Room Service", "Hot Water"] },
  { title: "Hotel Luxury & Suites", slug: "hotel-luxury", image: images.lobby, intro: "Premium hospitality amenities including 24/7 room service, lounge access, secure parking, and clean sanitization.", highlights: ["24/7 Front Desk", "Secure Parking", "Pure Veg Restaurant", "Free Wi-Fi"] },
  { title: "The Garden Restaurant", slug: "restaurant", image: images.dining, intro: "Shuddh Shakahari (Pure Veg) dining experience for families and visitor groups.", highlights: ["100% Pure Veg", "North Indian Specials", "Comfortable Seating", "Room Service"] }
];

export const attractions = [
  { title: "Manona Dham Shyam Ji Mandir", distance: "2.5 km (5-10 mins)", icon: Landmark, text: "Reverend pilgrim site for Khatu Shyam Ji devotees, easily accessible by auto or car." },
  { title: "Aonla Railway Station", distance: "3.5 km", icon: MapPin, text: "Local railway connections linking Bareilly and surrounding regions." },
  { title: "Bareilly Junction", distance: "28 km", icon: MapPin, text: "Major railway station connecting to major cities across North India." }
];

export const faqs = [
  { q: "How far is Hotel B Anand from Manona Dham?", hiQ: "होटल बी आनंद मनोना धाम से कितना दूर है?", a: "Hotel B Anand is just 2.5 km away from Shree Khatu Shyam Ji Manona Dham, taking around 5 to 10 minutes by auto or car.", hiA: "होटल बी आनंद श्री खाटू श्याम जी मनोना धाम से मात्र 2.5 किमी की दूरी पर है, जहां ऑटो या कार से लगभग 5 से 10 मिनट लगते हैं।" },
  { q: "Is the food served 100% pure vegetarian?", hiQ: "क्या भोजन 100% शुद्ध शाकाहारी है?", a: "Yes, our in-house restaurant serves 100% pure vegetarian Indian cuisine prepared in a strictly vegetarian kitchen.", hiA: "हाँ, हमारा इन-हाउस रेस्टोरेंट केवल शुद्ध शाकाहारी भोजन परोसता है जिसे पूर्ण रूप से शाकाहारी रसोई में ही तैयार किया जाता है।" },
  { q: "Do you have secure parking space for tourist buses?", hiQ: "क्या आपके पास पर्यटक बसों के लिए पार्किंग की जगह है?", a: "Yes, we provide spacious free secure parking inside our premises that easily accommodates multiple cars and large pilgrim buses.", hiA: "हाँ, हम अपने परिसर के अंदर विशाल निःशुल्क सुरक्षित पार्किंग प्रदान करते हैं जिसमें कारें और बड़ी तीर्थयात्री बसें आसानी से पार्क हो सकती हैं।" },
  { q: "What are the standard Check-in and Check-out timings?", hiQ: "चेक-इन और चेक-आउट का समय क्या है?", a: "Our standard check-in is at 12:00 PM and check-out is at 11:00 AM. Flexible timings are available for group bookings upon prior request.", hiA: "चेक-इन का समय दोपहर 12:00 बजे और चेक-out का समय सुबह 11:00 बजे है। पूर्व अनुरोध पर ग्रुप बुकिंग के लिए समय अनुकूल किया जा सकता है।" },
  { q: "What room amenities and luxury facilities are provided?", hiQ: "कमरे में क्या सुविधाएं और लक्ज़री सुविधाएं प्रदान की जाती हैं?", a: "Our luxury rooms feature high-speed Wi-Fi, air conditioning, smart TVs, premium toiletries, 24/7 room service, and secure parking.", hiA: "हमारे लक्ज़री कमरों में हाई-स्पीड वाई-फाई, एयर कंडीशनिंग, स्मार्ट टीवी, प्रीमियम टॉयलेटरीज़, 24/7 रूम सर्विस और सुरक्षित पार्किंग की सुविधा है।" },
  { q: "Do you assist in booking cabs/autos for Dham travel?", hiQ: "क्या आप धाम यात्रा के लिए ऑटो/कैब बुकिंग में सहायता करते हैं?", a: "Yes, our reception desk helps in arranging local auto rickshaws, cabs, and vans 24/7 for safe transit to Manona Dham and nearby stations.", hiA: "हाँ, हमारा रिसेप्शन डेस्क मनोना धाम और रेलवे स्टेशन जाने के लिए 24/7 स्थानीय ऑटो, कैब और वैन की बुकिंग में पूरी सहायता करता है।" }
];

export const pageContent = {
  about: { title: "A Welcoming Sanctuary Near Manona Dham", hi: "मनोना धाम के पास एक स्वागत योग्य विश्राम स्थल", eyebrow: "About", image: images.palace, intro: "Hotel B Anand in Aonla brings together comfortable rooms, a pure-veg restaurant, and premium guest services under one roof.", points: ["Comfortable AC rooms and suites", "Just 2.5 km from Manona Dham", "100% Pure Veg restaurant dining", "Luxury suites & premium room facilities", "Free secure parking for buses and cars"] },
  "rooms-suites": { title: "Comfortable Air-Conditioned Rooms", hi: "आरामदायक एसी कमरे", eyebrow: "Stay", image: images.suite, intro: "Choose from our neat, clean, and comfortable air-conditioned rooms designed to rest your spirit after a long journey.", points: ["Premium cozy bedding", "Reliable air cooling", "Attached modern bathrooms", "24/7 attentive room service", "High speed Wi-Fi access"] },
  "luxury-villas": { title: "Private Luxury Stays", hi: "निजी लक्ज़री प्रवास", eyebrow: "Villas", image: images.pool, intro: "Private accommodations with customized services perfect for hosting families or special guests.", points: ["Poolside stays", "Hosted dining menus", "Private service protocols", "Spacious layouts"] },
  dining: { title: "Pure Vegetarian Indian Dining", hi: "शुद्ध शाकाहारी भारतीय भोजन", eyebrow: "Dining", image: images.dining, intro: "Enjoy delicious, home-style pure-vegetarian Indian dishes prepared fresh daily inside our calm garden restaurant.", points: ["100% Pure Veg kitchen", "Traditional North Indian Thali", "Attentive family-style service", "Special pilgrim group menu setup", "24-hour in-room dining option"] },
  "spa-wellness": { title: "Wellness & Rest", hi: "कल्याण और विश्राम", eyebrow: "Wellness", image: images.spa, intro: "Relax and rejuvenate your senses during your spiritual journey with comfortable rest areas.", points: ["Peaceful room environment", "Healthy pure vegetarian food", "Relaxing garden walks"] },
  wedding: { title: "Premium Suite Luxury Stays", hi: "प्रीमियम लक्ज़री सुइट स्टे", eyebrow: "Luxury Stay", image: images.suite, intro: "Relax in our top-of-the-line luxury suites. Enjoy premium bedding, modern climate control, private balconies, and dedicated room service.", points: ["Complimentary welcome drinks", "Spacious luxury layout", "Attentive 24/7 room service", "Plush bedding and linens", "Free high-speed Wi-Fi"] },
  banquet: { title: "Hotel Amenities & Facilities", hi: "होटल की आधुनिक सुविधाएं", eyebrow: "Amenities", image: images.lobby, intro: "Our hotel offers an array of modern facilities designed for guest comfort, from a quiet reading lobby to secure large vehicle parking.", points: ["24-Hour reception support", "Secure tourist bus parking", "Shuddh Shakahari dining", "Daily house-keeping services", "Express check-in / check-out"] },
  meetings: { title: "Meetings & Social Gatherings", hi: "बैठकें और सामाजिक समारोह", eyebrow: "Meetings", image: images.meeting, intro: "Convenient event hosting with seating setups, support staff, and delicious dining options.", points: ["Configurable seating setup", "Attentive service personnel", "Custom lunch/dinner buffets", "Secure on-site parking"] },
  offers: { title: "Pilgrim & Stay Packages", hi: "तीर्थयात्री और स्टे पैकेज", eyebrow: "Offers", image: images.pool, intro: "Special custom offers designed to make your pilgrim stay or family celebration comfortable and budget-friendly.", points: ["Pilgrim special rates", "Early check-in on availability", "Customized luxury stay packages", "Dedicated coordinator support"] },
  experiences: { title: "Pilgrim & Local Experiences", hi: "तीर्थयात्री और स्थानीय अनुभव", eyebrow: "Experiences", image: images.attraction, intro: "We host pilgrim groups, wedding guests, and travelers with deep local hospitality and care.", points: ["Easy auto/car access to temple", "Secured night parking for buses", "Helpful 24/7 front desk", "Clean and fresh dining options"] },
  "nearby-attractions": { title: "Nearby Sacred Sites & Stations", hi: "नज़दीकी पवित्र स्थल और स्टेशन", eyebrow: "Location", image: images.attraction, intro: "Hotel B Anand is located conveniently on Aonla-Shahabad Road, offering quick transit to local destinations.", points: ["Khatu Shyam Ji Manona Dham", "Aonla Railway Station", "Bareilly District Junction", "Local markets & transport hubs"] },
  faq: { title: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न", eyebrow: "FAQ", image: images.lobby, intro: "Quick answers to help you plan your rooms, hotel stays, and pilgrim visits.", points: ["Manona Dham Proximity", "Pure Veg Dining", "Bus & Car Parking", "Luxury Room Bookings"] },
  contact: { title: "Connect With Our Desk", hi: "हमारे डेस्क से संपर्क करें", eyebrow: "Contact", image: images.hero, intro: "Feel free to reach out for room bookings, luxury suite pricing, or pilgrim group arrangements.", points: [hotel.phone, hotel.email, hotel.address, "WhatsApp Enquiry ready", "Google Maps directions"] },
  "book-now": { title: "Book Your Room", hi: "अपना कमरा बुक करें", eyebrow: "Reservations", image: images.suite, intro: "Submit your details or connect via WhatsApp to reserve your stay instantly.", points: ["Direct WhatsApp Booking", "Clear pricing structure", "Quick availability response", "Pilgrim group assistance"] }
};

export const policyPages = {
  privacy: { title: "Privacy Policy", hi: "गोपनीयता नीति", intro: "Hotel B Anand values and protects our guest information.", sections: ["We collect details necessary for booking validations and legal registration.", "Personal preferences are used solely to improve our hospitality services.", "Contact details are kept secure and never shared with third parties."] },
  terms: { title: "Terms & Conditions", hi: "नियम और शर्तें", intro: "Standard conditions to make bookings, event packages, and stays comfortable.", sections: ["Room availability is confirmed on a first-come, first-served basis.", "Room and group bookings require a prior advance deposit.", "Devotees and guests must submit valid government IDs during check-in."] }
};

export const amenityIcons = [Wifi, BedDouble, Bath, Car, CalendarDays, ChefHat, Leaf, Dumbbell, ShieldCheck, MessageCircle, Gem, Camera, Award, Star, Martini, MapPin];

export const blogPosts = [
  { title: "Finding the Best Luxury Hotel Near Manona Dham Aonla", slug: "luxury-hotel-near-manona-dham", tag: "Stay", image: images.suite, text: "A complete guide to finding premium AC rooms, modern luxury facilities, secure parking, and clean dining for your spiritual family trip." },
  { title: "Pilgrim Guide: Staying Near Khatu Shyam Ji Manona Dham", slug: "pilgrim-stay-guide", tag: "Travel", image: images.attraction, text: "Everything you need to know about darshan timings, transport, parking, and finding premium rooms." },
  { title: "The Joy of Shuddh Shakahari Dining on a Spiritual Journey", slug: "pure-veg-dining-benefits", tag: "Dining", image: images.dining, text: "Why freshly prepared pure-vegetarian meals are the perfect complement after visiting sacred shrines." }
];
