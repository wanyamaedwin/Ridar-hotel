import { Metadata } from 'next'
import { GalleryPageContent } from '@/components/gallery/GalleryPageContent'

export const metadata: Metadata = {
  title: 'Photo Gallery | Riders Hotel Seeta',
  description:
    'Explore our photo gallery showcasing premium rooms, dining venues, facilities, and beautiful grounds at Riders Hotel in Seeta, Uganda.',
}

export default function GalleryPage() {
  return <GalleryPageContent />
}
