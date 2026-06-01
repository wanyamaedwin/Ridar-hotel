import { Metadata } from 'next'
import { DiningPageContent } from '@/components/dining/DiningPageContent'

export const metadata: Metadata = {
  title: 'Dining & Restaurants | Riders Hotel Seeta',
  description:
    'Discover culinary excellence at Riders Hotel. Explore diverse dining venues and exquisite menus featuring local Ugandan ingredients and international cuisine.',
}

export default function DiningPage() {
  return <DiningPageContent />
}
