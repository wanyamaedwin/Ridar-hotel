'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Wifi, Croissant, ArrowRight } from 'lucide-react'

interface RoomCardProps {
  slug: string
  name: string
  price: string
  image: string
  occupancy: string
  breakfast: string
  description?: string
  amenities?: string[]
  delay?: number
}

export default function RoomCard({
  slug,
  name,
  price,
  image,
  occupancy,
  breakfast,
  description,
  delay = 0,
}: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className="group bg-white overflow-hidden border border-[#DDDDDD] flex flex-col rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-103 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="bg-ocean-teal text-deep-navy text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase font-sans">
            {price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-[20px] font-normal text-deep-navy mb-2">{name}</h3>
        {description && (
          <p className="text-[14px] text-charcoal/80 leading-[1.65] mb-4 line-clamp-2 font-normal">{description}</p>
        )}

        <div className="flex items-center gap-4 text-[12px] text-charcoal/70 mb-5 font-sans font-medium">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-ocean-teal" />
            {occupancy}
          </span>
          <span className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-ocean-teal" />
            Free Wi-Fi
          </span>
          <span className="flex items-center gap-1.5">
            <Croissant className="w-3.5 h-3.5 text-ocean-teal" />
            {breakfast}
          </span>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <Link
            href={`/rooms/${slug}`}
            className="flex-1 text-center text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-charcoal border-2 border-[#DDDDDD] py-2 rounded-md hover:bg-[#F5F5F5] hover:border-charcoal transition-all duration-300"
          >
            View Room
          </Link>
          <Link
            href={`/rooms/${slug}#book`}
            className="flex-1 text-center text-[11px] font-sans font-semibold uppercase tracking-[0.15em] bg-ocean-teal text-deep-navy py-2 border-2 border-ocean-teal rounded-md hover:bg-[#8BC5C5] hover:border-[#8BC5C5] transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
          >
            Book Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
