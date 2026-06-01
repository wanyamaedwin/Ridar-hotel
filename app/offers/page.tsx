import { Metadata } from 'next'
import { OffersPageContent } from '@/components/offers/OffersPageContent'

export const metadata: Metadata = {
  title: 'Exclusive Offers | Riders Hotel Seeta',
  description:
    'Discover exclusive promotions at Riders Hotel. Get discounts on room bookings, packages, and experiences in Seeta, Mukono, Uganda.',
}

export default function OffersPage() {
  return <OffersPageContent />
}
