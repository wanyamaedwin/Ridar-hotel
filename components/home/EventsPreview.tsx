'use client'

import { motion } from 'framer-motion'
import { Check, Calendar, Users, Phone, Shield, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const EVENT_AMENITIES = [
  'High-Speed Wi-Fi for all attendees',
  'Customized gourmet catering and break spreads',
  'Dedicated on-site technical & A/V support',
  'Secure, spacious complimentary parking',
  'Flexible table setups and layouts',
  'Convenient highway access for easy arrivals',
]

export default function EventsPreview() {
  return (
    <section id="events" className="py-28 bg-white" aria-label="Meetings and events">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Image with double borders for luxury frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative p-4 bg-muted border border-[#DDDDDD] shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-md"
          >
            <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden border border-[#DDDDDD] rounded-md">
              <Image
                src="/assets/meetins.webp"
                alt="Conference room setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>

          {/* Right Column: Title, Specs, Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="text-ocean-teal text-[11px] uppercase tracking-[0.25em] font-sans font-semibold mb-2">
              Conferences &amp; Galas
            </span>
            <h2 className="font-serif text-[38px] font-normal text-deep-navy leading-tight mb-4">
              Host Memorable Events
            </h2>
            <div className="w-12 h-[2px] bg-ocean-teal mb-6" />

            <p className="text-charcoal/80 text-[16px] leading-[1.7] mb-8 font-normal">
              From high-level corporate board meetings near Namanve to grand wedding receptions, Riders Hotel offers fully air-conditioned halls, modern audio-visual technology, and bespoke Ugandan hospitality to elevate your event.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
              {EVENT_AMENITIES.map((amenity) => (
                <div key={amenity} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-ocean-teal shrink-0 mt-0.5" />
                  <span className="text-[13px] text-charcoal/80 font-sans font-medium leading-snug">{amenity}</span>
                </div>
              ))}
            </div>

            {/* Inquiry Form */}
            <div className="bg-muted border border-[#DDDDDD] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-md">
              <span className="text-[11px] uppercase tracking-[0.15em] font-sans font-bold text-deep-navy block mb-4">
                Quick Event Enquiry
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <select className="w-full bg-white border border-[#DDDDDD] text-[13px] text-charcoal py-3 px-4 focus:outline-none focus:border-ocean-teal focus:ring-1 focus:ring-ocean-teal/20 rounded-md appearance-none cursor-pointer font-sans font-light">
                  <option value="">Event Category</option>
                  <option>Corporate Conference</option>
                  <option>Board Meeting</option>
                  <option>Wedding Reception</option>
                  <option>Birthday / Dinner Party</option>
                </select>
                <input
                  type="date"
                  className="w-full bg-white border border-[#DDDDDD] text-[13px] text-charcoal py-3 px-4 focus:outline-none focus:border-ocean-teal focus:ring-1 focus:ring-ocean-teal/20 rounded-md font-sans font-light cursor-pointer"
                />
                <input
                  type="number"
                  placeholder="Expected Guests"
                  className="w-full bg-white border border-[#DDDDDD] text-[13px] text-charcoal py-3 px-4 focus:outline-none focus:border-ocean-teal focus:ring-1 focus:ring-ocean-teal/20 rounded-md font-sans font-light"
                />
                <input
                  type="tel"
                  placeholder="Phone or WhatsApp Number"
                  className="w-full bg-white border border-[#DDDDDD] text-[13px] text-charcoal py-3 px-4 focus:outline-none focus:border-ocean-teal focus:ring-1 focus:ring-ocean-teal/20 rounded-md font-sans font-light"
                />
              </div>
              <button className="btn-primary w-full">
                Request Event Proposal
              </button>
            </div>

            {/* CTA Link to dedicated events subpage */}
            <Link
              href="/"
              className="mt-6 font-sans text-[13px] uppercase tracking-[0.15em] font-semibold text-deep-navy hover:text-ocean-teal transition-colors self-start flex items-center gap-1.5 cursor-pointer"
            >
              Learn More About Spaces <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
