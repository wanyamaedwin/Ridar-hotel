// ──────────────────────────────────────────────
//  Riders Hotel — Placeholder Data
// ──────────────────────────────────────────────

export const HOTEL_INFO = {
  name: 'Riders Hotel',
  tagline: 'A Comfortable Stay in the Heart of Seeta, Mukono',
  address: 'Seeta, Mukono, Uganda',
  phone: '+256 770 712 652',
  whatsapp: '256702290697',
  email: 'reservations@ridarhotel.co.ug',
  website: 'https://ridarhotel.co.ug',
  coordinates: { lat: 0.3476, lng: 32.7263 },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Dining', href: '/dining' },
  { label: 'Events', href: '/events' },
  { label: 'Offers', href: '/offers' },
  { label: 'Local Area', href: '/local-area' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export const ROOMS = [
  {
    slug: 'deluxe-room',
    name: 'Deluxe Room',
    price: 'From UGX 120,000 / night',
    priceNum: 120000,
    size: '28 m²',
    occupancy: '1 guests',
    bed: 'Single Bed',
    image: '/assets/rider-duluxeroom.jpg',
    images: [
      '/assets/DeluxeRoom.jpg',
      '/assets/rider-duluxeroom.jpg',
      '/assets/riders-room5.jpeg',
    ],
    description:
      'A well-appointed Standard Single Room with a single bed, en-suite bathroom, and fast Wi-Fi — perfect for business travelers and couples visiting Seeta and Mukono.',
    amenities: ['Single Bed', 'Free Wi-Fi', 'Air Conditioning', 'En-Suite Bathroom', 'Flat-Screen TV', 'Work Desk', 'Safe', 'Mini-Fridge'],
    breakfast: 'Optional',
    featured: true,
    purpose: ['Business', 'Couple'],
  },
  {
    slug: 'executive-room',
    name: 'Executive Room',
    price: 'From UGX 160,000 / night',
    priceNum: 160000,
    size: '35 m²',
    occupancy: '2 guests',
    bed: 'King Bed',
    image: '/assets/singleroom.jpg',
    images: [
      '/assets/singleroom.jpg',
      '/assets/singleroom2.avif',
      '/assets/riders-room 2.jpg',
    ],
    description:
      'Our Executive Room offers elevated comfort with a spacious work area, premium bedding, and premium amenities — ideal for extended business stays near Namanve Industrial Park.',
    amenities: ['King Bed', 'Free Wi-Fi', 'Air Conditioning', 'En-Suite Bathroom', 'Smart TV', 'Executive Desk', 'Safe', 'Mini-Bar', 'Bathrobe & Slippers', 'Tea & Coffee Maker'],
    breakfast: 'Included',
    featured: true,
    purpose: ['Business', 'Couple'],
  },
  {
    slug: 'twin-room',
    name: 'Twin Room',
    price: 'From UGX 110,000 / night',
    priceNum: 110000,
    size: '26 m²',
    occupancy: '2 guests',
    bed: '2 Single Beds',
    image: '/assets/riders-room3.avif',
    images: [
      '/assets/riders-room3.avif',
      '/assets/riders-room4.avif',
    ],
    description:
      'A comfortable twin room with two single beds — great for colleagues traveling together along the Kampala–Jinja corridor or friends exploring eastern Uganda.',
    amenities: ['2 Single Beds', 'Free Wi-Fi', 'Air Conditioning', 'En-Suite Bathroom', 'Flat-Screen TV', 'Work Desk'],
    breakfast: 'Optional',
    featured: false,
    purpose: ['Business', 'Family'],
  },
  {
    slug: 'family-room',
    name: 'Family Room',
    price: 'From UGX 200,000 / night',
    priceNum: 200000,
    size: '45 m²',
    occupancy: '4 guests',
    bed: '1 King + 2 Single Beds',
    image: '/assets/riders-cottage2.jpg',
    images: [
      '/assets/riders-cottage2.jpg',
      '/assets/riders-cottageges1.webp',
      '/assets/Ridar-Hotel-3.jpg',
    ],
    description:
      'Spacious family room accommodating up to four guests — the ideal base for families exploring Mukono, Sezibwa Falls, and the Jinja route.',
    amenities: ['King + 2 Singles', 'Free Wi-Fi', 'Air Conditioning', 'En-Suite Bathroom', 'Smart TV', 'Safe', 'Mini-Fridge'],
    breakfast: 'Included',
    featured: true,
    purpose: ['Family', 'Long stay'],
  },
]

export const OFFERS = [
  {
    id: 1,
    slug: 'early-bird-special',
    title: 'Early Bird Special',
    subtitle: 'Plan Ahead & Save',
    description: 'Book 7 days in advance and save 20% on your stay. Perfect for guests who plan their travels ahead of time.',
    badge: '20% Off',
    discount: '20% Off',
    validUntil: 'Dec 31, 2024',
    terms: 'Applies to all room types except suites',
    image: '/assets/riders-view.jpg',
    inclusions: ['20% room discount', 'Complimentary breakfast', 'Early check-in (subject to availability)'],
  },
  {
    id: 2,
    slug: 'corporate-rates',
    title: 'Corporate Rates',
    subtitle: 'Business Traveler Special',
    description: 'Exclusive rates for companies and business travelers. Stay productive with our premium amenities.',
    badge: '15% Off',
    discount: '15% Off',
    validUntil: 'Ongoing',
    terms: 'Valid with company email and verification',
    image: '/assets/riders-frontview.jpg',
    inclusions: ['15% room discount', 'Free high-speed WiFi', 'Meeting room access', 'Express checkout'],
  },
  {
    id: 3,
    slug: 'weekend-getaway',
    title: 'Weekend Getaway',
    subtitle: 'Escape the City',
    description: 'Escape the city with our weekend special packages. Relax and rejuvenate in peaceful Seeta.',
    badge: '25% Off',
    discount: '25% Off',
    validUntil: 'Dec 31, 2024',
    terms: 'Friday - Sunday bookings only',
    image: '/assets/romantic_getaway.png',
    inclusions: ['25% room discount', 'Late checkout (2pm)', 'Welcome drink', 'Pool access'],
  },
]

export const EVENTS = [
  {
    id: 1,
    title: 'Corporate Conferences',
    description: 'Professional venues with modern A/V equipment',
    capacity: 'Up to 150 guests',
    amenities: 'WiFi, Catering, Tech Support',
    icon: '🎤',
  },
  {
    id: 2,
    title: 'Weddings & Celebrations',
    description: 'Beautiful spaces for your special moments',
    capacity: 'Up to 200 guests',
    amenities: 'Catering, Decoration, Parking',
    icon: '💍',
  },
  {
    id: 3,
    title: 'Business Meetings',
    description: 'Private rooms for intimate meetings and training',
    capacity: 'Flexible arrangements',
    amenities: 'WiFi, Projector, Refreshments',
    icon: '💼',
  },
]

export const DINING = [
  {
    id: 1,
    name: 'Main Restaurant',
    cuisine: 'International & Ugandan',
    hours: '6:30 AM - 10:00 PM',
    capacity: '80 seats',
    description: 'Our signature restaurant serving diverse cuisines in an elegant setting',
    highlights: 'Full bar, Al fresco dining, Private sections available',
    icon: '🍽️',
  },
  {
    id: 2,
    name: 'Garden Café',
    cuisine: 'Light Meals & Beverages',
    hours: '7:00 AM - 6:00 PM',
    capacity: '40 seats',
    description: 'Casual outdoor dining with refreshing beverages and light snacks',
    highlights: 'Garden setting, WiFi, Afternoon tea service',
    icon: '☕',
  },
]

export const TESTIMONIALS = [
  {
    name: 'James Okiror',
    role: 'Business Traveler',
    location: 'Namanve Industrial Park',
    stars: 5,
    text: 'Riders Hotel is my go-to whenever I have business near Namanve. The rooms are clean, the Wi-Fi is fast, and the staff genuinely care. I always sleep well here.',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    name: 'Mercy & David Ssekandi',
    role: 'Wedding Couple',
    location: 'Kampala',
    stars: 5,
    text: 'We hosted our reception at Riders Hotel and it was everything we dreamed of. The events team was professional, patient, and the food was absolutely delicious.',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    name: 'Sarah Namulondo',
    role: 'Family Guest',
    location: 'Kampala',
    stars: 4,
    text: 'We stopped here on our way to Jinja and ended up staying two nights! The family room was spacious, kids loved the food, and the road access is so convenient.',
    avatar: 'https://i.pravatar.cc/80?img=32',
  },
  {
    name: 'Robert Wegulo',
    role: 'Road-Trip Traveler',
    location: 'Jinja Road',
    stars: 5,
    text: 'A hidden gem right on the Kampala–Jinja Highway. Easy to find, great value, and the restaurant serves the best rolex I\'ve had in a long while. Will stop again!',
    avatar: 'https://i.pravatar.cc/80?img=15',
  },
]

export const LOCAL_ATTRACTIONS = [
  {
    name: 'Kampala–Jinja Highway',
    slug: 'kampala-jinja-highway',
    distance: '0 min — directly accessible',
    description: 'Riders Hotel sits right off Uganda\'s most important transport corridor — making arrivals and departures effortless whether you\'re heading to Kampala or Jinja.',
    image: '/assets/riders-frontview.jpg',
    icon: 'route',
  },
  {
    name: 'Namanve Industrial Park',
    slug: 'namanve-industrial-park',
    distance: '5–10 min drive',
    description: 'Uganda\'s largest industrial park is just minutes away — making Riders Hotel the ideal accommodation for executives, consultants, and workers at Namanve.',
    image: '/assets/riders-exterior.webp',
    icon: 'factory',
  },
  {
    name: 'Mukono Town',
    slug: 'mukono-town',
    distance: '10–15 min drive',
    description: 'The lively Mukono town centre, with its markets, banks, and services, is a short drive from the hotel — ideal for errands and local exploration.',
    image: '/assets/riders-view.jpg',
    icon: 'building',
  },
  {
    name: 'Sezibwa Falls',
    slug: 'sezibwa-falls',
    distance: '20–25 min drive',
    description: 'A stunning natural landmark with cultural significance. Sezibwa Falls is a popular day-trip destination reachable easily from Seeta via a scenic route.',
    image: '/assets/riders-pool.avif',
    icon: 'waves',
  },
  {
    name: 'Jinja Route',
    slug: 'jinja-route',
    distance: '45–60 min drive',
    description: 'Use Riders Hotel as your launchpad for the famous Jinja route — home to white-water rafting, the Source of the Nile, and Uganda\'s adventure capital.',
    image: '/assets/riders-cottage2.jpg',
    icon: 'mountain',
  },
]

export const FAQS = [
  {
    question: 'Where is Riders Hotel located?',
    answer:
      'Riders Hotel is located in Seeta, Mukono, Uganda — directly off the Kampala–Jinja Highway. It\'s easily accessible from Kampala (approx. 30–40 min), Mukono town (10–15 min), and Namanve Industrial Park (5–10 min).',
  },
  {
    question: 'Is Riders Hotel near Namanve Industrial Park?',
    answer:
      'Yes — Namanve Industrial Park is just 5–10 minutes from the hotel by road. We are a favourite stay for business professionals, consultants, and workers at Namanve.',
  },
  {
    question: 'Do you offer secure parking?',
    answer:
      'Yes. Riders Hotel has a secure, on-site parking area available to all guests at no additional charge.',
  },
  {
    question: 'Can I book directly through the website?',
    answer:
      'Yes. Booking direct ensures you get the best available rate and personalised assistance. You can also WhatsApp us directly for help with availability and reservations.',
  },
  {
    question: 'Do you host weddings and conferences?',
    answer:
      'Absolutely. We have dedicated event spaces for weddings, corporate conferences, birthday celebrations, and private events of all sizes. Our events team will guide you from enquiry to execution.',
  },
  {
    question: 'Do you have Wi-Fi?',
    answer:
      'Yes — free high-speed Wi-Fi is available throughout the hotel, including all guest rooms, the restaurant, and event spaces.',
  },
  {
    question: 'How do I contact the hotel?',
    answer: `You can reach us by phone at ${HOTEL_INFO.phone}, by WhatsApp at ${HOTEL_INFO.whatsapp}, or by email at ${HOTEL_INFO.email}. Our team is available 24 hours.`,
  },
]

export const GALLERY_IMAGES = [
  { src: '/assets/rider-duluxeroom.jpg', category: 'Rooms', alt: 'Deluxe room interior' },
  { src: '/assets/children outdoor play.avif', category: 'Outdoors', alt: 'Children outdoor play' },
  { src: '/assets/meetins.webp', category: 'Meetings', alt: 'Conference setup' },
  { src: '/assets/riders-exterior.webp', category: 'Exterior', alt: 'Hotel exterior view' },
  { src: '/assets/singleroom.jpg', category: 'Rooms', alt: 'Executive room' },
  { src: '/assets/buffet.webp', category: 'Dinning', alt: 'Breakfast spread' },
  { src: '/assets/cottages.webp', category: 'Rooms', alt: 'Cottage room' },
  { src: '/assets/riders-pool.avif', category: 'Exterior', alt: 'Hotel pool area' },
  { src: '/assets/riders-room3.avif', category: 'Rooms', alt: 'Twin room' },
  { src: '/assets/main_restaurant.png', category: 'Dining', alt: 'Bar and lounge' },
  { src: '/assets/conference_hall.png', category: 'Events', alt: 'Business meeting room' },
  { src: '/assets/riders-cottage2.jpg', category: 'Rooms', alt: 'Family room' },
]

export const TRUST_BADGES = [
  { icon: '⭐', label: '4.8 Rating', description: 'Highly rated by guests' },
  { icon: '🏆', label: 'Award Winner', description: 'Best Hotel in Region' },
  { icon: '📍', label: 'Prime Location', description: 'Heart of Seeta' },
  { icon: '✓', label: 'Verified Safe', description: 'Secure & Reliable' },
]

// Convenience export for accessing all data
export const hotelData = {
  rooms: ROOMS,
  offers: OFFERS,
  events: EVENTS,
  dining: DINING,
  testimonials: TESTIMONIALS,
  attractions: LOCAL_ATTRACTIONS,
  faqs: FAQS,
  gallery: GALLERY_IMAGES,
}
