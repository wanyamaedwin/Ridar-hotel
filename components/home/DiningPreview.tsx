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
    <section id="dining" className="py-28 bg-muted" aria-label="Dining and restaurants">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="text-center mb-12">
          <span className="text-ocean-teal text-[11px] uppercase tracking-[0.25em] font-sans font-semibold mb-2 block">
            Dining
          </span>
          <h2 className="font-serif text-[38px] font-normal text-deep-navy leading-tight mb-4">
            A Culinary Journey Awaits
          </h2>
          <div className="w-12 h-[2px] bg-ocean-teal mx-auto mb-8" />
        </div>

        {/* Tabs selector */}
        <div className="flex justify-center gap-4 mb-16 border-b border-[#DDDDDD] pb-4">
          {DINING.map((dining) => {
            const isActive = dining.id === activeTab
            return (
              <button
                key={dining.id}
                onClick={() => setActiveTab(dining.id)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 font-sans text-[13px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? 'border-ocean-teal text-ocean-teal'
                  : 'border-transparent text-charcoal/70 hover:text-deep-navy hover:border-ocean-teal/50'
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
              <span className="text-ocean-teal text-[11px] uppercase tracking-[0.2em] font-sans font-semibold block mb-2">
                Fine Gastronomy
              </span>
              <h3 className="font-serif text-[28px] font-normal text-deep-navy leading-tight mb-4">
                {activeDining.name}
              </h3>
              <p className="text-charcoal/80 text-[16px] leading-[1.7] mb-6 font-normal">
                {activeDining.description}
              </p>

              {/* Specs & timing */}
              <div className="flex flex-col gap-3 py-4 border-y border-[#DDDDDD] mb-6 text-[14px] text-charcoal font-sans">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-ocean-teal shrink-0" />
                  <span className="font-normal">Open daily: <strong className="font-semibold text-deep-navy">{activeDining.hours}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-ocean-teal shrink-0" />
                  <span className="font-normal">Cuisine: <strong className="font-semibold text-deep-navy">{activeDining.cuisine}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="w-4 h-4 text-ocean-teal shrink-0" />
                  <span className="font-normal">Capacity: <strong className="font-semibold text-deep-navy">{activeDining.capacity}</strong></span>
                </div>
              </div>

              {/* Highlights tags */}
              <div className="mb-8">
                <span className="text-[11px] uppercase tracking-[0.15em] font-sans font-semibold text-deep-navy block mb-3">Highlights</span>
                <p className="text-[14px] text-charcoal/70 font-sans font-normal leading-relaxed">
                  {activeDining.highlights}
                </p>
              </div>

              <Link
                href="/"
                className="btn-primary gap-2"
              >
                Explore Dining &amp; Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Split Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-center">
              {/* Vertical Restaurant Scene (Left side of grid) */}
              <div className="col-span-7 relative h-[380px] sm:h-[480px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#DDDDDD] overflow-hidden group rounded-md">
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
              <div className="col-span-5 relative h-[240px] sm:h-[300px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-[#DDDDDD] overflow-hidden group mt-10 lg:mt-0 rounded-md">
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
