'use client'

import { useState } from 'react'
import { MapPin, Calendar, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Counter {
  rooms: number
  adults: number
  children: number
}

function CounterField({
  label,
  value,
  onDecrement,
  onIncrement,
  min = 0,
}: {
  label: string
  value: number
  onDecrement: () => void
  onIncrement: () => void
  min?: number
}) {
  return (
    <div className="flex flex-col justify-center px-5 py-4 gap-1 min-w-[100px]">
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ocean-teal font-semibold whitespace-nowrap">
        {label}
      </span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrement}
          disabled={value <= min}
          className="w-5 h-5 flex items-center justify-center text-charcoal/50 hover:text-charcoal disabled:opacity-25 transition-colors font-sans text-base leading-none cursor-pointer"
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span className="font-serif text-[18px] font-light text-deep-navy min-w-[16px] text-center leading-none">
          {value}
        </span>
        <button
          type="button"
          onClick={onIncrement}
          className="w-5 h-5 flex items-center justify-center text-charcoal/50 hover:text-charcoal transition-colors font-sans text-base leading-none cursor-pointer"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default function QuickBookingBar() {
  // Default check-in = today, check-out = tomorrow
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86_400_000).toISOString().split('T')[0]

  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(tomorrow)
  const [counter, setCounter] = useState<Counter>({ rooms: 1, adults: 2, children: 0 })

  const adjust = (field: keyof Counter, delta: number, min = 0) =>
    setCounter((prev) => ({ ...prev, [field]: Math.max(min, prev[field] + delta) }))

  return (
    <div className="w-full bg-white border-b border-[#DDDDDD] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-9">
        <div className="flex flex-wrap md:flex-nowrap items-stretch divide-x divide-[#DDDDDD]">

          {/* Destination — static for single-property hotel */}
          <div className="flex flex-col justify-center px-5 py-4 gap-1 flex-1 min-w-[180px]">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ocean-teal font-semibold">
              Where do you want to go?
            </span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-ocean-teal shrink-0" />
              <span className="font-serif text-[15px] font-light text-deep-navy">
                Ridar Hotel, Seeta
              </span>
            </div>
          </div>

          {/* Check-in */}
          <div className="flex flex-col justify-center px-5 py-4 gap-1 min-w-[150px]">
            <label
              htmlFor="qb-checkin"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-ocean-teal font-semibold cursor-pointer"
            >
              Check-in
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-charcoal/40 shrink-0" />
              <input
                id="qb-checkin"
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="font-serif text-[15px] font-light text-deep-navy bg-transparent border-none outline-none w-full cursor-pointer focus:ring-0"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex flex-col justify-center px-5 py-4 gap-1 min-w-[150px]">
            <label
              htmlFor="qb-checkout"
              className="font-sans text-[10px] uppercase tracking-[0.2em] text-ocean-teal font-semibold cursor-pointer"
            >
              Check-out
            </label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-charcoal/40 shrink-0" />
              <input
                id="qb-checkout"
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="font-serif text-[15px] font-light text-deep-navy bg-transparent border-none outline-none w-full cursor-pointer focus:ring-0"
              />
            </div>
          </div>

          {/* Rooms */}
          <CounterField
            label="Rooms"
            value={counter.rooms}
            min={1}
            onDecrement={() => adjust('rooms', -1, 1)}
            onIncrement={() => adjust('rooms', 1)}
          />

          {/* Adults */}
          <CounterField
            label="Adults"
            value={counter.adults}
            min={1}
            onDecrement={() => adjust('adults', -1, 1)}
            onIncrement={() => adjust('adults', 1)}
          />

          {/* Children */}
          <CounterField
            label="Children"
            value={counter.children}
            min={0}
            onDecrement={() => adjust('children', -1, 0)}
            onIncrement={() => adjust('children', 1)}
          />

          {/* CTA */}
          <div className="flex flex-col items-center justify-center px-5 py-4 gap-1 min-w-[140px]">
            <Link
              href="/"
              className="btn-primary w-full text-center whitespace-nowrap"
            >
              Book Now
            </Link>
            <button
              type="button"
              className="font-sans text-[10px] text-ocean-teal hover:text-deep-navy transition-colors tracking-[0.1em] uppercase mt-0.5 flex items-center gap-1 cursor-pointer"
            >
              Modify Reservation
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
