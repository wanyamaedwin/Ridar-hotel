'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Wifi, Croissant, ArrowRight, Tag } from 'lucide-react'
import SectionHeader from '@/components/hotel/SectionHeader'
import BookingBar from '@/components/hotel/BookingBar'
import { ROOMS, HOTEL_INFO } from '@/lib/hotel-data'

const PURPOSES = ['All', 'Business', 'Family', 'Couple', 'Long stay']

export default function RoomsPageContent() {
  const [purpose, setPurpose] = useState('All')
  const [minGuests, setMinGuests] = useState(1)

  const filtered = ROOMS.filter((room) => {
    const matchPurpose = purpose === 'All' || room.purpose.includes(purpose)
    const matchGuests = parseInt(room.occupancy.split(' ')[0]) >= minGuests
    return matchPurpose && matchGuests
  })

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/riders-exterior.webp)' }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-10 w-full">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-sans font-medium block mb-2">
            Accommodation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-white text-balance">
            Rooms & Suites at Riders Hotel
          </h1>
        </div>
      </section>

      {/* Booking Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-6 relative z-10 mb-12">
        <BookingBar variant="page" />
      </div>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm font-sans font-medium text-muted-foreground">Filter by purpose:</span>
          {PURPOSES.map((p) => (
            <button
              key={p}
              onClick={() => setPurpose(p)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                purpose === p
                  ? 'bg-charcoal text-white'
                  : 'bg-secondary border border-border text-foreground hover:border-primary/50'
              }`}
            >
              {p}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <select
              value={minGuests}
              onChange={(e) => setMinGuests(Number(e.target.value))}
              className="text-sm border border-border rounded-full px-3 py-1.5 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>Min {n} guest{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-center py-16">No rooms match your filters. Try adjusting your search.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((room, i) => (
              <motion.div
                key={room.slug}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-500 flex flex-col md:flex-row"
              >
                <div className="relative md:w-60 h-52 md:h-auto shrink-0">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-primary/90 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                      {room.price}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h2 className="font-serif text-xl font-medium text-charcoal mb-1">{room.name}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{room.description}</p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-primary" />{room.occupancy}</span>
                    <span className="flex items-center gap-1.5"><Wifi className="w-3.5 h-3.5 text-primary" />Free Wi-Fi</span>
                    <span className="flex items-center gap-1.5"><Croissant className="w-3.5 h-3.5 text-primary" />Breakfast {room.breakfast}</span>
                    <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5 text-primary" />{room.size}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.amenities.slice(0, 4).map((a) => (
                      <span key={a} className="text-[11px] bg-secondary border border-border px-2.5 py-0.5 rounded-full text-muted-foreground">{a}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="flex-1 text-center text-sm font-semibold border-2 border-[#DDDDDD] hover:bg-[#F5F5F5] hover:border-charcoal text-charcoal rounded-md py-2 transition-colors cursor-pointer"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/rooms/${room.slug}#book`}
                      className="btn-primary flex-1 gap-1"
                    >
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Compare / Booking CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-primary text-xs uppercase tracking-widest font-sans font-medium mb-3">Book Direct</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium mb-4">Best Rate When You Book Direct</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Skip third-party booking fees — book direct on our website or WhatsApp for the best
            available rate and personalised help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary text-[14px] px-7 py-3 rounded-md cursor-pointer">
              Contact Reservations
            </Link>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Riders%20Hotel.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 text-[14px] px-7 py-3 rounded-md cursor-pointer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
