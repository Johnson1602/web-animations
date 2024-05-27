'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import { DemoWrapper } from '@/components'

import './index.scss'

export default function FeedbackPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedbackContent, setFeedbackContent] = useState('')

  const feedbackFormRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(feedbackFormRef, () => setIsOpen(false))

  return (
    <DemoWrapper className='demo-feedback'>
      <motion.button
        className='feedback__button'
        layoutId='feedback-button'
        onClick={() => {
          setIsOpen(true)
          setFeedbackContent('')
        }}
      >
        <motion.span layoutId='feedback-placeholder'>Feedback</motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='feedback__form'
            ref={feedbackFormRef}
            layoutId='feedback-button'
          >
            <textarea
              name='form-input'
              id='form__input'
              className='form__input'
            />

            <motion.span
              className='form__pseudo-placeholder'
              layoutId='feedback-placeholder'
            >
              Feedback
            </motion.span>

            <button className='form__submit'>Submit</button>
          </motion.div>
        )}
      </AnimatePresence>
    </DemoWrapper>
  )
}
