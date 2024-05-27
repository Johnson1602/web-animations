'use client'

import { motion } from 'framer-motion'
import { DemoWrapper } from '@/components'

import './index.scss'

export default function BasicsPage() {
  return (
    <DemoWrapper className='demo-gestures'>
      <motion.button
        className='gestures__button'
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.45 }}
      >
        Hover me
      </motion.button>
    </DemoWrapper>
  )
}
