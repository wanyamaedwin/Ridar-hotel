import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { HOTEL_INFO } from '@/lib/hotel-data'

const footerLinks = [
  {
    heading: 'Explore',
    links: [
      { label: 'About Us', href: '/' },
      { label: 'Our Rooms', href: '/#accommodation' },
      { label: 'Dining', href: '/#dining' },
      { label: 'Events & Spaces', href: '/#events' },
    ],
  },
  {
    heading: 'Reservations',
    links: [
      { label: 'Book a Room', href: '/#accommodation' },
      { label: 'Special Offers', href: '/#offers' },
      { label: 'Corporate Rates', href: '/#offers' },
      { label: 'Group Bookings', href: '/#contact' },
    ],
  },
  {
    heading: 'Discover',
    links: [
      { label: 'Gallery', href: '/#gallery' },
      { label: 'Local Area', href: '/' },
      { label: 'FAQs', href: '/#contact' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    heading: 'Stay Connected',
    links: [
      { label: 'WhatsApp Us', href: `https://wa.me/${HOTEL_INFO.whatsapp}` },
      { label: 'Email Us', href: `mailto:${HOTEL_INFO.email}` },
      { label: 'Call Us', href: `tel:${HOTEL_INFO.phone}` },
      { label: 'Newsletter', href: '#newsletter' },
    ],
  },
]

const socialLinks = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter / X' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Main footer body */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 pb-10">

        {/* Centered Brand Logotype */}
        <div className="flex flex-col items-center text-center mb-16 pb-16 border-b border-white/10">
          {/* Decorative emblem / monogram */}
          <div className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 64"
              className="w-10 h-14 fill-white opacity-90"
              aria-hidden="true"
            >
              {/* Simple stylised leaf / tree emblem */}
              <path d="M24 2 C24 2 8 16 8 32 C8 44 16 56 24 62 C32 56 40 44 40 32 C40 16 24 2 24 2Z" opacity="0.15" />
              <path d="M24 8 C24 8 12 20 12 33 C12 43 17 53 24 58 C31 53 36 43 36 33 C36 20 24 8 24 8Z" opacity="0.3" />
              <path d="M24 14 C24 14 16 24 16 34 C16 42 19 50 24 55 C29 50 32 42 32 34 C32 24 24 14 24 14Z" opacity="0.6" />
              <path d="M24 20 C24 20 19 28 19 35 C19 41 21 47 24 51 C27 47 29 41 29 35 C29 28 24 20 24 20Z" />
              <rect x="23" y="51" width="2" height="11" rx="1" />
            </svg>
          </div>
          <span className="font-serif font-light text-3xl md:text-4xl tracking-[0.15em] text-white uppercase">
            Ridar Hotel
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 mt-2">
            Seeta · Mukono · Uganda
          </span>
        </div>

        {/* 4-column Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="font-serif text-white text-sm font-light italic tracking-wide mb-6">
                {col.heading}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/45 hover:text-white/90 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms & Conditions', href: '#' },
              { label: 'Cookie Preferences', href: '#' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Prompt */}
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-white/60 transition-colors duration-300 whitespace-nowrap"
          >
            {HOTEL_INFO.phone}
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-white/20">
            &copy; {new Date().getFullYear()} Ridar Hotel, Seeta, Mukono, Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
