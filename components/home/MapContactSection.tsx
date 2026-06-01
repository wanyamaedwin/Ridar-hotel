'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Navigation } from 'lucide-react'
import { HOTEL_INFO } from '@/lib/hotel-data'

const DIRECTIONS = [
  { from: 'From Kampala', desc: 'Take the Kampala–Jinja Highway east. Pass Kireka and Bweyogerere. Riders Hotel is in Seeta — approx. 30–40 min.', time: '~35 min' },
  { from: 'From Mukono Town', desc: 'Head west on the Kampala–Jinja Highway toward Kampala. Riders Hotel is on the right in Seeta.', time: '~10 min' },
  { from: 'From Namanve', desc: 'Exit Namanve Industrial Park and head toward the Kampala–Jinja Highway. Riders Hotel is just a short drive.', time: '~5–10 min' },
]

export default function MapContactSection() {
  return (
    <section id="contact" className="py-28 bg-white" aria-label="Location and directions">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="text-center mb-16">
          <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.25em] font-sans font-semibold mb-2 block">
            Find Us
          </span>
          <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-4">
            Our Location
          </h2>
          <div className="w-12 h-[1px] bg-[#B09B7C]/40 mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Contacts & Directions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[#B09B7C] text-[10px] uppercase tracking-[0.2em] font-sans font-semibold block mb-2">
                Coordinates &amp; Details
              </span>
              <h3 className="font-serif text-[28px] font-light text-[#1A1A1A] leading-tight mb-4">
                Riders Hotel, Seeta
              </h3>
              <p className="text-[#4A4A4A] text-[14.5px] leading-[1.6] mb-8 font-light">
                Directly accessible along the Kampala–Jinja Highway corridor, our location is ideal for business clients visiting Namanve Industrial Park and travelers heading east.
              </p>

              {/* Driving Directions */}
              <div className="flex flex-col gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.15em] font-sans font-bold text-[#1A1A1A] block">
                  Getting Here
                </span>
                {DIRECTIONS.map(({ from, desc, time }) => (
                  <div key={from} className="flex gap-4 p-4 border border-[#EDEAE5] bg-[#F6F5F2] rounded-none shadow-none">
                    <div className="shrink-0">
                      <span className="text-[9.5px] uppercase tracking-[0.05em] font-sans font-semibold bg-[#1A1A1A] text-white px-2.5 py-1 rounded-none shadow-none">
                        {time}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-[13.5px] text-[#1A1A1A] mb-1">{from}</h4>
                      <p className="text-[12px] text-medium-gray font-sans font-light leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contacts grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#EDEAE5]">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-3 p-3.5 border border-[#EDEAE5] hover:border-[#B09B7C] transition-colors rounded-none shadow-none"
              >
                <Phone className="w-4 h-4 text-[#B09B7C] shrink-0" />
                <div className="truncate">
                  <span className="text-[9px] uppercase tracking-[0.05em] font-sans text-medium-gray block">Call Us</span>
                  <span className="text-[12.5px] text-[#1A1A1A] font-sans font-semibold truncate block">{HOTEL_INFO.phone}</span>
                </div>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 border border-[#EDEAE5] hover:border-[#B09B7C] transition-colors rounded-none shadow-none"
              >
                <MessageCircle className="w-4 h-4 text-[#B09B7C] shrink-0" />
                <div>
                  <span className="text-[9px] uppercase tracking-[0.05em] font-sans text-medium-gray block">WhatsApp</span>
                  <span className="text-[12.5px] text-[#1A1A1A] font-sans font-semibold block">Chat Online</span>
                </div>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Google Maps Iframe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] relative border border-[#EDEAE5] bg-[#F6F5F2] shadow-none overflow-hidden rounded-none"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.027018318047!2d32.7163!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db02b665fa1a5%3A0xe54d922f5c71d7eb!2sSeeta%2C+Mukono!5e0!3m2!1sen!2sug!4v1580000000000!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map location of Seeta, Mukono showing Riders Hotel area"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
