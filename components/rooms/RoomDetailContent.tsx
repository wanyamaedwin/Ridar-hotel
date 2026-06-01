'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Wifi, Bed, Tag, CheckCircle, Info, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import BookingBar from '@/components/hotel/BookingBar'
import RoomCard from '@/components/hotel/RoomCard'
import SectionHeader from '@/components/hotel/SectionHeader'
import { HOTEL_INFO } from '@/lib/hotel-data'

interface Room {
  slug: string
  name: string
  price: string
  size: string
  occupancy: string
  bed: string
  images: string[]
  description: string
  amenities: string[]
  breakfast: string
  purpose: string[]
}

interface Props {
  room: Room
  relatedRooms: Room[]
}

export default function RoomDetailContent({ room, relatedRooms }: Props) {
  const [imgIdx, setImgIdx] = useState(0)

  const prev = () => setImgIdx((i) => (i - 1 + room.images.length) % room.images.length)
  const next = () => setImgIdx((i) => (i + 1) % room.images.length)

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 md:px-8">
        <nav className="text-sm text-muted-foreground flex gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/rooms" className="hover:text-primary transition-colors">Rooms</Link>
          <span>/</span>
          <span className="text-charcoal font-medium">{room.name}</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Image gallery */}
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-[460px] mb-3">
              <Image
                src={room.images[imgIdx]}
                alt={`${room.name} - photo ${imgIdx + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {room.images.map((_, j) => (
                  <button
                    key={j}
                    onClick={() => setImgIdx(j)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${j === imgIdx ? 'bg-primary' : 'bg-white/50'}`}
                    aria-label={`View image ${j + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mb-8">
              {room.images.map((img, j) => (
                <button
                  key={j}
                  onClick={() => setImgIdx(j)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${j === imgIdx ? 'border-primary' : 'border-transparent'}`}
                  aria-label={`Thumbnail ${j + 1}`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              loading="lazy"
                </button>
              ))}
            </div>

            {/* Room info */}
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal mb-2">{room.name}</h1>
            <p className="text-primary font-sans font-semibold text-lg mb-6">{room.price}</p>

            {/* Quick specs */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-y border-border py-4 mb-6">
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" />{room.occupancy}</span>
              <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-primary" />{room.bed}</span>
              <span className="flex items-center gap-1.5"><Tag className="w-4 h-4 text-primary" />{room.size}</span>
              <span className="flex items-center gap-1.5"><Wifi className="w-4 h-4 text-primary" />Free Wi-Fi</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{room.description}</p>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="font-serif text-xl font-medium text-charcoal mb-4">Room Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {room.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
              <h3 className="font-serif text-lg font-medium text-charcoal mb-3">What&apos;s Included</h3>
              <ul className="flex flex-col gap-2">
                {['Free high-speed Wi-Fi', 'Daily housekeeping', 'Fresh towels & toiletries', `Breakfast: ${room.breakfast}`, 'Secure parking', '24-hour front desk'].map((inc) => (
                  <li key={inc} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Check-in / Cancellation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="font-sans font-semibold text-sm text-charcoal mb-2">Check-in / Check-out</p>
                <p className="text-sm text-muted-foreground">Check-in: 2:00 PM</p>
                <p className="text-sm text-muted-foreground">Check-out: 11:00 AM</p>
                <p className="text-xs text-muted-foreground mt-2">Early/late check-in subject to availability.</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="font-sans font-semibold text-sm text-charcoal mb-2">Cancellation Policy</p>
                <p className="text-sm text-muted-foreground">Free cancellation up to 24 hours before arrival.</p>
                <p className="text-xs text-muted-foreground mt-2">Contact us to modify or cancel your booking.</p>
              </div>
            </div>
          </div>

          {/* Sticky booking card */}
          <div className="lg:col-span-1">
            <div id="book" className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl font-medium text-charcoal mb-1">Book This Room</h2>
              <p className="text-primary font-semibold text-sm mb-4">{room.price}</p>

              <BookingBar variant="page" className="shadow-none !p-0 bg-transparent border-0" />

              <button className="w-full bg-charcoal text-white font-semibold py-3 rounded-xl mt-4 hover:bg-primary hover:text-charcoal transition-colors text-sm">
                Check Availability
              </button>

              <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground bg-secondary/50 rounded-lg p-3">
                <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>Book direct for the best available rate. No extra fees.</span>
              </div>

              <a
                href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=I'd like to book the ${encodeURIComponent(room.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 border border-border rounded-xl py-3 text-sm font-medium text-charcoal hover:border-green-400 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related rooms */}
        {relatedRooms.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <SectionHeader eyebrow="More Options" title="Other Rooms You May Like" className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedRooms.map((r, i) => (
                <RoomCard
                  key={r.slug}
                  slug={r.slug}
                  name={r.name}
                  price={r.price}
                  image={r.image}
                  occupancy={r.occupancy}
                  breakfast={r.breakfast}
                  description={r.description}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </>
  )
}
