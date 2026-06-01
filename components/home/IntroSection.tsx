'use client'

import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="relative py-28 bg-[#FAF9F7] overflow-hidden" aria-label="Welcome to Riders Hotel">
      {/* Repeating linear vertical grid pattern */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(176, 155, 124, 0.08), rgba(176, 155, 124, 0.08) 1px, transparent 1px, transparent 60px)',
          backgroundPosition: 'center top'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-[#B09B7C] text-[11px] uppercase tracking-[0.3em] font-sans font-medium mb-2">
            Welcome to the
          </span>
          <h2 className="font-serif text-[42px] md:text-[50px] font-light text-[#1A1A1A] leading-tight mb-2">
            Riders Hotel
          </h2>
          <span className="text-[#B09B7C] text-[11px] uppercase tracking-[0.25em] font-sans font-medium mb-8">
            Premium Luxury & Comfort
          </span>
          
          <div className="w-12 h-[1px] bg-[#B09B7C]/40 mb-8" />
          
          <p className="text-[#4A4A4A] font-sans text-[15px] md:text-[16px] leading-[1.8] max-w-3xl mb-8 font-light">
            Whether you&apos;re a business professional working near Namanve Industrial Park, a family
            on a road trip to Jinja, or planning an event in Mukono — Riders Hotel in Seeta is exactly
            where you need to be. We offer clean, comfortable rooms, a warm restaurant serving Ugandan and continental
            cuisine, a fully equipped events space, and the kind of hospitality that makes you feel
            right at home. Secure parking, fast Wi-Fi, and a team that genuinely cares.
          </p>
          
          <div className="w-16 h-[1px] bg-[#B09B7C]/40" />
        </motion.div>
      </div>
    </section>
  )
}
