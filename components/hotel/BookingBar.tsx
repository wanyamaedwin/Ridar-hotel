'use client'

import { useState } from 'react'
import { Calendar, Users, Search, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BookingBarProps {
  variant?: 'hero' | 'page'
  className?: string
}

export default function BookingBar({ variant = 'hero', className }: BookingBarProps) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')
  const [roomType, setRoomType] = useState('')

  const isHero = variant === 'hero'

  return (
    <div
      className={cn(
        'shadow-lg',
        isHero
          ? 'bg-white/95 backdrop-blur-sm p-5 md:p-6'
          : 'bg-white border border-border p-5 md:p-6',
        className
      )}
      style={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)' }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Check-in */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-[0.15em] font-sans font-medium text-chocolate">
            Check-in
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-gray" />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-border text-[13px] text-foreground bg-white focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-[0.15em] font-sans font-medium text-chocolate">
            Check-out
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-gray" />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-border text-[13px] text-foreground bg-white focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-[0.15em] font-sans font-medium text-chocolate">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-gray" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-10 pr-8 py-3 border border-border text-[13px] text-foreground bg-white appearance-none focus:outline-none focus:border-primary"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={String(n)}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-gray pointer-events-none" />
          </div>
        </div>

        {/* Room Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-[0.15em] font-sans font-medium text-chocolate">
            Room Type
          </label>
          <div className="relative">
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-medium-gray pointer-events-none" />
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full pl-3 pr-8 py-3 border border-border text-[13px] text-foreground bg-white appearance-none focus:outline-none focus:border-primary"
            >
              <option value="">Any Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="executive">Executive Room</option>
              <option value="twin">Twin Room</option>
              <option value="family">Family Room</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button className="w-full md:w-auto bg-primary text-white text-[16px] font-normal px-8 py-2.5 rounded-[5px] hover:bg-[#B85500] transition-colors flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          Search Rooms
        </button>
      </div>
    </div>
  )
}
