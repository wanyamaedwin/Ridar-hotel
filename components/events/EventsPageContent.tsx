'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import SectionHeader from '@/components/hotel/SectionHeader'
import FAQAccordion from '@/components/hotel/FAQAccordion'
import { hotelData, HOTEL_INFO } from '@/lib/hotel-data'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const EVENT_FAQS = [
  { question: 'Can I visit the event space before booking?', answer: 'Yes — we welcome site visits. Contact our events team to schedule a walkthrough.' },
  { question: 'Do you provide catering?', answer: 'Yes, our restaurant team provides full catering for all events.' },
  { question: 'Is AV equipment included?', answer: 'Projectors, screens, and PA systems are included in standard packages.' },
  { question: 'What is the deposit?', answer: 'A 30–50% deposit is required to confirm event bookings.' },
]

export default function EventsPageContent() {
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
              Events & Conferences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-charcoal/70"
            >
              Professional venues for conferences, weddings, and corporate events
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Event Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What We Host"
            subtitle="From boardroom sessions to grand weddings — our team makes every event memorable"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            {hotelData.events.map((event) => (
              <motion.div
                key={event.id}
                variants={item}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{event.title}</h3>
                <p className="text-charcoal/70 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold text-charcoal">Capacity:</span> {event.capacity}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-charcoal">Amenities:</span> {event.amenities}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-charcoal/5">
        <div className="container mx-auto max-w-3xl px-4">
          <SectionHeader title="Event FAQs" subtitle="Common questions" light={false} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <FAQAccordion faqs={EVENT_FAQS} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Contact our events team to discuss your requirements and get a custom quote.
          </p>
          <a
            href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20hosting%20an%20event%20at%20Riders%20Hotel.`}
            className="btn-primary"
          >
            Contact Events Team
          </a>
        </div>
      </section>
    </div>
  )
}
