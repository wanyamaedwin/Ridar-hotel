'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/hotel/SectionHeader';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function LocalAreaPageContent() {
  const attractions = [
    {
      name: 'Mukono Central Market',
      distance: '2 km',
      description: 'Vibrant local market with fresh produce, crafts, and authentic Ugandan goods',
      icon: '🛍️',
    },
    {
      name: 'Mukono Beach',
      distance: '3 km',
      description: 'Beautiful waterfront area along Lake Victoria, perfect for relaxation',
      icon: '🏖️',
    },
    {
      name: 'Uganda Wildlife Education Centre',
      distance: '8 km',
      description: 'Learn about Uganda&apos;s diverse wildlife and conservation efforts',
      icon: '🦁',
    },
    {
      name: 'Kasubi Tombs',
      distance: '25 km',
      description: 'UNESCO World Heritage site - burial grounds of Buganda kings',
      icon: '🏛️',
    },
    {
      name: 'Entebbe Botanical Gardens',
      distance: '30 km',
      description: 'Serene gardens with scenic views overlooking Lake Victoria',
      icon: '🌿',
    },
    {
      name: 'Kampala City Centre',
      distance: '35 km',
      description: 'Uganda&apos;s capital city with shops, restaurants, and cultural attractions',
      icon: '🏙️',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 bg-gradient-to-b from-secondary/10 to-background overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/5 to-transparent" />
        <div className="container mx-auto h-full flex items-center justify-center relative z-10 px-4">
          <div className="text-center max-w-2xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-4 font-serif text-charcoal"
            >
              Explore Seeta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-charcoal/70"
            >
              Discover the beauty and culture of Uganda&apos;s Seeta region
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Location Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              Your Gateway to Uganda
            </h2>
            <p className="text-lg text-charcoal/70">
              Seeta is perfectly positioned as a base for exploring the diverse attractions of
              Uganda, from vibrant markets and beautiful beaches to cultural heritage sites and
              wildlife reserves.
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 md:py-24 bg-charcoal/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Nearby Attractions"
            subtitle="Top destinations within easy reach of Riders Hotel"
            light={false}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{attraction.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-1">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-2">{attraction.distance}</p>
                    <p className="text-charcoal/70">{attraction.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Things to Experience */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ugandan Experiences"
            subtitle="Immerse yourself in the local culture and nature"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                title: 'Traditional Cuisine',
                description: 'Taste authentic Ugandan dishes and discover local flavors',
                icon: '🍲',
              },
              {
                title: 'Cultural Markets',
                description: 'Browse handmade crafts and souvenirs from local artisans',
                icon: '🎨',
              },
              {
                title: 'Nature Walks',
                description: 'Explore lush gardens and natural landscapes around the region',
                icon: '🥾',
              },
            ].map((experience, index) => (
              <motion.div key={index} variants={item} className="text-center">
                <div className="text-5xl mb-4">{experience.icon}</div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {experience.title}
                </h3>
                <p className="text-charcoal/70">{experience.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
