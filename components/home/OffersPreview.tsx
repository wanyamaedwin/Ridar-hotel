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
    <section id="offers" className="py-28 bg-[#FAF9F7]" aria-label="Exclusive offers and packages">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="text-center mb-16">
          <span className="text-[#B09B7C] text-[10.5px] uppercase tracking-[0.25em] font-sans font-semibold mb-2 block">
            Special Offers
          </span>
          <h2 className="font-serif text-[38px] font-light text-[#1A1A1A] leading-tight mb-4">
            Exclusive Packages &amp; Deals
          </h2>
          <div className="w-12 h-[1px] bg-[#B09B7C]/40 mx-auto mb-8" />
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
              className="bg-white border border-[#EDEAE5] shadow-none hover:shadow-none transition-all duration-300 flex flex-col h-full rounded-none"
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
                <span className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1.5 rounded-none shadow-none">
                  {offer.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span className="text-[#B09B7C] text-[10px] uppercase tracking-[0.15em] font-sans font-semibold block mb-2">
                  {offer.subtitle}
                </span>
                <h3 className="font-serif text-[22px] font-light text-[#1A1A1A] leading-snug mb-4">
                  {offer.title}
                </h3>
                <p className="text-[#4A4A4A] text-[13.5px] leading-[1.6] mb-6 font-light">
                  {offer.description}
                </p>

                {/* Bullet Inclusions list */}
                <div className="flex flex-col gap-2 mb-8 mt-auto border-t border-[#EDEAE5] pt-5">
                  {offer.inclusions.slice(0, 3).map((inclusion) => (
                    <div key={inclusion} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B09B7C] shrink-0" />
                      <span className="text-[12px] text-medium-gray font-sans font-light">{inclusion}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/offers"
                  className="w-full bg-[#1A1A1A] text-white text-[11.5px] uppercase tracking-[0.18em] font-semibold py-3.5 text-center hover:bg-[#B09B7C] transition-all duration-300 rounded-none shadow-none block cursor-pointer"
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
