import { Metadata } from 'next'
import { ContactPageContent } from '@/components/contact/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Us | Riders Hotel Seeta, Mukono',
  description:
    'Get in touch with Riders Hotel in Seeta, Mukono. Find our contact details, operating hours, and contact form for inquiries and bookings.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
