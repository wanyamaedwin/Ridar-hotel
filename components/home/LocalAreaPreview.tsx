'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/hotel/SectionHeader'
import { LOCAL_ATTRACTIONS } from '@/lib/hotel-data'

export default function LocalAreaPreview() {
  return (
    <section className="py-20 md:py-28 bg-background" aria-label="Local area and attractions">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Local Area"
          title="Stay Connected to Mukono, Seeta & Beyond"
          subtitle="Explore the best of Uganda's eastern corridor from the comfort of Riders Hotel."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LOCAL_ATTRACTIONS.map((place, i) => (
            <motion.div
              key={place.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.25, delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative h-56">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-start gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span className="text-primary text-xs font-sans font-medium">{place.distance}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-white">{place.name}</h3>
                <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mt-1">{place.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold px-7 py-3 rounded-full hover:bg-primary hover:text-charcoal transition-colors text-sm"
          >
            Explore Local Area <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
