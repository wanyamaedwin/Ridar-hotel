'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      aria-label="Book your stay"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/riders-frontview.jpg)' }}
      />
      <div className="absolute inset-0 bg-chocolate/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange text-xs uppercase tracking-[0.25em] font-sans font-medium block mb-3"
        >
          Book Direct — Best Rate Guaranteed
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="divider-orange mx-auto mb-5"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-medium text-white leading-tight text-balance mb-5"
        >
          Your Stay in Seeta Starts Here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
        >
          Clean rooms, warm hospitality, great food, and easy access to everything that matters —
          all in one place in Seeta, Mukono.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.02 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/rooms"
            className="bg-orange text-chocolate font-semibold px-8 py-3.5 rounded-none hover:bg-taupe transition-colors text-sm flex items-center gap-2"
          >
            Check Availability <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="border border-cream/40 text-cream font-semibold px-8 py-3.5 rounded-none hover:bg-cream/10 transition-colors text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-green-400" />
            Contact Reservations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
