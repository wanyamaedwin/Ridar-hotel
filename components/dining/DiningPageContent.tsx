'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/hotel/SectionHeader';
import { hotelData, HOTEL_INFO } from '@/lib/hotel-data';

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

export function DiningPageContent() {
  return (
    <div className="w-full">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 bg-gradient-to-b from-primary/10 to-background overflow-hidden"
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
              Culinary Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-charcoal/70"
            >
              Exquisite dining experiences crafted with local ingredients and international flair
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Dining Venues */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Dining Venues"
            subtitle="Each venue offers a unique culinary journey"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            {hotelData.dining.map((venue) => (
              <motion.div
                key={venue.id}
                variants={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">{venue.icon}</div>
                    <p className="text-sm text-charcoal/60">{venue.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-charcoal/70 mb-4">{venue.description}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">
                      <span className="font-semibold text-charcoal">Cuisine:</span> {venue.cuisine}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-charcoal">Hours:</span> {venue.hours}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-charcoal">Capacity:</span>{' '}
                      {venue.capacity}
                    </p>
                  </div>
                  <p className="text-charcoal/60 text-sm">{venue.highlights}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 md:py-24 bg-charcoal/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Menu Philosophy"
            subtitle="Celebrating local flavors with global techniques"
            light={false}
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
                title: 'Local Ingredients',
                description:
                  'We source fresh, seasonal ingredients from local Ugandan farmers and suppliers',
              },
              {
                title: 'Chef Selection',
                description:
                  'Our culinary team expertly prepares traditional and contemporary dishes',
              },
              {
                title: 'Dietary Needs',
                description: 'We accommodate vegetarian, vegan, and other dietary preferences',
              },
            ].map((philosophy, index) => (
              <motion.div key={index} variants={item} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {philosophy.title}
                </h3>
                <p className="text-charcoal/70">{philosophy.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Reserve Your Table
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Contact us to make a reservation or inquire about our dining experiences
          </p>
          <a
            href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20table%20at%20Riders%20Hotel.`}
            className="btn-primary"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
