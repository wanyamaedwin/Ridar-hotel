import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/hotel/Header'
import Footer from '@/components/hotel/Footer'
import WhatsAppFloat from '@/components/hotel/WhatsAppFloat'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ridar Hotel — Premium Accommodation in Seeta, Mukono, Uganda',
  description:
    'Discover luxury accommodation at Ridar Hotel in Seeta, Mukono. Premium rooms, fine dining, conferences, and events. Located near Kampala–Jinja Highway. Book your stay today.',
  keywords:
    'hotel Seeta, hotel Mukono, luxury accommodation Uganda, Kampala Jinja highway hotel, Namanve business hotel, event venue Uganda, conference hotel Uganda',
  metadataBase: new URL('https://ridarhotel.ug'),
  alternates: {
    canonical: 'https://ridarhotel.ug',
  },
  openGraph: {
    title: 'Ridar Hotel — Seeta, Mukono, Uganda',
    description:
      'Luxury hotel with premium rooms, fine dining, conference facilities, and event spaces in Seeta.',
    type: 'website',
    locale: 'en_UG',
    url: 'https://ridarhotel.ug',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ridar Hotel — Seeta, Mukono',
    description: 'Premium accommodation near Kampala–Jinja Highway',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} bg-background`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Riders Hotel',
              image: 'https://ridershotel.ug/og-image.jpg',
              description:
                'Luxury hotel in Seeta, Mukono with premium rooms, dining, and conference facilities',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Seeta',
                addressRegion: 'Mukono',
                addressCountry: 'UG',
              },
              telephone: '+256770712652',
              email: 'reservations@ridarhotel.co.ug',
              url: 'https://ridarhotel.co.ug',
              priceRange: '$$',
              sameAs: [
                'https://www.facebook.com/ridershotel',
                'https://www.instagram.com/ridershotel',
              ],
              amenityFeature: [
                { name: 'Free Wi-Fi' },
                { name: 'Swimming Pool' },
                { name: 'Restaurant' },
                { name: 'Conference Facilities' },
                { name: '24-Hour Room Service' },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ridar Hotel',
              url: 'https://ridarhotel.co.ug',
              logo: 'https://ridarhotel.co.ug/logo.svg',
              contact: {
                '@type': 'ContactPoint',
                telephone: '+256770712652',
                contactType: 'Hotel Reservations',
              },
              sameAs: [
                'https://www.facebook.com/ridershotel',
                'https://www.instagram.com/ridershotel',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
