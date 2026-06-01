'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { HOTEL_INFO } from '@/lib/hotel-data'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay%20at%20Riders%20Hotel.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
    </motion.a>
  )
}
