'use client'

import { motion } from 'framer-motion'
import { Tag, Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { OFFERS } from '@/lib/hotel-data'

export default function OffersPreview() {
  const previewOffers = OFFERS.slice(0, 3)

  // Map generated romantic getaway image to weekend getaway slug
  const getOfferImage = (offer: typeof OFFERS[0]) => {
    if (offer.slug === 'weekend-getaway') {
      return '/assets/romantic_getaway.png'
    }
    return offer.image
  }

  return (
    <section id="offers" className="py-28 bg-white" aria-label="Exclusive offers and packages">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="text-center mb-16">
          <span className="text-ocean-teal text-[11px] uppercase tracking-[0.25em] font-sans font-semibold mb-2 block">
            Special Offers
          </span>
          <h2 className="font-serif text-[38px] font-normal text-deep-navy leading-tight mb-4">
            Exclusive Packages &amp; Deals
          </h2>
          <div className="w-12 h-[2px] bg-ocean-teal mx-auto mb-8" />
        </div>

        {/* 3-Column Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewOffers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[#DDDDDD] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col h-full rounded-md"
            >
              {/* Image Container with Discount Badge */}
              <div className="relative h-60 w-full overflow-hidden group">
                <Image
                  src={getOfferImage(offer)}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute top-4 left-4 bg-ocean-teal text-deep-navy text-[11px] uppercase tracking-[0.15em] font-semibold px-3.5 py-1.5 rounded-full shadow-none">
                  {offer.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="text-ocean-teal text-[11px] uppercase tracking-[0.15em] font-sans font-semibold block mb-2">
                  {offer.subtitle}
                </span>
                <h3 className="font-serif text-[22px] font-normal text-deep-navy leading-snug mb-4">
                  {offer.title}
                </h3>
                <p className="text-charcoal/80 text-[14px] leading-[1.65] mb-6 font-normal">
                  {offer.description}
                </p>

                {/* Bullet Inclusions list */}
                <div className="flex flex-col gap-2 mb-8 mt-auto border-t border-[#DDDDDD] pt-5">
                  {offer.inclusions.slice(0, 3).map((inclusion) => (
                    <div key={inclusion} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-ocean-teal shrink-0" />
                      <span className="text-[13px] text-charcoal/70 font-sans font-medium">{inclusion}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/offers"
                  className="btn-primary w-full"
                >
                  Claim Offer
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
