import { Metadata } from 'next'
import { LocalAreaPageContent } from '@/components/local/LocalAreaPageContent'

export const metadata: Metadata = {
  title: 'Explore Seeta & Local Area | Riders Hotel',
  description:
    'Explore attractions near Riders Hotel in Seeta. Discover Ugandan culture, heritage sites, natural beauty, and nearby destinations around Mukono.',
}

export default function LocalAreaPage() {
  return <LocalAreaPageContent />
}
