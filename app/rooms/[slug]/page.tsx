import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import RoomDetailContent from '@/components/rooms/RoomDetailContent'
import { hotelData } from '@/lib/hotel-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const room = hotelData.rooms.find((r) => r.slug === slug)
  if (!room) return {}
  return {
    title: `${room.name} | Riders Hotel Seeta`,
    description: room.description,
    openGraph: {
      title: `${room.name} | Riders Hotel Seeta`,
      description: room.description,
    },
  }
}

export function generateStaticParams() {
  return hotelData.rooms.map((r) => ({ slug: r.slug }))
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params
  const room = hotelData.rooms.find((r) => r.slug === slug)
  if (!room) notFound()

  const relatedRooms = hotelData.rooms.filter((r) => r.slug !== slug).slice(0, 3)

  return <RoomDetailContent room={room} relatedRooms={relatedRooms} />
}
