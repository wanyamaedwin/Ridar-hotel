import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import QuickBookingBar from '@/components/hotel/QuickBookingBar'
import IntroSection from '@/components/home/IntroSection'
import RoomsPreview from '@/components/home/RoomsPreview'
import WhyStaySection from '@/components/home/WhyStaySection'
import EventsPreview from '@/components/home/EventsPreview'
import DiningPreview from '@/components/home/DiningPreview'
import OffersPreview from '@/components/home/OffersPreview'
import GalleryPreview from '@/components/home/GalleryPreview'
import MapContactSection from '@/components/home/MapContactSection'
import ScrollReveal from '@/components/home/ScrollReveal'

export const metadata: Metadata = {
  title: 'Ridar Hotel — Premium Luxury Hotel in Seeta, Mukono, Uganda',
  description:
    'Experience luxury accommodation at Ridar Hotel in Seeta, Mukono. Book premium rooms, fine dining, conferences, and events near Kampala–Jinja Highway.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickBookingBar />

      <ScrollReveal>
        <IntroSection />
      </ScrollReveal>

      <ScrollReveal>
        <RoomsPreview />
      </ScrollReveal>

      <ScrollReveal>
        <DiningPreview />
      </ScrollReveal>

      <ScrollReveal>
        <EventsPreview />
      </ScrollReveal>

      <ScrollReveal>
        <OffersPreview />
      </ScrollReveal>

      <ScrollReveal>
        <WhyStaySection />
      </ScrollReveal>

      <ScrollReveal>
        <GalleryPreview />
      </ScrollReveal>

      <ScrollReveal>
        <MapContactSection />
      </ScrollReveal>
    </>
  )
}
