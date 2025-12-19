import { ServiceItem, FaqItem, Testimonial } from './types';

// Contact Info
export const CONTACT_INFO = {
  phone: "+60123456789",
  whatsapp: "60123456789", // Format for API
  address: "Level 2, Menara Business, 50450 Kuala Lumpur, Malaysia",
  wazeLink: "https://waze.com/ul/hw283j",
  googleMapsLink: "https://maps.google.com/?q=Lemongrass+Wellness+KL",
  hours: "Daily: 10:00 AM - 2:00 AM"
};

// WhatsApp Pre-filled Messages
export const WA_MESSAGES = {
  general: "Hi Lemongrass, I would like to enquire about your services.",
  booking: "Hi Lemongrass, I would like to reserve a private suite.",
  neck: "Hi Lemongrass, I am interested in the Neck Traction Bed therapy.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'neck-traction',
    title: "Cervical Spine Rocking Traction",
    shortDesc: "Relieve text neck and stiff shoulders with our signature non-invasive traction bed.",
    fullDesc: "Our signature 'Neck Bed' utilizes a gentle, rhythmic rocking motion combined with precise cervical traction. This non-invasive therapy allows the spinal vertebrae to decompress naturally, releasing deep-seated tension in the neck and upper shoulders caused by prolonged screen time.",
    benefits: [
      "Decompresses spinal vertebrae",
      "Relieves 'Tech Neck' instantly",
      "Improves blood circulation to the brain",
      "Non-invasive and gentle"
    ],
    recommendedFor: "Corporate executives, IT professionals, and anyone suffering from chronic neck stiffness.",
    image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'thai-oil',
    title: "Authentic Thai & Balinese Oil Massage",
    shortDesc: "Deep tissue release blending ancient Thai stretches with soothing Balinese aromatic oils.",
    fullDesc: "Experience the best of both worlds. We combine the rhythmic acupressure and assisted stretching of Traditional Thai Massage with the long, sweeping strokes of Balinese Oil Massage. This fusion targets deep muscle fatigue while promoting a meditative state of relaxation.",
    benefits: [
      "Releases deep muscle knots",
      "Enhances flexibility",
      "Reduces cortisol (stress) levels",
      "Improves sleep quality"
    ],
    recommendedFor: "Business travelers, athletes, and those experiencing high-stress fatigue.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'detox-steam',
    title: "18-Herb Detox Steam",
    shortDesc: "A medical-grade steam session using a proprietary blend of 18 healing herbs.",
    fullDesc: "Step into our private cedar wood steam rooms infused with a potent decoction of 18 traditional Asian herbs, including lemongrass, ginger, turmeric, and kaffir lime. This hot steam therapy opens pores, flushes out toxins, and boosts the immune system.",
    benefits: [
      "Detoxifies the lymphatic system",
      "Clears respiratory passages",
      "Boosts metabolism",
      "Softens and rejuvenates skin"
    ],
    recommendedFor: "Post-flight recovery, immune boosting, and general vitality.",
    image: "https://images.unsplash.com/photo-1515377905703-c47889512026?auto=format&fit=crop&w=800&q=80"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is Lemongrass suitable for private business discussions?",
    answer: "Absolutely. We specialize in hosting corporate clients. Our VIP and Couple Suites are soundproofed and equipped with high-speed Wi-Fi, allowing for confidential discussions in a relaxed environment."
  },
  {
    question: "What is the Neck Traction Bed and is it safe?",
    answer: "The Neck Traction Bed is a specialized therapeutic device designed to gently stretch the cervical spine. It is completely safe, non-invasive, and operated by trained therapists. It is specifically designed to counteract the effects of poor posture from office work."
  },
  {
    question: "Do I need to book in advance?",
    answer: "Given our focus on privacy and personalized service, we highly recommend booking at least 4 hours in advance, especially for evening slots and VIP Suites."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we offer complimentary valet parking for all our guests. Alternatively, there is a reserved secure parking zone for Lemongrass patrons within the building."
  }
];

// Price List Data (From PDF)
export const PRICE_LIST = [
  {
    category: "Therapy & Treatments",
    items: [
      { name: "Body Scrub", duration: "45 mins", price: "Rm 98" },
      { name: "Herbal Sauna", duration: "60 mins", price: "Rm 48" },
      { name: "Spinal Stretch & Relax Therapy", duration: "60 mins", price: "Rm 88" },
      { name: "Half Body Massage", duration: "30 mins", price: "Rm 68" },
      { name: "Herbal Poultice Therapy", duration: "120 mins", price: "Rm 238" },
    ]
  },
  {
    category: "Foot Reflexology",
    items: [
      { name: "Foot Massage", duration: "60 mins", price: "Rm 88" },
      { name: "Foot Massage", duration: "90 mins", price: "Rm 118" },
    ]
  },
  {
    category: "Signature Massage (Foot & Shoulder)",
    items: [
      { name: "Signature Massage", duration: "60 mins", price: "Rm 108" },
      { name: "Signature Massage", duration: "90 mins", price: "Rm 138" },
      { name: "Signature Massage", duration: "120 mins", price: "Rm 168" },
    ]
  },
  {
    category: "Thai Massage",
    items: [
      { name: "Thai Massage", duration: "60 mins", price: "Rm 108" },
      { name: "Thai Massage", duration: "90 mins", price: "Rm 158" },
      { name: "Thai Massage", duration: "120 mins", price: "Rm 198" },
    ]
  },
  {
    category: "Balinese Massage",
    items: [
      { name: "Balinese Massage", duration: "60 mins", price: "Rm 128" },
      { name: "Balinese Massage", duration: "90 mins", price: "Rm 168" },
      { name: "Balinese Massage", duration: "120 mins", price: "Rm 208" },
    ]
  },
  {
    category: "Packages",
    items: [
      { name: "Lemongrass Couple Harmony", duration: "180 mins", price: "Rm 636" },
    ]
  }
];

// JSON-LD Schema
export const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lemongrass Wellness & Healing Center",
  "image": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
  "telephone": CONTACT_INFO.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 2, Menara Business",
    "addressLocality": "Kuala Lumpur",
    "addressRegion": "Wilayah Persekutuan",
    "postalCode": "50450",
    "addressCountry": "MY"
  },
  "priceRange": "$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "02:00"
    }
  ]
};