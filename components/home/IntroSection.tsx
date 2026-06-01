'use client'

import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="relative py-28 bg-muted overflow-hidden" aria-label="Welcome to Riders Hotel">
      {/* Subtle repeating vertical grid pattern using ocean teal */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(170, 221, 221, 0.1), rgba(170, 221, 221, 0.1) 1px, transparent 1px, transparent 60px)',
          backgroundPosition: 'center top'
        }}
      />
      
      {/* Ambient slow-floating luxury blur backdrops */}
      <div className="absolute top-10 left-[-10%] w-96 h-96 rounded-full bg-ocean-teal/15 blur-3xl pointer-events-none z-0 animate-float-slow" />
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 rounded-full bg-sage-green/10 blur-3xl pointer-events-none z-0 animate-float-reverse-slow" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-ocean-teal text-[11px] uppercase tracking-[0.3em] font-sans font-semibold mb-2">
            Welcome to the
          </span>
          <h2 className="font-serif text-[42px] md:text-[50px] font-normal text-deep-navy leading-tight mb-2">
            Riders Hotel
          </h2>
          <span className="text-ocean-teal text-[11px] uppercase tracking-[0.25em] font-sans font-semibold mb-8">
            Premium Luxury &amp; Comfort
          </span>
          
          <div className="w-12 h-[2px] bg-ocean-teal mb-8" />
          
          <p className="text-charcoal/80 font-sans text-[15px] md:text-[16px] leading-[1.8] max-w-3xl mb-8 font-normal">
            Whether you&apos;re a business professional working near Namanve Industrial Park, a family
            on a road trip to Jinja, or planning an event in Mukono — Riders Hotel in Seeta is exactly
            where you need to be. We offer clean, comfortable rooms, a warm restaurant serving Ugandan and continental
            cuisine, a fully equipped events space, and the kind of hospitality that makes you feel
            right at home. Secure parking, fast Wi-Fi, and a team that genuinely cares.
          </p>
          
          <div className="w-16 h-[2px] bg-ocean-teal" />
        </motion.div>
      </div>
    </section>
  )
}
