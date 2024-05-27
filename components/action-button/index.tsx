'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import { Spinner } from '../spinner'
import { ObjectValues } from '@/types'

import './index.scss'

const VARIANTS = {
  VISIBLE: { opacity: 1, scale: 1 },
  HIDDEN_SMALL: { opacity: 0, scale: 0.5 },
  HIDDEN_LARGE: { opacity: 0, scale: 1.5 },
}

export const BUTTON_STATE = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const

export type ButtonState = ObjectValues<typeof BUTTON_STATE>

interface ActionButtonProps {
  buttonState: ButtonState
  initialText: string
  successText?: string
  errorText?: string
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function ActionButton(props: ActionButtonProps): JSX.Element {
  const {
    buttonState,
    initialText,
    successText,
    errorText,
    className,
    onClick,
  } = props

  const BUTTON_CONTENT: Record<ButtonState, string | React.ReactNode> = {
    [BUTTON_STATE.IDLE]: initialText,
    [BUTTON_STATE.LOADING]: <Spinner size={18} color='#fff' />,
    [BUTTON_STATE.SUCCESS]: successText || 'Success',
    [BUTTON_STATE.ERROR]: errorText || 'Error',
  }

  return (
    <button
      className={classNames('action-button', {
        [`${className}`]: !!className,
      })}
      onClick={onClick}
      disabled={buttonState !== BUTTON_STATE.IDLE}
    >
      <AnimatePresence mode='popLayout' initial={false}>
        {buttonState === BUTTON_STATE.IDLE ? (
          <motion.span
            key={buttonState}
            className='action-button__content'
            variants={VARIANTS}
            initial={VARIANTS.HIDDEN_SMALL}
            animate={VARIANTS.VISIBLE}
            exit={VARIANTS.HIDDEN_SMALL}
            transition={{
              type: 'spring',
              duration: 0.4,
            }}
          >
            {BUTTON_CONTENT[buttonState]}
          </motion.span>
        ) : (
          <motion.span
            key={buttonState}
            className='action-button__content'
            variants={VARIANTS}
            initial={VARIANTS.HIDDEN_LARGE}
            animate={VARIANTS.VISIBLE}
            exit={VARIANTS.HIDDEN_SMALL}
            transition={{
              type: 'spring',
              duration: 0.3,
            }}
          >
            {BUTTON_CONTENT[buttonState]}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
