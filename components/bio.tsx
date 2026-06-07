'use client'

import { motion } from 'framer-motion'
import { Metric, Tech } from '@/components/ui/highlight'

export default function Bio() {
  return (
    <motion.p
      className="font-sans text-[1.0625rem] leading-[1.6] text-fg/80"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
    >
      Full Stack Engineer with <Metric>2 years</Metric> shipping enterprise and
      government platforms handling <Metric>20M+ records</Metric>, with a
      measurable <Metric>67% API and dashboard performance improvement</Metric>.
      Proficient in <Tech>TypeScript</Tech>, <Tech>React</Tech>, and{' '}
      <Tech>NestJS</Tech> with hands-on experience integrating agentic
      workflows.
    </motion.p>
  )
}
