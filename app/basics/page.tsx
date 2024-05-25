'use client'

import { motion } from 'framer-motion'
import { DemoWrapper } from '@/components'

export default function BasicsPage() {
  return (
    <DemoWrapper>
      <motion.button
        className='demo-button'
        animate={{
          backgroundColor: '#ff0080',
          color: '#fff',
          // rotate: 360,
          scale: 1.5,
        }}
        transition={{
          delay: 1,
          // ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType: 'reverse',
        }}
      >
        Click me
      </motion.button>
    </DemoWrapper>
  )
}
