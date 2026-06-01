'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  light?: boolean
}

export default function FAQAccordion({ faqs, light = false }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={cn(
              'w-full flex items-center justify-between py-4 text-left gap-4',
              light ? 'text-white' : 'text-charcoal'
            )}
            aria-expanded={open === i}
          >
            <span className="font-sans font-medium text-base">{faq.question}</span>
            <span className={cn('shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors',
              open === i
                ? 'border-primary bg-primary text-charcoal'
                : light ? 'border-white/30 text-white/50' : 'border-border text-muted-foreground'
            )}>
              {open === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className={cn('pb-4 text-sm leading-relaxed', light ? 'text-white/70' : 'text-muted-foreground')}>
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
