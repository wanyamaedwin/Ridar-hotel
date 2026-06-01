'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bed, Users, Maximize, Check, ArrowRight, ShieldCheck, Crown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ROOMS } from '@/lib/hotel-data'

const TAB_ICONS = {
  'deluxe-room': Bed,
  'executive-room': Crown,
  'twin-room': Bed,
  'family-room': Users,
}

export default function RoomsPreview() {
  const [activeTab, setActiveTab] = useState('deluxe-room')
  const activeRoom = ROOMS.find((r) => r.slug === activeTab) || ROOMS[0]

  // Get room image from configured data
  const getRoomImage = (room: typeof activeRoom) => {
    return room.image || room.images[0]
  }

  return (
    <section id="accommodation" className="py-28 bg-white" aria-label="Rooms and accommodation">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="text-center mb-12">
          <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.25em] font-sans font-semibold mb-2 block">
            Accommodations
          </span>
          <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-4">
            Designed for Rest & Comfort
          </h2>
          <div className="w-12 h-[1px] bg-[#B09B7C]/40 mx-auto mb-8" />
        </div>

        {/* Dynamic Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 border-b border-[#EDEAE5] pb-4">
          {ROOMS.map((room) => {
            const Icon = TAB_ICONS[room.slug as keyof typeof TAB_ICONS] || Bed
            const isActive = room.slug === activeTab

            return (
              <button
                key={room.slug}
                onClick={() => setActiveTab(room.slug)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? 'border-[#B09B7C] text-[#B09B7C]'
                  : 'border-transparent text-medium-gray hover:text-[#1A1A1A]'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {room.name}
              </button>
            )
          })}
        </div>

        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Specs Card */}
            <div className="lg:col-span-5 bg-[#F6F5F2] border border-[#EDEAE5] p-8 md:p-10 shadow-none flex flex-col justify-between h-full rounded-none">
              <div>
                <span className="text-[#B09B7C] text-[10px] uppercase tracking-[0.2em] font-sans font-semibold block mb-2">
                  Featured Suite
                </span>
                <h3 className="font-serif text-[28px] font-light text-[#1A1A1A] leading-tight mb-4">
                  {activeRoom.name}
                </h3>
                <p className="text-[#4A4A4A] text-[14px] leading-[1.65] mb-6 font-light">
                  {activeRoom.description}
                </p>

                {/* Technical specs grid */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#EDEAE5] mb-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-medium text-medium-gray mb-1">Size</span>
                    <span className="flex items-center gap-1.5 font-sans font-medium text-[13px] text-[#1A1A1A]">
                      <Maximize className="w-3.5 h-3.5 text-[#B09B7C] shrink-0" />
                      {activeRoom.size}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-medium text-medium-gray mb-1">Occupancy</span>
                    <span className="flex items-center gap-1.5 font-sans font-medium text-[13px] text-[#1A1A1A]">
                      <Users className="w-3.5 h-3.5 text-[#B09B7C] shrink-0" />
                      {activeRoom.occupancy}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-medium text-medium-gray mb-1">Bedding</span>
                    <span className="flex items-center gap-1.5 font-sans font-medium text-[13px] text-[#1A1A1A] truncate">
                      <Bed className="w-3.5 h-3.5 text-[#B09B7C] shrink-0" />
                      {activeRoom.bed}
                    </span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-semibold text-[#1A1A1A] block mb-3">Room Highlights</span>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {activeRoom.amenities.slice(0, 4).map((amenity) => (
                      <span key={amenity} className="flex items-center gap-2 text-[12px] text-medium-gray font-sans font-light">
                        <Check className="w-3.5 h-3.5 text-[#B09B7C] shrink-0" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price and Action */}
              <div className="pt-6 border-t border-[#EDEAE5] mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.1em] font-sans text-medium-gray block mb-1">Rates starting at</span>
                  <span className="font-serif text-[18px] md:text-[20px] text-[#1A1A1A] font-light">{activeRoom.price}</span>
                </div>
                <Link
                  href={`/rooms/${activeRoom.slug}`}
                  className="bg-[#1A1A1A] text-white text-[11.5px] uppercase tracking-[0.18em] font-semibold text-center px-6 py-3.5 rounded-none hover:bg-[#B09B7C] transition-all duration-300 flex items-center justify-center gap-2 shadow-none cursor-pointer"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Large Image */}
            <div className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-[520px] shadow-none border border-[#EDEAE5] group overflow-hidden rounded-none">
              <Image
                src={getRoomImage(activeRoom)}
                alt={activeRoom.name}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
