'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import { DemoWrapper } from '@/components'
import { Form } from './form'

import './index.scss'

const PLACEHOLDER = 'Feedback'

export default function FeedbackPage() {
  const [isOpen, setIsOpen] = useState(false)

  const popoverRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(popoverRef, () => closePopover())

  function closePopover() {
    setIsOpen(false)
  }

  return (
    <DemoWrapper className='feedback'>
      <motion.button
        className='feedback__button'
        layoutId='feedback-container'
        onClick={() => setIsOpen(true)}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.5,
        }}
        style={{ borderRadius: 5 }}
      >
        <motion.span layoutId='placeholder'>{PLACEHOLDER}</motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popoverRef}
            className='feedback__popover'
            layoutId='feedback-container'
            style={{ borderRadius: 10 }}
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.4,
            }}
          >
            <Form placeholder={PLACEHOLDER} closePopover={closePopover} />
          </motion.div>
        )}
      </AnimatePresence>
    </DemoWrapper>
  )
}
