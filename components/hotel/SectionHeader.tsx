'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-3',
            light ? 'text-primary' : 'text-primary'
          )}
        >
          {eyebrow}
        </span>
      )}
      <div className={cn('divider-orange mb-4', align === 'center' && 'mx-auto')} />
      <h2
        className={cn(
          'font-serif text-[28px] md:text-[38px] font-normal leading-[1.1]',
          light ? 'text-white' : 'text-chocolate'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-[15px] leading-[1.6] max-w-2xl',
            light ? 'text-white/80' : 'text-dark-gray'
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
