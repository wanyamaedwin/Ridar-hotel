'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Accommodation', href: '/rooms', sectionId: 'accommodation' },
  { label: 'Dining', href: '/dining', sectionId: 'dining' },
  { label: 'Meetings & Events', href: '/events', sectionId: 'events' },
  { label: 'Offers', href: '/offers', sectionId: 'offers' },
  { label: 'Wellness', href: '/#wellness', sectionId: 'wellness' },
  { label: 'Weddings', href: '/#weddings', sectionId: 'weddings' },
  { label: 'Gallery', href: '/gallery', sectionId: 'gallery' },
  { label: 'Contact', href: '/contact', sectionId: 'contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  /** Smooth-scroll to a section if already on /, else navigate then scroll */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: typeof NAV_ITEMS[0]) => {
      // Items with a sectionId that lives on the home page
      const homeAnchors = ['accommodation', 'dining', 'events', 'offers', 'wellness', 'weddings', 'gallery', 'contact']
      if (!homeAnchors.includes(item.sectionId)) return // let normal Link handle it

      e.preventDefault()

      const scrollToSection = () => {
        const el = document.getElementById(item.sectionId)
        if (el) {
          const headerHeight = 80 // px — matches h-20
          const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }

      if (isHome) {
        scrollToSection()
      } else {
        // Navigate home, then scroll after mount
        router.push('/')
        setTimeout(scrollToSection, 600)
      }

      setMobileOpen(false)
    },
    [isHome, router]
  )

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7] border-b border-[#EDEAE5] h-20 flex items-center shadow-none">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 w-full flex items-center justify-between">

          {/* Left: Logo */}
          <Link href="/" className="flex flex-col items-center leading-none shrink-0 group">
            <span className="font-serif text-[17px] md:text-[19px] font-normal tracking-[0.15em] text-[#1A1A1A] uppercase">
              Riders  Hotel
            </span>

          </Link>

          {/* Right: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              return (
                <a
                  key={item.sectionId}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    'px-3 xl:px-4 py-2 text-[10.5px] font-sans font-medium uppercase tracking-[0.2em] transition-colors whitespace-nowrap text-[#1A1A1A]/70 hover:text-[#B09B7C] cursor-pointer'
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#B09B7C] transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-[#FAF9F7] z-50 flex flex-col px-6 py-8 shadow-none border-l border-[#EDEAE5]"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EDEAE5]">
                <span className="font-serif text-[#1A1A1A] text-xl tracking-wider">Riders Serena</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#9E8B6E] hover:text-[#1A1A1A] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-0">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.sectionId}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="py-3.5 font-sans text-[11.5px] uppercase tracking-[0.15em] border-b border-[#EDEAE5] text-[#1A1A1A]/80 hover:text-[#B09B7C] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so content sits below the fixed 80px header */}
      <div className="h-20" />
    </>
  )
}
