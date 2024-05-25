'use client'

import { motion } from 'framer-motion'
import { DemoWrapper } from '@/components'

export default function BasicsPage() {
  return (
    <DemoWrapper>
      <motion.div
        className='demo-div'
        animate={{
          scale: [1, 1, 3, 3, 3, 1, 1],
          rotate: [0, 0, 180, 180, 180, 0, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '50%', '0%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
          duration: 2,
          ease: 'easeInOut',
        }}
      />
    </DemoWrapper>
  )
}
