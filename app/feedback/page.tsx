'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Form } from './form'

import './index.scss'

const PLACEHOLDER = 'Feedback'

export default function FeedbackPage() {
  const [isOpen, setIsOpen] = useState(false)

  function closePopover() {
    setIsOpen(false)
  }

  return (
    <div className='feedback'>
      <motion.button
        className='feedback__button'
        layoutId='feedback-container'
        onClick={() => setIsOpen(true)}
        // transition={{
        //   duration: 3,
        // }}
      >
        <motion.span layoutId='placeholder'>{PLACEHOLDER}</motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='feedback__popover'
            layoutId='feedback-container'
            style={{ borderRadius: 10 }}
            // transition={{
            //   duration: 3,
            // }}
          >
            <Form placeholder={PLACEHOLDER} closePopover={closePopover} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
