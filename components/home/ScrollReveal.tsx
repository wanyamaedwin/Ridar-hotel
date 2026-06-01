'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export default function ScrollReveal({ children, direction = 'up', delay = 0 }: ScrollRevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.98
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Custom luxury cubic-bezier curve
      }}
    >
      {children}
    </motion.div>
  )
}
