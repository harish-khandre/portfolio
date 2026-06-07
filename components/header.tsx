'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' }
})

export default function Header() {
  return (
    <header>
      <motion.h1
        className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight text-accent"
        {...fadeUp(0)}
      >
        Harish Khandre
      </motion.h1>
      <motion.p className="mt-2 font-sans text-sm text-muted" {...fadeUp(0.1)}>
        Full Stack Engineer at Pordios Labs
      </motion.p>
    </header>
  )
}
