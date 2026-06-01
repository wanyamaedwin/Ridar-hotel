'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/hotel/SectionHeader';
import { hotelData } from '@/lib/hotel-data';

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

export function OffersPageContent() {
  return (
    <div className="w-full">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 bg-gradient-to-b from-accent/10 to-background overflow-hidden"
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
              Special Offers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-charcoal/70"
            >
              Exclusive packages and promotions for memorable stays
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Active Offers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Current Promotions" subtitle="Limited-time offers available now" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {hotelData.offers.map((offer) => (
              <motion.div
                key={offer.id}
                variants={item}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                    {offer.discount}
                  </span>
                </div>

                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">{offer.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{offer.title}</h3>
                  <p className="text-charcoal/70 mb-4">{offer.description}</p>

                  <div className="mb-6 p-4 bg-charcoal/5 rounded-lg">
                    <p className="text-sm text-charcoal/60 mb-1">
                      <span className="font-semibold">Valid Until:</span> {offer.validUntil}
                    </p>
                    <p className="text-sm text-charcoal/60">
                      <span className="font-semibold">Terms:</span> {offer.terms}
                    </p>
                  </div>

                  <a
                    href="https://wa.me/256700000000"
                    className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Claim Offer
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16 md:py-24 bg-charcoal/5">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Package Highlights"
            subtitle="What&apos;s included in our special offers"
            light={false}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto"
          >
            {[
              {
                title: 'Flexible Booking',
                description: 'Book now, pay later options available for selected offers',
              },
              {
                title: 'Complimentary Services',
                description: 'Free airport transfers, Wi-Fi, and welcome beverages included',
              },
              {
                title: 'Extended Stay',
                description: 'Longer stays qualify for additional discounts and upgrades',
              },
              {
                title: 'Group Packages',
                description: 'Special rates available for group bookings and corporate events',
              },
            ].map((highlight, index) => (
              <motion.div key={index} variants={item} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                  {highlight.title}
                </h3>
                <p className="text-charcoal/70">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Don&apos;t Miss These Deals
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Contact us today to book your special offer and save on your next stay
          </p>
          <a
            href="https://wa.me/256700000000"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
