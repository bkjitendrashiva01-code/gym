export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  content: string;
  likes: number;
  verified?: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  category: 'strength' | 'performance' | 'tech' | 'amenity';
}

export interface PopularTimeHour {
  hour: number;
  label: string;
  busyness: number; // 0 to 100
  statusText?: string;
}

export interface SocialPost {
  id: string;
  date: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  tag: string;
}

export interface VideoClip {
  id: string;
  duration: string;
  title: string;
  description: string;
  views: string;
  badge: string;
}

export const GYM_INFO = {
  name: "Gold's Gym Venice",
  nickname: "The Mecca of Bodybuilding",
  rating: 4.4,
  reviewCount: 1524,
  category: "Gym",
  address: "360 Hampton Dr, Venice, CA 90291, United States",
  street: "360 Hampton Dr",
  city: "Venice, CA 90291",
  country: "United States",
  phone: "+1 310-392-6004",
  phoneClean: "+13103926004",
  status: "Closed · Opens 5 am",
  standardHours: [
    { day: "Monday", hours: "5:00 AM – 11:00 PM" },
    { day: "Tuesday", hours: "5:00 AM – 11:00 PM" },
    { day: "Wednesday", hours: "5:00 AM – 11:00 PM" },
    { day: "Thursday", hours: "5:00 AM – 11:00 PM" },
    { day: "Friday", hours: "5:00 AM – 11:00 PM" },
    { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
    { day: "Sunday", hours: "7:00 AM – 9:00 PM" }
  ],
  description: "Legendary bodybuilding gym featuring extensive strength training equipment and an outdoor workout area.",
  peakHourDescription: "5 PM: Usually as busy as it gets",
  dwellTimeDescription: "People typically spend 1-2 hours here",
  entryPassPrice: 50,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gold's+Gym+Venice+360+Hampton+Dr+Venice+CA"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "personal-training",
    name: "Personal Training",
    tagline: "World-Class Pro Coaching",
    description: "Work one-on-one with elite IFBB pros, CSCS strength coaches, and master trainers tailored for hypertrophy, athletic conditioning, and competition prep.",
    highlights: ["Custom biomechanical periodization", "Body composition tracking", "Olympic and powerlifting mechanics"],
    category: "strength"
  },
  {
    id: "group-exercise",
    name: "Group Exercise",
    tagline: "High-Energy Athletic Classes",
    description: "Energetic instructor-led sessions covering strength circuits, mobility work, core conditioning, and functional hypertrophy.",
    highlights: ["Multiple daily time slots", "All fitness levels welcome", "Championship energy and music"],
    category: "performance"
  },
  {
    id: "group-cycle",
    name: "Group Cycle",
    tagline: "Power & Cadence Studio",
    description: "High-intensity studio cycling utilizing magnetic resistance bikes, heart rate metrics, and endurance climbing stages.",
    highlights: ["State-of-the-art Keiser bikes", "Performance tracking console", "High-cadence interval intervals"],
    category: "performance"
  },
  {
    id: "golds-3d",
    name: "GOLD'S 3D",
    tagline: "Precision Body Scanning",
    description: "Cutting-edge 3D full-body scanners creating an exact volumetric avatar, measuring lean muscle mass, postural symmetry, and fat distribution in 35 seconds.",
    highlights: ["Sub-millimeter circumference tracking", "Lean tissue vs fat analysis", "Visual body composition overlay"],
    category: "tech"
  },
  {
    id: "golds-amp",
    name: "GOLD'S AMP",
    tagline: "Digital Audio Coaching & Tracking",
    description: "Custom digital fitness platform with guided audio workouts, heart rate telemetry, curated training playlists, and workout logging.",
    highlights: ["Over 1,000 guided audio workouts", "BPM-synchronized workout music", "Cross-session progress analytics"],
    category: "tech"
  },
  {
    id: "bootcamp",
    name: "BOOTCAMP",
    tagline: "Venice Beach Athletic Conditioning",
    description: "Intense, military-inspired functional conditioning combining outdoor sandbag carries, sled pushes, kettlebells, and bodyweight intervals.",
    highlights: ["Indoor and outdoor yard rotations", "Metabolic conditioning circuits", "Team camaraderie"],
    category: "performance"
  },
  {
    id: "locker-rooms",
    name: "Locker Rooms & Saunas",
    tagline: "Full Amenity Recovery Zone",
    description: "Spacious executive locker rooms equipped with private showers, cedarwood dry saunas, digital lockers, clean restrooms, and vanity stations.",
    highlights: ["Shower & Restroom amenities", "Dry cedar sauna", "Towel service & grooming essentials"],
    category: "amenity"
  },
  {
    id: "cardio-equipment",
    name: "Cardio Equipment",
    tagline: "Cardio Mezzanine & Ocean Breeze",
    description: "Expansive cardio deck featuring StairMasters, Woodway curved treadmills, Concept2 rowers, ski ergs, and elliptical trainers with personal media.",
    highlights: ["Woodway non-motorized treadmills", "StairMaster Gauntlet rows", "Heart rate telemetry sync"],
    category: "performance"
  },
  {
    id: "resistance-free-weights",
    name: "Resistance Machines & Free Weights",
    tagline: "The Mecca Heavy Iron Pit",
    description: "The world's most comprehensive collection of heavy free weights with dumbbells up to 300 lbs, competition bench presses, squat racks, and rare vintage leverage machines.",
    highlights: ["Dumbbells up to 300 lbs", "Rogers Athletic & Arsenal Strength racks", "Outdoor covered yard stations"],
    category: "strength"
  }
];

export const POPULAR_TIMES_DATA: Record<string, { label: string; peak: string; hours: PopularTimeHour[] }> = {
  Mon: {
    label: "Monday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 25 },
      { hour: 6, label: "6 AM", busyness: 45 },
      { hour: 7, label: "7 AM", busyness: 60 },
      { hour: 8, label: "8 AM", busyness: 55 },
      { hour: 9, label: "9 AM", busyness: 50 },
      { hour: 10, label: "10 AM", busyness: 52 },
      { hour: 11, label: "11 AM", busyness: 58 },
      { hour: 12, label: "12 PM", busyness: 68 },
      { hour: 13, label: "1 PM", busyness: 62 },
      { hour: 14, label: "2 PM", busyness: 60 },
      { hour: 15, label: "3 PM", busyness: 72 },
      { hour: 16, label: "4 PM", busyness: 88 },
      { hour: 17, label: "5 PM", busyness: 100, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 95 },
      { hour: 19, label: "7 PM", busyness: 80 },
      { hour: 20, label: "8 PM", busyness: 62 },
      { hour: 21, label: "9 PM", busyness: 40 },
      { hour: 22, label: "10 PM", busyness: 20 }
    ]
  },
  Tue: {
    label: "Tuesday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 28 },
      { hour: 6, label: "6 AM", busyness: 48 },
      { hour: 7, label: "7 AM", busyness: 62 },
      { hour: 8, label: "8 AM", busyness: 56 },
      { hour: 9, label: "9 AM", busyness: 51 },
      { hour: 10, label: "10 AM", busyness: 54 },
      { hour: 11, label: "11 AM", busyness: 60 },
      { hour: 12, label: "12 PM", busyness: 70 },
      { hour: 13, label: "1 PM", busyness: 64 },
      { hour: 14, label: "2 PM", busyness: 62 },
      { hour: 15, label: "3 PM", busyness: 74 },
      { hour: 16, label: "4 PM", busyness: 86 },
      { hour: 17, label: "5 PM", busyness: 98, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 92 },
      { hour: 19, label: "7 PM", busyness: 78 },
      { hour: 20, label: "8 PM", busyness: 58 },
      { hour: 21, label: "9 PM", busyness: 38 },
      { hour: 22, label: "10 PM", busyness: 18 }
    ]
  },
  Wed: {
    label: "Wednesday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 30 },
      { hour: 6, label: "6 AM", busyness: 50 },
      { hour: 7, label: "7 AM", busyness: 64 },
      { hour: 8, label: "8 AM", busyness: 58 },
      { hour: 9, label: "9 AM", busyness: 53 },
      { hour: 10, label: "10 AM", busyness: 55 },
      { hour: 11, label: "11 AM", busyness: 62 },
      { hour: 12, label: "12 PM", busyness: 72 },
      { hour: 13, label: "1 PM", busyness: 66 },
      { hour: 14, label: "2 PM", busyness: 65 },
      { hour: 15, label: "3 PM", busyness: 78 },
      { hour: 16, label: "4 PM", busyness: 90 },
      { hour: 17, label: "5 PM", busyness: 100, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 94 },
      { hour: 19, label: "7 PM", busyness: 82 },
      { hour: 20, label: "8 PM", busyness: 60 },
      { hour: 21, label: "9 PM", busyness: 39 },
      { hour: 22, label: "10 PM", busyness: 19 }
    ]
  },
  Thu: {
    label: "Thursday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 26 },
      { hour: 6, label: "6 AM", busyness: 46 },
      { hour: 7, label: "7 AM", busyness: 60 },
      { hour: 8, label: "8 AM", busyness: 54 },
      { hour: 9, label: "9 AM", busyness: 50 },
      { hour: 10, label: "10 AM", busyness: 52 },
      { hour: 11, label: "11 AM", busyness: 59 },
      { hour: 12, label: "12 PM", busyness: 69 },
      { hour: 13, label: "1 PM", busyness: 63 },
      { hour: 14, label: "2 PM", busyness: 61 },
      { hour: 15, label: "3 PM", busyness: 73 },
      { hour: 16, label: "4 PM", busyness: 87 },
      { hour: 17, label: "5 PM", busyness: 97, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 90 },
      { hour: 19, label: "7 PM", busyness: 76 },
      { hour: 20, label: "8 PM", busyness: 56 },
      { hour: 21, label: "9 PM", busyness: 36 },
      { hour: 22, label: "10 PM", busyness: 18 }
    ]
  },
  Fri: {
    label: "Friday",
    peak: "4 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 25 },
      { hour: 6, label: "6 AM", busyness: 44 },
      { hour: 7, label: "7 AM", busyness: 58 },
      { hour: 8, label: "8 AM", busyness: 52 },
      { hour: 9, label: "9 AM", busyness: 49 },
      { hour: 10, label: "10 AM", busyness: 53 },
      { hour: 11, label: "11 AM", busyness: 64 },
      { hour: 12, label: "12 PM", busyness: 75 },
      { hour: 13, label: "1 PM", busyness: 72 },
      { hour: 14, label: "2 PM", busyness: 70 },
      { hour: 15, label: "3 PM", busyness: 82 },
      { hour: 16, label: "4 PM", busyness: 92, statusText: "Busy heading into the weekend" },
      { hour: 17, label: "5 PM", busyness: 88 },
      { hour: 18, label: "6 PM", busyness: 75 },
      { hour: 19, label: "7 PM", busyness: 62 },
      { hour: 20, label: "8 PM", busyness: 46 },
      { hour: 21, label: "9 PM", busyness: 30 },
      { hour: 22, label: "10 PM", busyness: 15 }
    ]
  },
  Sat: {
    label: "Saturday",
    peak: "11 AM",
    hours: [
      { hour: 7, label: "7 AM", busyness: 35 },
      { hour: 8, label: "8 AM", busyness: 55 },
      { hour: 9, label: "9 AM", busyness: 75 },
      { hour: 10, label: "10 AM", busyness: 90 },
      { hour: 11, label: "11 AM", busyness: 98, statusText: "Peak weekend morning energy" },
      { hour: 12, label: "12 PM", busyness: 92 },
      { hour: 13, label: "1 PM", busyness: 80 },
      { hour: 14, label: "2 PM", busyness: 72 },
      { hour: 15, label: "3 PM", busyness: 65 },
      { hour: 16, label: "4 PM", busyness: 58 },
      { hour: 17, label: "5 PM", busyness: 50 },
      { hour: 18, label: "6 PM", busyness: 42 },
      { hour: 19, label: "7 PM", busyness: 32 },
      { hour: 20, label: "8 PM", busyness: 20 }
    ]
  },
  Sun: {
    label: "Sunday",
    peak: "10 AM",
    hours: [
      { hour: 7, label: "7 AM", busyness: 30 },
      { hour: 8, label: "8 AM", busyness: 50 },
      { hour: 9, label: "9 AM", busyness: 72 },
      { hour: 10, label: "10 AM", busyness: 92, statusText: "Sunday pump & outdoor yard" },
      { hour: 11, label: "11 AM", busyness: 88 },
      { hour: 12, label: "12 PM", busyness: 80 },
      { hour: 13, label: "1 PM", busyness: 70 },
      { hour: 14, label: "2 PM", busyness: 60 },
      { hour: 15, label: "3 PM", busyness: 54 },
      { hour: 16, label: "4 PM", busyness: 48 },
      { hour: 17, label: "5 PM", busyness: 42 },
      { hour: 18, label: "6 PM", busyness: 36 },
      { hour: 19, label: "7 PM", busyness: 26 },
      { hour: 20, label: "8 PM", busyness: 18 }
    ]
  }
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Marcus Vance",
    rating: 5,
    date: "1 week ago",
    content: "Massive space inside and out, tons of equipment and weights, friendly staff. Truly the Mecca of bodybuilding. You feel the history the moment you step foot inside.",
    likes: 42,
    verified: true
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    rating: 5,
    date: "2 weeks ago",
    content: "The people, the energy, and the overall vibe are genuinely great and motivating. Everyone is there to work hard, whether they are a pro or a dedicated lifter. The outdoor yard on a sunny day is unmatched.",
    likes: 38,
    verified: true
  },
  {
    id: "rev-3",
    author: "David K.",
    rating: 4,
    date: "3 weeks ago",
    content: "Ok as a gymrat you must go there but a 50$ ticket entry is a very salty price. Still, if you appreciate lifting history and want to train where legends were forged, it's worth doing at least once. Equipment selection is insane.",
    likes: 95,
    verified: true
  },
  {
    id: "rev-4",
    author: "Terrence Hayes",
    rating: 5,
    date: "a month ago",
    content: "Dumbbells all the way up to 300 lbs! You literally won't find this anywhere else on earth. Staff was welcoming, locker room and showers were clean, and training outside under the Venice sun gave me the best pump of my life.",
    likes: 27,
    verified: true
  },
  {
    id: "rev-5",
    author: "Sophie Laurent",
    rating: 4,
    date: "2 months ago",
    content: "Gold's 3D scanner session was super insightful for tracking body fat and symmetry changes. Clean restrooms, high ceiling airflow, and group cycling has high-energy music. Iconic spot.",
    likes: 19,
    verified: true
  }
];

export const VIDEO_CLIPS: VideoClip[] = [
  {
    id: "clip-1",
    duration: "0:16",
    title: "Outdoor Yard & California Sunshine",
    description: "Athletes lifting in the famous open-air compound with squat racks and heavy iron under Venice skies.",
    views: "18.4K",
    badge: "The Yard"
  },
  {
    id: "clip-2",
    duration: "0:08",
    title: "Heavy Dumbbell Pit (Up to 300 lbs)",
    description: "The world's most legendary free weight rows, from 5 lbs dumbbells to colossal 300 lbs custom bells.",
    views: "42.1K",
    badge: "Free Weights"
  },
  {
    id: "clip-3",
    duration: "0:14",
    title: "Arsenal & Vintage Leverage Floor",
    description: "A tour of the primary selectorized machines, plate-loaded presses, and competition power racks.",
    views: "12.7K",
    badge: "Strength Room"
  },
  {
    id: "clip-4",
    duration: "0:08",
    title: "GOLD'S 3D Body Scan Lab & Recovery",
    description: "Rapid 35-second volumetric body composition scanning and executive locker room saunas.",
    views: "9.3K",
    badge: "Recovery & Tech"
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "sp-1",
    date: "October 4, 2026",
    timeAgo: "1 day ago",
    content: "Monday mornings hit different at 360 Hampton. Doors opened at 5:00 AM sharp and the energy on the outdoor yard has been electric all day. What are you training today?",
    likes: 1240,
    comments: 86,
    tag: "VeniceMecca"
  },
  {
    id: "sp-2",
    date: "October 2, 2026",
    timeAgo: "3 days ago",
    content: "Fresh drop in the strength room: 4 new custom plate-loaded chest and back pieces calibrated for maximum hypertrophy. Stop by the desk to test them out.",
    likes: 2108,
    comments: 134,
    tag: "EquipmentUpdate"
  },
  {
    id: "sp-3",
    date: "September 29, 2026",
    timeAgo: "6 days ago",
    content: "Planning your pilgrimage? Day passes are available at the front desk or book ahead online to skip the line. Restrooms, private showers, and full locker room amenities included.",
    likes: 980,
    comments: 45,
    tag: "DayPass"
  }
];

export const PASS_OPTIONS = [
  {
    id: "day-pass",
    title: "Venice Day Pass",
    price: 50,
    period: "single day entry",
    badge: "Most Popular for Visitors",
    description: "The iconic Venice pilgrimage. Complete full-day pass with no time limit.",
    features: [
      "Access to all indoor gym floors & weight rooms",
      "Full access to the iconic Outdoor Training Yard",
      "Dumbbells up to 300 lbs and calibrated plates",
      "Executive locker rooms, showers & saunas",
      "Cardio deck & stretching mezzanine",
      "Free high-speed member Wi-Fi"
    ]
  },
  {
    id: "week-pass",
    title: "7-Day Mecca Pass",
    price: 150,
    period: "consecutive 7 days",
    badge: "Best Value for Travellers",
    description: "Seven consecutive days of training at the world's most famous gym.",
    features: [
      "All Day Pass privileges for 7 continuous days",
      "Complimentary GOLD'S 3D initial body scan",
      "Access to all Group Exercise & Cycle classes",
      "Locker room, showers, saunas & towel service",
      "10% discount at the official Gold's Venice Pro Shop"
    ]
  },
  {
    id: "vip-membership",
    title: "VIP Gold Membership",
    price: 129,
    period: "monthly recurring",
    badge: "Resident & Dedicated Lifter",
    description: "Unlimited 365-day access with elite coaching perks and digital tools.",
    features: [
      "Unlimited access 7 days a week",
      "Monthly GOLD'S 3D progress scans & analytics",
      "Full GOLD'S AMP digital audio training app subscription",
      "Complimentary 60-min personal training onboarding session",
      "Guest passes (2 per month included)",
      "Priority equipment orientation"
    ]
  }
];
