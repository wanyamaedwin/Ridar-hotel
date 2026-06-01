'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Utensils, Compass, Coffee, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { DINING } from '@/lib/hotel-data'

export default function DiningPreview() {
  const [activeTab, setActiveTab] = useState(1) // Restaurant ID
  const activeDining = DINING.find((d) => d.id === activeTab) || DINING[0]

  return (
    <section id="dining" className="py-28 bg-[#F6F5F2]" aria-label="Dining and restaurants">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="text-center mb-12">
          <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.25em] font-sans font-semibold mb-2 block">
            Dining
          </span>
          <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-4">
            A Culinary Journey Awaits
          </h2>
          <div className="w-12 h-[1px] bg-[#B09B7C]/40 mx-auto mb-8" />
        </div>

        {/* Tabs selector */}
        <div className="flex justify-center gap-4 mb-16 border-b border-[#EDEAE5] pb-4">
          {DINING.map((dining) => {
            const isActive = dining.id === activeTab
            return (
              <button
                key={dining.id}
                onClick={() => setActiveTab(dining.id)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? 'border-[#B09B7C] text-[#B09B7C]'
                  : 'border-transparent text-medium-gray hover:text-[#1A1A1A]'
                  }`}
              >
                {dining.id === 1 ? <Utensils className="w-4 h-4" /> : <Coffee className="w-4 h-4" />}
                {dining.name}
              </button>
            )
          })}
        </div>

        {/* Content grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[#B09B7C] text-[10px] uppercase tracking-[0.2em] font-sans font-semibold block mb-2">
                Fine Gastronomy
              </span>
              <h3 className="font-serif text-[28px] font-light text-[#1A1A1A] leading-tight mb-4">
                {activeDining.name}
              </h3>
              <p className="text-[#4A4A4A] text-[14px] leading-[1.65] mb-6 font-light">
                {activeDining.description}
              </p>

              {/* Specs & timing */}
              <div className="flex flex-col gap-3 py-4 border-y border-[#EDEAE5] mb-6 text-[13px] text-[#1A1A1A] font-sans">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#B09B7C] shrink-0" />
                  <span className="font-light">Open daily: <strong className="font-semibold">{activeDining.hours}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-[#B09B7C] shrink-0" />
                  <span className="font-light">Cuisine: <strong className="font-semibold">{activeDining.cuisine}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="w-4 h-4 text-[#B09B7C] shrink-0" />
                  <span className="font-light">Capacity: <strong className="font-semibold">{activeDining.capacity}</strong></span>
                </div>
              </div>

              {/* Highlights tags */}
              <div className="mb-8">
                <span className="text-[10px] uppercase tracking-[0.15em] font-sans font-semibold text-[#1A1A1A] block mb-3">Highlights</span>
                <p className="text-[13px] text-medium-gray font-sans font-light leading-relaxed">
                  {activeDining.highlights}
                </p>
              </div>

              <Link
                href="/dining"
                className="bg-[#1A1A1A] text-white text-[11.5px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 rounded-none hover:bg-[#B09B7C] transition-all duration-300 self-start flex items-center gap-2 shadow-none cursor-pointer"
              >
                Explore Dining &amp; Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Split Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-center">
              {/* Vertical Restaurant Scene (Left side of grid) */}
              <div className="col-span-7 relative h-[380px] sm:h-[480px] shadow-none border border-[#EDEAE5] overflow-hidden group rounded-none">
                <Image
                  src="/assets/restaurant2.avif"
                  alt="Restaurant interior"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
              </div>

              {/* Horizontal Delicious Dish (Right side of grid) */}
              <div className="col-span-5 relative h-[240px] sm:h-[300px] shadow-none border border-[#EDEAE5] overflow-hidden group mt-10 lg:mt-0 rounded-none">
                <Image
                  src="/assets/buffet.webp"
                  alt="Gourmet dinner dish detail"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
