'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    image: '/assets/riders-view.jpg',
    label: 'Riders Hotel',
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

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(handleNext, 5000)
    return () => clearInterval(timer)
  }, [isPlaying, handleNext])

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-nearly-black" aria-label="Hero Slider">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="overflow-hidden block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-ocean-teal text-[11px] uppercase tracking-[0.25em] font-sans font-semibold block mb-3"
              >
                {SLIDES[activeSlide].label}
              </motion.span>
            </span>
            <h1 className="font-serif text-[36px] md:text-[46px] lg:text-[54px] text-white leading-[1.15] font-normal text-balance overflow-hidden block">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {SLIDES[activeSlide].title}
              </motion.span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
