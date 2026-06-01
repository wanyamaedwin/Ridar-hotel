'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const SLIDES = [
  {
    image: '/assets/riders-view.jpg',
    label: 'Riders Serena Hotel',
    title: 'Premium Luxury & Comfort in the Heart of Seeta',
  },
  {
    image: '/assets/DeluxeRoom.jpg',
    label: 'Executive Accommodations',
    title: 'Refined Suites Designed for Work & Relaxation',
  },
  {
    image: '/assets/riders-cottage2.jpg',
    label: 'Cottages',
    title: ' Self-Contained Units for Short Stays',
  },
  {
    image: '/assets/riders-pool.avif',
    label: 'Pool Area',
    title: 'Splash into Relaxation',
  },
  {
    image: '/assets/riders-exterior.webp',
    label: 'Hotel Exterior',
    title: 'Welcome to Unwind & Recharge',
  },
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const handlePrev = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(handleNext, 5000)
    return () => clearInterval(timer)
  }, [isPlaying, handleNext])

  // Progress indicators text renderer (mimics: 1 ... 4 5 6)
  const renderIndicators = () => {
    const total = SLIDES.length
    const current = activeSlide + 1

    if (total <= 3) {
      return (
        <div className="flex items-center gap-3 text-white/50 text-[11px] font-medium tracking-widest font-sans">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={cn(
                'transition-colors hover:text-white',
                idx === activeSlide && 'text-white border-b border-[#B09B7C] pb-0.5'
              )}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )
    }

    if (current <= 2) {
      return (
        <div className="flex items-center gap-3 text-white/50 text-[11px] font-medium tracking-widest font-sans">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={cn(
                'transition-colors hover:text-white',
                idx === activeSlide && 'text-white border-b border-[#B09B7C] pb-0.5'
              )}
            >
              {idx + 1}
            </button>
          ))}
          <span className="text-white/20 select-none">...</span>
          <button
            onClick={() => setActiveSlide(total - 1)}
            className="transition-colors hover:text-white"
          >
            {total}
          </button>
        </div>
      )
    }

    return (
      <div className="flex items-center gap-3 text-white/50 text-[11px] font-medium tracking-widest font-sans">
        <button
          onClick={() => setActiveSlide(0)}
          className="transition-colors hover:text-white"
        >
          1
        </button>
        <span className="text-white/20 select-none">...</span>
        {Array.from({ length: total - 2 }).map((_, index) => {
          const slideIdx = index + 2
          return (
            <button
              key={slideIdx}
              onClick={() => setActiveSlide(slideIdx)}
              className={cn(
                'transition-colors hover:text-white',
                slideIdx === activeSlide && 'text-white border-b border-[#B09B7C] pb-0.5'
              )}
            >
              {slideIdx + 1}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-[#1A1A1A]" aria-label="Hero Slider">
      {/* Background slide with cross-fade transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${SLIDES[activeSlide].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Left: Heading Details */}
      <div className="absolute left-6 md:left-12 bottom-16 z-20 max-w-4xl text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
              {SLIDES[activeSlide].label}
            </span>
            <h1 className="font-serif text-[36px] md:text-[46px] lg:text-[54px] text-white leading-[1.15] font-light text-balance">
              {SLIDES[activeSlide].title}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: Controls & Indicators */}
      <div className="absolute right-6 md:right-12 bottom-16 z-20 flex items-center gap-4 bg-[#1A1A1A]/85 px-4 py-3 border border-white/10 rounded-none shadow-none">

        {/* Play / Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-none border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="w-3 h-3 fill-white" /> : <Play className="w-3 h-3 fill-white pl-0.5" />}
        </button>

        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          className="p-1.5 text-white/70 hover:text-[#B09B7C] transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Numerical pagination dynamic list */}
        {renderIndicators()}

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="p-1.5 text-white/70 hover:text-[#B09B7C] transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  )
}
