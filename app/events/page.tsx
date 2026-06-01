import type { Metadata } from 'next'
import EventsPageContent from '@/components/events/EventsPageContent'

export const metadata: Metadata = {
  title: 'Events & Conferences | Riders Hotel Seeta',
  description:
    'Host conferences, weddings, corporate meetings and celebrations at Riders Hotel. Professional event spaces with dedicated coordination team in Seeta, Mukono.',
}

export default function EventsPage() {
  return <EventsPageContent />
}
