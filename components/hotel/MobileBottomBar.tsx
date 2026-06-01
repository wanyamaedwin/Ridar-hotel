'use client'

import Link from 'next/link'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { HOTEL_INFO } from '@/lib/hotel-data'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-charcoal border-t border-white/10">
      <div className="flex items-stretch divide-x divide-white/10">
        <Link
          href="/rooms"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-primary hover:bg-white/5 transition-colors"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-wide">Book</span>
        </Link>
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-green-400 hover:bg-white/5 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-wide">WhatsApp</span>
        </a>
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-white/80 hover:bg-white/5 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium uppercase tracking-wide">Call</span>
        </a>
      </div>
    </div>
  )
}
