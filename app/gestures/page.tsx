'use client'

import { motion } from 'framer-motion'
import { DemoWrapper } from '@/components'

export default function BasicsPage() {
  return (
    <DemoWrapper>
      <motion.button
        className='demo-button demo-button--primary'
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.45 }}
      >
        Hover me
      </motion.button>
    </DemoWrapper>
  )
}
