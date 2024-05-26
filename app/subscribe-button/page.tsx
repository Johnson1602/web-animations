'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DemoWrapper, Spinner } from '@/components'

import './index.scss'

const BUTTON_STATES = {
  IDLE: 'Subscribe',
  LOADING: <Spinner size={18} color='#fff' />,
  SUCCESS: `You're in! 🎉`,
  ERROR: 'Oops! Try again.',
} as const

type ButtonState = keyof typeof BUTTON_STATES

const VARIANTS = {
  VISIBLE: { opacity: 1, scale: 1 },
  HIDDEN_SMALL: { opacity: 0, scale: 0.5 },
  HIDDEN_LARGE: { opacity: 0, scale: 1.5 },
}

export default function SubscribeButtonPage() {
  const [buttonState, setButtonState] = useState<ButtonState>('IDLE')

  async function handleClick() {
    setButtonState('LOADING')

    // Simulate a network request
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setButtonState('SUCCESS')
    } catch {
      setButtonState('ERROR')
    }

    // Reset the button state after 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setButtonState('IDLE')
  }

  return (
    <DemoWrapper className='demo-subscribe-button'>
      <button
        className='subscribe-button'
        disabled={buttonState !== 'IDLE'}
        onClick={handleClick}
      >
        <AnimatePresence mode='popLayout' initial={false}>
          {buttonState === 'IDLE' ? (
            <motion.span
              key={buttonState}
              className='subscribe-button__content'
              variants={VARIANTS}
              initial={VARIANTS.HIDDEN_SMALL}
              animate={VARIANTS.VISIBLE}
              exit={VARIANTS.HIDDEN_SMALL}
              transition={{
                type: 'spring',
                duration: 0.4,
              }}
            >
              {BUTTON_STATES[buttonState]}
            </motion.span>
          ) : (
            <motion.span
              key={buttonState}
              className='subscribe-button__content'
              variants={VARIANTS}
              initial={VARIANTS.HIDDEN_LARGE}
              animate={VARIANTS.VISIBLE}
              exit={VARIANTS.HIDDEN_SMALL}
              transition={{
                type: 'spring',
                duration: 0.3,
              }}
            >
              {BUTTON_STATES[buttonState]}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </DemoWrapper>
  )
}
