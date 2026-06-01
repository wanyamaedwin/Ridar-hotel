'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeader from '@/components/hotel/SectionHeader'
import { TESTIMONIALS } from '@/lib/hotel-data'

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-chocolate" aria-label="Guest reviews">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Guest Reviews"
          title="What Our Guests Are Saying"
          subtitle="Real experiences from business travelers, families, couples, and event guests."
          light
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map(({ name, role, location, stars, text, avatar }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-none p-5 flex flex-col hover:border-orange/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: stars }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-orange text-orange" />
                ))}
              </div>

              <p className="text-white/75 text-sm leading-relaxed flex-1 mb-5 font-sans">
                &ldquo;{text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={avatar}
                  alt={name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-sm font-medium font-sans">{name}</p>
                  <p className="text-white/50 text-xs">{role} · {location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
