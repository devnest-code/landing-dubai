'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}

/** Scroll-triggered fade/rise. Respects reduced-motion via CSS override. */
export function Reveal({ children, delay = 0, y = 20, className, as = 'div' }: Props) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
