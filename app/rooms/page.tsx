import type { Metadata } from 'next'
import RoomsPageContent from '@/components/rooms/RoomsPageContent'

export const metadata: Metadata = {
  title: 'Rooms & Suites | Riders Hotel Seeta',
  description:
    'Browse premium rooms and suites at Riders Hotel. Deluxe, executive, twin, and family rooms with modern amenities in Seeta, Mukono.',
}

export default function RoomsPage() {
  return <RoomsPageContent />
}
