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

export const metadata: Metadata = {
  title: 'Riders Hotel — Premium Luxury Hotel in Seeta, Mukono, Uganda',
  description:
    'Experience luxury accommodation at Riders Hotel in Seeta, Mukono. Book premium rooms, fine dining, conferences, and events near Kampala–Jinja Highway.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickBookingBar />
      <IntroSection />
      <RoomsPreview />
      <DiningPreview />
      <EventsPreview />
      <OffersPreview />
      <WhyStaySection />
      <GalleryPreview />
      <MapContactSection />
    </>
  )
}
