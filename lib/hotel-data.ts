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
  name: "Raj Garden Hotel",
  hindiName: "राज गार्डन होटल",
  tagline: "Hotel · Restaurant · Banquet Hall",
  hindiTagline: "मनोना धाम के पास सर्वश्रेष्ठ होटल · प्रीमियम रेस्टोरेंट · बैंक्वेट हॉल",
  phone: "+91-9760761033",
  whatsapp: "919760761033",
  email: "info@rajgardenaonla.com",
  address: "Aonla - Shahabad Road, Behta Janu, Aonla, Bareilly District, Uttar Pradesh 243301, India",
  shortAddress: "Aonla, Bareilly, Uttar Pradesh",
  coordinates: { lat: 28.2855111, lng: 79.1497908 },
  baseUrl: "https://www.rajgardenhotels.com"
};

export const navItems = [
  { label: "Home", hi: "होम", href: "/" },
  { label: "Rooms", hi: "कमरे", href: "/#rooms" },
  { label: "Restaurant", hi: "रेस्टोरेंट", href: "/#restaurant" },
  { label: "Banquet", hi: "बैंक्वेट", href: "/#banquet" },
  { label: "Gallery", hi: "गैलरी", href: "/#gallery" },
  { label: "Contact", hi: "संपर्क", href: "/#contact" }
];

export const images = {
  hero: "/wedding-hero.jpg",
  palace: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
  lobby: "/lobby-reception-royal.png",
  suite: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
  bath: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1800&q=85",
  villa: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85",
  thali: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1800&q=85",
  spa: "/hotel-1.jpg",
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85",
  banquet: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85",
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
  { title: "Banquet Lawns", hi: "बैंक्वेट लॉन्स", icon: PartyPopper, image: images.banquet, text: "Beautiful open-air green lawns and spaces perfect for weddings, anniversaries, and grand receptions." },
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
  "Top Rated Banquet Hall in Aonla",
  "100% Pure Vegetarian In-House Kitchen",
  "Guest Choice Award 4.8/5"
];

export const reviews = [
  { name: "Rahul Sharma", role: "Pilgrim", text: "Manona Dham mandir se bilkul paas hai. Rooms bohot clean the aur khana bilkul shuddh aur swadisht tha.", rating: 5 },
  { name: "Suman Verma", role: "Event Host", text: "Humne yahan se wedding ceremony organize ki thi. Lawn bohot accha hai aur parking ki koi problem nahi hui.", rating: 5 },
  { name: "Amit Singh", role: "Business Traveler", text: "Best stay option near Aonla. Courteous staff and great service quality.", rating: 5 }
];

export const offers = [
  { title: "Pilgrim Special Offer", hi: "तीर्थयात्री विशेष", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80", price: "Special Rates", text: "Enjoy budget-friendly rooms and early check-in options for Khatu Shyam Ji devotees." },
  { title: "Wedding Lawn Package", hi: "वेडिंग लॉन पैकेज", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", price: "Custom Pricing", text: "Complete venue setup, premium floral decor, ambient lighting, and vegetarian catering." },
  { title: "Weekend Comfort Stay", hi: "वीकेंड कम्फर्ट स्टे", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80", price: "from ₹1,400/night", text: "A relaxing weekend break with complimentary breakfast and 24-hour room service." },
  { title: "Pure Veg Dining Package", hi: "शुद्ध शाकाहारी थाली पैकेज", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80", price: "₹299 onwards", text: "Delicious North Indian Thali cooked fresh daily using organic local ingredients." },
  { title: "Pilgrim Group Booking", hi: "तीर्थयात्री समूह बुकिंग", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", price: "Group Discounts", text: "Special room rates, large parking slots, and customizable menus for pilgrim buses." },
  { title: "Event Venue Booking", hi: "बैंक्वेट समारोह बुकिंग", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80", price: "Custom Package", text: "Host birthday parties, engagements, and corporate meetings in our green lawns." }
];

export const gallery = [
  "/new-gallery-1.jpg",
  "/wedding-1.jpg",
  "/hotel-3.png",
  "/hotel-2.jpg",
  "/wedding-2.jpg",
  "/new-gallery-2.jpg",
  "/hotel-1.jpg",
  "/wedding-3.jpg",
  "/new-gallery-3.jpg",
  "/new-gallery-4.jpg",
  "/wedding-4.png",
  "/new-gallery-5.png",
  "/catering-1.jpg",
  "/catering-2.jpg",
  "/catering-3.jpg",
  "/catering-4.jpg"
];

export const galleryCategories = [
  { title: "Rooms & Comfort", slug: "rooms-comfort", image: images.suite, intro: "Clean, comfortable air-conditioned rooms featuring cozy beds and pristine bathrooms.", highlights: ["Air Conditioning", "King Beds", "24/7 Room Service", "Hot Water"] },
  { title: "Banquet & Events", slug: "banquet-events", image: images.wedding, intro: "Event lawns and decorated walkways ideal for marriages, receptions, and parties.", highlights: ["Wedding Lawn", "Fairy Lights", "Catering Support", "Stage Setup"] },
  { title: "The Garden Restaurant", slug: "restaurant", image: images.dining, intro: "Shuddh Shakahari (Pure Veg) dining experience for families and visitor groups.", highlights: ["100% Pure Veg", "North Indian Specials", "Comfortable Seating", "Room Service"] }
];

export const attractions = [
  { title: "Manona Dham Shyam Ji Mandir", distance: "2.5 km (5-10 mins)", icon: Landmark, text: "Reverend pilgrim site for Khatu Shyam Ji devotees, easily accessible by auto or car." },
  { title: "Aonla Railway Station", distance: "3.5 km", icon: MapPin, text: "Local railway connections linking Bareilly and surrounding regions." },
  { title: "Bareilly Junction", distance: "28 km", icon: MapPin, text: "Major railway station connecting to major cities across North India." }
];

export const faqs = [
  { q: "How far is Raj Garden Hotel from Manona Dham?", hiQ: "राज गार्डन होटल मनोना धाम से कितना दूर है?", a: "Raj Garden Hotel is just 2.5 km away from Shree Khatu Shyam Ji Manona Dham, taking around 5 to 10 minutes by auto or car.", hiA: "राज गार्डन होटल श्री खाटू श्याम जी मनोना धाम से मात्र 2.5 किमी की दूरी पर है, जहां ऑटो या कार से लगभग 5 से 10 मिनट लगते हैं।" },
  { q: "Is the food served 100% pure vegetarian?", hiQ: "क्या भोजन 100% शुद्ध शाकाहारी है?", a: "Yes, our in-house restaurant, The Garden, serves 100% pure vegetarian Indian cuisine prepared with fresh ingredients.", hiA: "हाँ, हमारा इन-हाउस रेस्टोरेंट, द गार्डन, ताजी सामग्री से तैयार 100% शुद्ध शाकाहारी भारतीय भोजन परोसता है।" },
  { q: "Do you have parking space for tourist buses?", hiQ: "क्या आपके पास पर्यटक बसों के लिए पार्किंग की जगह है?", a: "Yes, we provide spacious free parking inside our premises that easily accommodates cars, SUVs, and large pilgrim buses.", hiA: "हाँ, हम अपने परिसर के अंदर विशाल निःशुल्क पार्किंग प्रदान करते हैं जिसमें कार, एसयूवी और बड़ी बसें आसानी से खड़ी हो सकती हैं।" },
  { q: "Can we book the banquet lawns for marriages and events?", hiQ: "क्या हम शादियों और आयोजनों के लिए बैंक्वेट लॉन बुक कर सकते हैं?", a: "Yes, we offer multiple package configurations (Silver, Gold, Royal Grand) designed to cater to wedding receptions, engagements, and parties.", hiA: "हाँ, हम शादी के रिसेप्शन, सगाई और पार्टियों के लिए विशेष रूप से डिज़ाइन किए गए कई पैकेज (सिल्वर, गोल्ड, रॉयल ग्रैंड) प्रदान करते हैं।" }
];

export const pageContent = {
  about: { title: "A Welcoming Sanctuary Near Manona Dham", hi: "मनोना धाम के पास एक स्वागत योग्य विश्राम स्थल", eyebrow: "About", image: images.palace, intro: "Raj Garden Hotel in Aonla brings together comfortable rooms, a pure-veg restaurant, and grand event spaces under one roof.", points: ["Comfortable AC rooms and suites", "Just 2.5 km from Manona Dham", "100% Pure Veg restaurant dining", "Grand wedding lawns & banquet services", "Free secure parking for buses and cars"] },
  "rooms-suites": { title: "Comfortable Air-Conditioned Rooms", hi: "आरामदायक एसी कमरे", eyebrow: "Stay", image: images.suite, intro: "Choose from our neat, clean, and comfortable air-conditioned rooms designed to rest your spirit after a long journey.", points: ["Premium cozy bedding", "Reliable air cooling", "Attached modern bathrooms", "24/7 attentive room service", "High speed Wi-Fi access"] },
  "luxury-villas": { title: "Private Luxury Stays", hi: "निजी लक्ज़री प्रवास", eyebrow: "Villas", image: images.pool, intro: "Private accommodations with customized services perfect for hosting families or special guests.", points: ["Poolside stays", "Hosted dining menus", "Private service protocols", "Spacious layouts"] },
  dining: { title: "Pure Vegetarian Indian Dining", hi: "शुद्ध शाकाहारी भारतीय भोजन", eyebrow: "Dining", image: images.dining, intro: "Enjoy delicious, home-style pure-vegetarian Indian dishes prepared fresh daily inside our calm garden restaurant.", points: ["100% Pure Veg kitchen", "Traditional North Indian Thali", "Attentive family-style service", "Special pilgrim group menu setup", "24-hour in-room dining option"] },
  "spa-wellness": { title: "Wellness & Rest", hi: "कल्याण और विश्राम", eyebrow: "Wellness", image: images.spa, intro: "Relax and rejuvenate your senses during your spiritual journey with comfortable rest areas.", points: ["Peaceful room environment", "Healthy pure vegetarian food", "Relaxing garden walks"] },
  wedding: { title: "Grand Celebrations & Marriages", hi: "भव्य समारोह और विवाह", eyebrow: "Wedding", image: images.wedding, intro: "Make your wedding memorable with our grand garden lawns, beautiful floral decorations, atmospheric lighting, and full catering support.", points: ["Grand decorated lawn setup", "Stage and premium lights", "Delicious vegetarian feast", "Complimentary stay suites", "Ample parking for guests"] },
  banquet: { title: "Banquet Hall & Event Packages", hi: "बैंक्वेट हॉल और इवेंट पैकेज", eyebrow: "Banquet", image: images.banquet, intro: "We offer multiple event packages designed to match small gatherings or grand receptions of up to 500+ guests.", points: ["Lawn and stage configurations", "Premium decorative lighting", "Dedicated event coordination", "In-house custom catering", "Adequate parking space"] },
  meetings: { title: "Meetings & Social Gatherings", hi: "बैठकें और सामाजिक समारोह", eyebrow: "Meetings", image: images.meeting, intro: "Convenient event hosting with seating setups, support staff, and delicious dining options.", points: ["Configurable seating setup", "Attentive service personnel", "Custom lunch/dinner buffets", "Secure on-site parking"] },
  offers: { title: "Pilgrim & Event Packages", hi: "तीर्थयात्री और इवेंट पैकेज", eyebrow: "Offers", image: images.pool, intro: "Special custom offers designed to make your pilgrim stay or family celebration comfortable and budget-friendly.", points: ["Pilgrim special rates", "Early check-in on availability", "Customized wedding lawn deals", "Dedicated coordinator support"] },
  experiences: { title: "Pilgrim & Local Experiences", hi: "तीर्थयात्री और स्थानीय अनुभव", eyebrow: "Experiences", image: images.attraction, intro: "We host pilgrim groups, wedding guests, and travelers with deep local hospitality and care.", points: ["Easy auto/car access to temple", "Secured night parking for buses", "Helpful 24/7 front desk", "Clean and fresh dining options"] },
  "nearby-attractions": { title: "Nearby Sacred Sites & Stations", hi: "नज़दीकी पवित्र स्थल और स्टेशन", eyebrow: "Location", image: images.attraction, intro: "Raj Garden is located conveniently on Aonla-Shahabad Road, offering quick transit to local destinations.", points: ["Khatu Shyam Ji Manona Dham", "Aonla Railway Station", "Bareilly District Junction", "Local markets & transport hubs"] },
  faq: { title: "Frequently Asked Questions", hi: "अक्सर पूछे जाने वाले प्रश्न", eyebrow: "FAQ", image: images.lobby, intro: "Quick answers to help you plan your rooms, event lawn booking, and pilgrim stays.", points: ["Manona Dham Proximity", "Pure Veg Dining", "Bus & Car Parking", "Wedding Lawn Bookings"] },
  contact: { title: "Connect With Our Desk", hi: "हमारे डेस्क से संपर्क करें", eyebrow: "Contact", image: images.hero, intro: "Feel free to reach out for room bookings, wedding lawn pricing, or pilgrim group arrangements.", points: [hotel.phone, hotel.email, hotel.address, "WhatsApp Enquiry ready", "Google Maps directions"] },
  "book-now": { title: "Book Your Room", hi: "अपना कमरा बुक करें", eyebrow: "Reservations", image: images.suite, intro: "Submit your details or connect via WhatsApp to reserve your stay instantly.", points: ["Direct WhatsApp Booking", "Clear pricing structure", "Quick availability response", "Pilgrim group assistance"] }
};

export const policyPages = {
  privacy: { title: "Privacy Policy", hi: "गोपनीयता नीति", intro: "Raj Garden Hotel values and protects our guest information.", sections: ["We collect details necessary for booking validations and legal registration.", "Personal preferences are used solely to improve our hospitality services.", "Contact details are kept secure and never shared with third parties."] },
  terms: { title: "Terms & Conditions", hi: "नियम और शर्तें", intro: "Standard conditions to make bookings, event packages, and stays comfortable.", sections: ["Room availability is confirmed on a first-come, first-served basis.", "Events and banquet bookings require a prior advance deposit.", "Devotees and guests must submit valid government IDs during check-in."] }
};

export const amenityIcons = [Wifi, BedDouble, Bath, Car, CalendarDays, ChefHat, Leaf, Dumbbell, ShieldCheck, MessageCircle, Gem, Camera, Award, Star, Martini, MapPin];

export const blogPosts = [
  { title: "How to Plan a Wedding Near Manona Dham Aonla", slug: "plan-wedding-aonla", tag: "Wedding", image: images.wedding, text: "A practical guide to lawn setups, guest rooms, catering, and evening reception lights at Raj Garden." },
  { title: "Pilgrim Guide: Staying Near Khatu Shyam Ji Manona Dham", slug: "pilgrim-stay-guide", tag: "Travel", image: images.attraction, text: "Everything you need to know about darshan timings, transport, parking, and finding premium rooms." },
  { title: "The Joy of Shuddh Shakahari Dining on a Spiritual Journey", slug: "pure-veg-dining-benefits", tag: "Dining", image: images.dining, text: "Why freshly prepared pure-vegetarian meals are the perfect complement after visiting sacred shrines." }
];
