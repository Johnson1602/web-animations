'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { DemoWrapper } from '@/components'

import './index.scss'

export default function DynamicHeightPage() {
  const [showExtraContent, setShowExtraContent] = useState(false)
  const [divRef, bounds] = useMeasure()

  return (
    <DemoWrapper className='demo-dynamic-height'>
      <motion.div
        className='card__wrapper'
        animate={{
          height: bounds.height,
        }}
      >
        <div className='card' ref={divRef}>
          <h1 className='card__title'>Cupidatat</h1>
          <p className='card__paragraph'>
            Qui excepteur amet veniam. In in esse tempor. Minim Lorem duis sit
            mollit enim dolore enim irure velit incididunt cillum qui
            reprehenderit nostrud duis.
          </p>
          <AnimatePresence>
            {showExtraContent && (
              <motion.p
                className='card__paragraph'
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.2 }}
                transition={{ duration: 0.1 }}
              >
                Sint id commodo in tempor. Sit ad veniam elit excepteur amet
                duis irure. Sint commodo occaecat tempor Lorem ut fugiat nisi.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <button
        className='action-button'
        onClick={() => setShowExtraContent(!showExtraContent)}
      >
        Show extra content
      </button>
    </DemoWrapper>
  )
}
