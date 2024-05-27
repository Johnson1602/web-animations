'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'
import classNames from 'classnames'
import { DemoWrapper, Spinner } from '@/components'

import './index.scss'

const PLACEHOLDER = 'Feedback'

const FORM_STATES = {
  IDLE: 'Submit',
  LOADING: <Spinner size={18} color='gray' />,
  SUCCESS: 'Thank you!',
  ERROR: 'Try again.',
}

type FormState = keyof typeof FORM_STATES

export default function FeedbackPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedbackContent, setFeedbackContent] = useState('')
  const [formState, setFormState] = useState<FormState>('IDLE')

  const feedbackFormRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(feedbackFormRef, () => setIsOpen(false))

  async function handleSubmit() {
    setFormState('LOADING')

    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      setFormState('SUCCESS')

      setTimeout(() => {
        setIsOpen(false)
        setFormState('IDLE')
      }, 2000)
    } catch {
      setFormState('ERROR')

      setTimeout(() => setFormState('IDLE'), 2000)
    }
  }

  return (
    <DemoWrapper className='demo-feedback'>
      <motion.button
        className='feedback__button'
        layoutId='feedback-button'
        onClick={() => {
          setIsOpen(true)
          setFeedbackContent('')
          setFormState('IDLE')
        }}
      >
        <motion.span layoutId='feedback-placeholder'>{PLACEHOLDER}</motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='feedback__form-wrapper'
            ref={feedbackFormRef}
            layoutId='feedback-button'
          >
            <motion.div
              className='feedback__form'
              animate={{
                y: formState === 'SUCCESS' ? 30 : 0,
                opacity: formState === 'SUCCESS' ? 0 : 1,
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              }}
            >
              <textarea
                name='form-input'
                id='form__input'
                className='form__input'
                value={feedbackContent}
                onChange={(e) => setFeedbackContent(e.target.value)}
              />
              <motion.span
                className={classNames('form__pseudo-placeholder', {
                  'form__pseudo-placeholder--hide': !!feedbackContent,
                })}
                layoutId='feedback-placeholder'
              >
                {PLACEHOLDER}
              </motion.span>
              <button className='form__submit' onClick={handleSubmit}>
                <AnimatePresence mode='popLayout' initial={false}>
                  <motion.span
                    key={formState}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    {FORM_STATES[formState]}
                  </motion.span>
                </AnimatePresence>
              </button>
            </motion.div>

            {formState === 'SUCCESS' && (
              <motion.div
                className='form__cover'
                initial={{ y: -32, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.4,
                }}
              >
                <span className='cover__text'>{FORM_STATES.SUCCESS}</span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </DemoWrapper>
  )
}
