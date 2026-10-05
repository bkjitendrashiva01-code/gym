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
  category: 'cardio-strength' | 'spa-recovery' | 'coaching' | 'amenity';
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
  name: "Planet Fitness",
  nickname: "The Judgement Free Zone®",
  tagline: "Large low-cost fitness chain with many locations across the U.S.",
  rating: 4.4,
  reviewCount: 1524,
  category: "Fitness Club & Gym",
  address: "4 Liberty Lane West, Hampton, NH 03842",
  street: "4 Liberty Lane West",
  city: "Hampton, NH 03842",
  state: "New Hampshire",
  country: "United States",
  phone: "+1 603-750-0001",
  phoneClean: "+16037500001",
  telephone: "+1 603-750-0001",
  telephoneClean: "+16037500001",
  mobile: "+1 603-750-0002",
  mobileClean: "+16037500002",
  email: "investor@planetfitness.com",
  status: "Open 24 Hours · Welcoming All Fitness Levels",
  standardHours: [
    { day: "Monday", hours: "Open 24 Hours (from 5:00 AM)" },
    { day: "Tuesday", hours: "Open 24 Hours" },
    { day: "Wednesday", hours: "Open 24 Hours" },
    { day: "Thursday", hours: "Open 24 Hours" },
    { day: "Friday", hours: "Open until 10:00 PM" },
    { day: "Saturday", hours: "7:00 AM – 7:00 PM" },
    { day: "Sunday", hours: "7:00 AM – 7:00 PM" }
  ],
  description: "Large low-cost fitness chain with many locations across the U.S. Clean, spacious workout environment with tons of cardio, strength equipment, Black Card Spa®, and certified fitness training.",
  peakHourDescription: "5 PM: Usually as busy as it gets (Check the PF Crowd Meter)",
  dwellTimeDescription: "Members typically spend 45-90 minutes here",
  entryPassPrice: 10,
  blackCardPrice: 24.99,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Planet+Fitness+4+Liberty+Lane+West+Hampton+NH+03842"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "pe-pf-training",
    name: "Free Fitness Training (PE@PF)",
    tagline: "Certified Trainer Sessions Included",
    description: "Every membership includes free, small-group fitness sessions led by certified trainers. Learn equipment setup, design custom workout plans, and stay accountable.",
    highlights: ["Orientation & machine guidance", "Targeted core and upper/lower body classes", "Zero added cost with any membership"],
    category: "coaching"
  },
  {
    id: "express-30-circuit",
    name: "30-Minute Express Circuit",
    tagline: "Full-Body Strength & Cardio Combo",
    description: "A timed 10-station strength and 10-step cardio circuit with traffic-light pacing (red light / green light) that delivers a full-body workout in just 30 minutes.",
    highlights: ["Red/green indicator light system", "Cardio steps alternating with hydraulic strength", "Quick in-and-out complete workout"],
    category: "cardio-strength"
  },
  {
    id: "black-card-spa",
    name: "PF Black Card Spa®",
    tagline: "Premium Relaxation & Recovery",
    description: "Exclusive to PF Black Card® members. Enjoy therapeutic HydroMassage® water beds, Total Body Enhancement red light booths, and zero-gravity massage loungers.",
    highlights: ["HydroMassage® heated water jet beds", "Total Body Enhancement Beauty Angel booth", "Relaxation massage chairs"],
    category: "spa-recovery"
  },
  {
    id: "cardio-equipment",
    name: "Massive Cardio Floor",
    tagline: "Never Wait for a Treadmill",
    description: "Hundreds of cardio machines equipped with personal TV monitors and heart rate grips: treadmills, ellipticals, Arc trainers, stair climbers, and stationary bikes.",
    highlights: ["Individual TV screens and audio sync", "Treadmills, rowers, and recumbent bikes", "High-ceiling air filtration"],
    category: "cardio-strength"
  },
  {
    id: "strength-free-weights",
    name: "Strength Machines & Dumbbells",
    tagline: "User-Friendly Guided Resistance",
    description: "Full circuit of pin-selectorized Matrix and Life Fitness machines with easy instructional diagrams, plus a dedicated dumbbell area ranging up to 75 lbs.",
    highlights: ["Selectorized weight stacks with diagram guides", "Dumbbells up to 75 lbs with benches", "Smith machines & cable towers"],
    category: "cardio-strength"
  },
  {
    id: "pf-crowd-meter",
    name: "PF Crowd Meter & App",
    tagline: "Live Capacity & Mobile Workouts",
    description: "Check live club busyness before leaving home using the official PF App Crowd Meter. Access hundreds of on-demand digital workouts and track your visits.",
    highlights: ["Real-time club crowd capacity meter", "Hundreds of trainer-led digital videos", "Keyless digital barcode check-in"],
    category: "amenity"
  },
  {
    id: "bring-a-guest",
    name: "Bring a Guest Anytime",
    tagline: "Unlimited Black Card® Guest Privileges",
    description: "Black Card® members can bring any workout buddy with them every single visit at no extra charge. Work out together whenever you want.",
    highlights: ["Unlimited guest visits", "Guest access to entire gym floor", "Easy guest mobile check-in"],
    category: "amenity"
  },
  {
    id: "locker-rooms",
    name: "Spotless Locker Rooms & Showers",
    tagline: "Always Clean & Fresh",
    description: "Immaculate day-use lockers, private showers with hot water, clean restrooms, full-length dressing mirrors, and blow-dryer vanity stations.",
    highlights: ["Private shower stalls with changing nooks", "Spacious day-use lockers", "Restrooms disinfected round-the-clock"],
    category: "amenity"
  },
  {
    id: "beverage-perks",
    name: "Drink Perks & Nationwide Access",
    tagline: "Use Any of 2,500+ Clubs Across U.S.",
    description: "Black Card® members receive 50% off select cold bottled drinks and can use any Planet Fitness location across all 50 states and international clubs.",
    highlights: ["Access to 2,500+ locations nationwide", "50% off select cooler beverages", "Partner discounts (Reebok, hotel perks)"],
    category: "spa-recovery"
  }
];

export const POPULAR_TIMES_DATA: Record<string, { label: string; peak: string; hours: PopularTimeHour[] }> = {
  Mon: {
    label: "Monday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 22 },
      { hour: 6, label: "6 AM", busyness: 42 },
      { hour: 7, label: "7 AM", busyness: 52 },
      { hour: 8, label: "8 AM", busyness: 48 },
      { hour: 9, label: "9 AM", busyness: 44 },
      { hour: 10, label: "10 AM", busyness: 46 },
      { hour: 11, label: "11 AM", busyness: 52 },
      { hour: 12, label: "12 PM", busyness: 60 },
      { hour: 13, label: "1 PM", busyness: 54 },
      { hour: 14, label: "2 PM", busyness: 50 },
      { hour: 15, label: "3 PM", busyness: 64 },
      { hour: 16, label: "4 PM", busyness: 82 },
      { hour: 17, label: "5 PM", busyness: 96, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 88 },
      { hour: 19, label: "7 PM", busyness: 72 },
      { hour: 20, label: "8 PM", busyness: 54 },
      { hour: 21, label: "9 PM", busyness: 36 },
      { hour: 22, label: "10 PM", busyness: 18 }
    ]
  },
  Tue: {
    label: "Tuesday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 24 },
      { hour: 6, label: "6 AM", busyness: 44 },
      { hour: 7, label: "7 AM", busyness: 54 },
      { hour: 8, label: "8 AM", busyness: 48 },
      { hour: 9, label: "9 AM", busyness: 45 },
      { hour: 10, label: "10 AM", busyness: 47 },
      { hour: 11, label: "11 AM", busyness: 53 },
      { hour: 12, label: "12 PM", busyness: 62 },
      { hour: 13, label: "1 PM", busyness: 55 },
      { hour: 14, label: "2 PM", busyness: 52 },
      { hour: 15, label: "3 PM", busyness: 66 },
      { hour: 16, label: "4 PM", busyness: 84 },
      { hour: 17, label: "5 PM", busyness: 95, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 86 },
      { hour: 19, label: "7 PM", busyness: 70 },
      { hour: 20, label: "8 PM", busyness: 52 },
      { hour: 21, label: "9 PM", busyness: 34 },
      { hour: 22, label: "10 PM", busyness: 16 }
    ]
  },
  Wed: {
    label: "Wednesday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 26 },
      { hour: 6, label: "6 AM", busyness: 46 },
      { hour: 7, label: "7 AM", busyness: 56 },
      { hour: 8, label: "8 AM", busyness: 50 },
      { hour: 9, label: "9 AM", busyness: 46 },
      { hour: 10, label: "10 AM", busyness: 48 },
      { hour: 11, label: "11 AM", busyness: 55 },
      { hour: 12, label: "12 PM", busyness: 64 },
      { hour: 13, label: "1 PM", busyness: 57 },
      { hour: 14, label: "2 PM", busyness: 54 },
      { hour: 15, label: "3 PM", busyness: 68 },
      { hour: 16, label: "4 PM", busyness: 86 },
      { hour: 17, label: "5 PM", busyness: 98, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 88 },
      { hour: 19, label: "7 PM", busyness: 72 },
      { hour: 20, label: "8 PM", busyness: 54 },
      { hour: 21, label: "9 PM", busyness: 35 },
      { hour: 22, label: "10 PM", busyness: 17 }
    ]
  },
  Thu: {
    label: "Thursday",
    peak: "5 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 23 },
      { hour: 6, label: "6 AM", busyness: 43 },
      { hour: 7, label: "7 AM", busyness: 53 },
      { hour: 8, label: "8 AM", busyness: 47 },
      { hour: 9, label: "9 AM", busyness: 44 },
      { hour: 10, label: "10 AM", busyness: 46 },
      { hour: 11, label: "11 AM", busyness: 52 },
      { hour: 12, label: "12 PM", busyness: 61 },
      { hour: 13, label: "1 PM", busyness: 54 },
      { hour: 14, label: "2 PM", busyness: 51 },
      { hour: 15, label: "3 PM", busyness: 65 },
      { hour: 16, label: "4 PM", busyness: 83 },
      { hour: 17, label: "5 PM", busyness: 94, statusText: "Usually as busy as it gets" },
      { hour: 18, label: "6 PM", busyness: 84 },
      { hour: 19, label: "7 PM", busyness: 68 },
      { hour: 20, label: "8 PM", busyness: 50 },
      { hour: 21, label: "9 PM", busyness: 32 },
      { hour: 22, label: "10 PM", busyness: 16 }
    ]
  },
  Fri: {
    label: "Friday",
    peak: "4 PM",
    hours: [
      { hour: 5, label: "5 AM", busyness: 22 },
      { hour: 6, label: "6 AM", busyness: 40 },
      { hour: 7, label: "7 AM", busyness: 50 },
      { hour: 8, label: "8 AM", busyness: 44 },
      { hour: 9, label: "9 AM", busyness: 42 },
      { hour: 10, label: "10 AM", busyness: 45 },
      { hour: 11, label: "11 AM", busyness: 56 },
      { hour: 12, label: "12 PM", busyness: 65 },
      { hour: 13, label: "1 PM", busyness: 60 },
      { hour: 14, label: "2 PM", busyness: 58 },
      { hour: 15, label: "3 PM", busyness: 72 },
      { hour: 16, label: "4 PM", busyness: 82, statusText: "Busy heading into weekend" },
      { hour: 17, label: "5 PM", busyness: 78 },
      { hour: 18, label: "6 PM", busyness: 65 },
      { hour: 19, label: "7 PM", busyness: 52 },
      { hour: 20, label: "8 PM", busyness: 38 },
      { hour: 21, label: "9 PM", busyness: 24 },
      { hour: 22, label: "10 PM", busyness: 14 }
    ]
  },
  Sat: {
    label: "Saturday",
    peak: "10 AM",
    hours: [
      { hour: 7, label: "7 AM", busyness: 30 },
      { hour: 8, label: "8 AM", busyness: 50 },
      { hour: 9, label: "9 AM", busyness: 70 },
      { hour: 10, label: "10 AM", busyness: 88, statusText: "Peak weekend morning" },
      { hour: 11, label: "11 AM", busyness: 82 },
      { hour: 12, label: "12 PM", busyness: 72 },
      { hour: 13, label: "1 PM", busyness: 60 },
      { hour: 14, label: "2 PM", busyness: 52 },
      { hour: 15, label: "3 PM", busyness: 46 },
      { hour: 16, label: "4 PM", busyness: 40 },
      { hour: 17, label: "5 PM", busyness: 34 },
      { hour: 18, label: "6 PM", busyness: 26 },
      { hour: 19, label: "7 PM", busyness: 15 }
    ]
  },
  Sun: {
    label: "Sunday",
    peak: "11 AM",
    hours: [
      { hour: 7, label: "7 AM", busyness: 25 },
      { hour: 8, label: "8 AM", busyness: 44 },
      { hour: 9, label: "9 AM", busyness: 65 },
      { hour: 10, label: "10 AM", busyness: 82 },
      { hour: 11, label: "11 AM", busyness: 86, statusText: "Sunday workout rush" },
      { hour: 12, label: "12 PM", busyness: 75 },
      { hour: 13, label: "1 PM", busyness: 62 },
      { hour: 14, label: "2 PM", busyness: 50 },
      { hour: 15, label: "3 PM", busyness: 44 },
      { hour: 16, label: "4 PM", busyness: 38 },
      { hour: 17, label: "5 PM", busyness: 32 },
      { hour: 18, label: "6 PM", busyness: 24 },
      { hour: 19, label: "7 PM", busyness: 14 }
    ]
  }
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Jessica Miller",
    rating: 5,
    date: "1 week ago",
    content: "Massive space inside and out, tons of cardio machines and weights, friendly staff. Truly a judgement-free environment. Cleanest gym I've belonged to in New England.",
    likes: 42,
    verified: true
  },
  {
    id: "rev-2",
    author: "Danielle Gagnon",
    rating: 5,
    date: "2 weeks ago",
    content: "The people, the energy, and the overall vibe are genuinely great and motivating. HydroMassage beds in the Black Card lounge are worth the membership alone!",
    likes: 38,
    verified: true
  },
  {
    id: "rev-3",
    author: "Brendan Sullivan",
    rating: 4,
    date: "3 weeks ago",
    content: "For a low-cost gym, you get an incredible amount of value. 30-minute circuit is super convenient on busy days, and the Hampton NH club is always spotless.",
    likes: 95,
    verified: true
  },
  {
    id: "rev-4",
    author: "Ashley Thompson",
    rating: 5,
    date: "a month ago",
    content: "No intimidating lifters staring at you, lots of treadmills with personal TVs, and great shower facilities. The PF app crowd meter makes it so easy to plan visits.",
    likes: 27,
    verified: true
  },
  {
    id: "rev-5",
    author: "Michael R.",
    rating: 4,
    date: "2 months ago",
    content: "Hampton club is great. Easy parking right in front on Liberty Lane West, staff always greets you with a smile, and PE@PF trainers help you set up machines.",
    likes: 19,
    verified: true
  }
];

export const VIDEO_CLIPS: VideoClip[] = [
  {
    id: "clip-1",
    duration: "0:16",
    title: "30-Minute Express Workout Circuit",
    description: "Watch how our timed red-light green-light circuit provides a complete strength and cardio workout in 30 minutes.",
    views: "24.6K",
    badge: "Express Circuit"
  },
  {
    id: "clip-2",
    duration: "0:08",
    title: "PF Black Card Spa® HydroMassage",
    description: "Experience the heated water massage beds and zero-gravity recovery loungers exclusive to Black Card members.",
    views: "53.2K",
    badge: "Black Card Spa"
  },
  {
    id: "clip-3",
    duration: "0:14",
    title: "Spacious Cardio & Strength Floor",
    description: "Explore rows of treadmills, stair climbers, ellipticals, and easy-to-use pin-selectorized strength machines.",
    views: "18.9K",
    badge: "Gym Floor"
  },
  {
    id: "clip-4",
    duration: "0:08",
    title: "Spotless Showers, Lockers & Amenities",
    description: "Take a peek at our clean, sanitized locker rooms, private shower stalls, and dressing vanities.",
    views: "14.1K",
    badge: "Clean Facilities"
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "sp-1",
    date: "October 4, 2026",
    timeAgo: "1 day ago",
    content: "Monday workout motivation at 4 Liberty Lane West! Whether you're doing 20 minutes on the treadmill or the 30-minute express circuit, you're crushing it today in the Judgement Free Zone®.",
    likes: 1420,
    comments: 64,
    tag: "JudgementFreeZone"
  },
  {
    id: "sp-2",
    date: "October 2, 2026",
    timeAgo: "3 days ago",
    content: "Did you know PE@PF trainer-led sessions are 100% free with all memberships? Stop by the front desk in Hampton to sign up for your free personalized fitness plan this week!",
    likes: 2415,
    comments: 112,
    tag: "FreeFitnessTraining"
  },
  {
    id: "sp-3",
    date: "September 29, 2026",
    timeAgo: "6 days ago",
    content: "Upgrade to the PF Black Card® this month to unlock unlimited HydroMassage®, Total Body Enhancement, and bring a workout partner every single visit!",
    likes: 1890,
    comments: 78,
    tag: "PFBlackCard"
  }
];

export const PASS_OPTIONS = [
  {
    id: "classic-membership",
    title: "Classic Membership",
    price: 10,
    period: "month (plus taxes/fees)",
    badge: "Low-Cost Everyday Value",
    description: "Everything you need to get moving in a clean, welcoming environment.",
    features: [
      "Unlimited access to your Hampton, NH home club",
      "Free In-Club Fitness Training (PE@PF) with trainers",
      "Free high-speed member Wi-Fi",
      "Full access to massive cardio & strength machine floor",
      "Spotless locker rooms & private shower stalls",
      "Use of the PF App with digital workout tracking"
    ]
  },
  {
    id: "black-card",
    title: "PF Black Card®",
    price: 24.99,
    period: "month (plus taxes/fees)",
    badge: "Most Popular Nationwide",
    description: "The ultimate fitness & recovery passport for clubs across the U.S.",
    features: [
      "Access to 2,500+ Planet Fitness clubs across the U.S.",
      "Bring a guest anytime at no additional cost",
      "Relax in HydroMassage® heated water massage beds",
      "Total Body Enhancement red light therapy booths",
      "Massage chairs & zero-gravity loungers",
      "50% off select cold beverages & retail partner perks"
    ]
  },
  {
    id: "day-pass",
    title: "Free 1-Day Trial Pass",
    price: 0,
    period: "single day guest pass",
    badge: "Try The Judgement Free Zone",
    description: "Experience our Hampton club first-hand before joining.",
    features: [
      "Full single-day access to all cardio & strength equipment",
      "Tour of the facility and equipment demo",
      "Locker room and private shower access",
      "No obligation, pressure-free trial experience",
      "Instant digital guest pass on your phone"
    ]
  }
];
