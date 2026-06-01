'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Eye } from 'lucide-react'
import { GALLERY_IMAGES } from '@/lib/hotel-data'

const CATEGORIES = ['All', 'Rooms', 'Dining', 'Events', 'Exterior']

export default function GalleryPreview() {
  const [filter, setFilter] = useState('All')

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES.slice(0, 8) 
    : GALLERY_IMAGES.filter((img) => img.category === filter).slice(0, 8)

  return (
    <section id="gallery" className="py-28 bg-white" aria-label="Photo gallery preview">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="text-center mb-12">
          <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.25em] font-sans font-semibold mb-2 block">
            Gallery
          </span>
          <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-4">
            A Glimpse of Riders Hotel
          </h2>
          <div className="w-12 h-[1px] bg-[#B09B7C]/40 mx-auto mb-8" />
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 border-b border-[#EDEAE5] pb-4">
          {CATEGORIES.map((cat) => {
            const isActive = cat === filter
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold border-b-2 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-[#B09B7C] text-[#B09B7C]'
                    : 'border-transparent text-medium-gray hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Masonry-Style Grid with AnimatePresence */}
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden group shadow-none border border-[#EDEAE5] bg-[#F6F5F2] rounded-none"
                style={{ aspectRatio: i % 3 === 0 ? '4/5' : '4/3' }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1A1A1A]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1.5 text-white">
                    <Eye className="w-5 h-5 text-[#B09B7C]" />
                    <span className="text-[10px] uppercase tracking-[0.15em] font-sans font-semibold">View Detail</span>
                  </div>
                </div>

                <span className="absolute bottom-3 left-3 bg-[#FAF9F7]/90 border border-[#EDEAE5] text-[#1A1A1A] text-[9.5px] uppercase tracking-[0.12em] font-sans font-semibold px-2 py-1 shadow-none rounded-none">
                  {img.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-[11.5px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 rounded-none hover:bg-[#B09B7C] transition-all duration-300 shadow-none cursor-pointer"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
