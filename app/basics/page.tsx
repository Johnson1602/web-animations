'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import { DemoWrapper } from '@/components'

import './index.scss'

export default function BasicsPage() {
  const [isManuel, setIsManuel] = useState(false)
  const [isAnimate, setIsAnimate] = useState(false)

  const checkboxRef = useRef<HTMLInputElement>(null)

  return (
    <DemoWrapper className='demo-basics'>
      <div className='manuel-control__wrapper'>
        <input
          ref={checkboxRef}
          id='manuel-control__checkbox'
          className='manuel-control__checkbox'
          type='checkbox'
          checked={isManuel}
          onChange={() => setIsManuel(!isManuel)}
        />

        <label
          htmlFor='manuel-control__checkbox'
          className='manuel-control__label'
        >
          Manuel control
        </label>

        <motion.div
          className={classNames('manuel-control__switch', {
            'manuel-control__switch--on': isManuel,
          })}
          initial={{ backgroundColor: 'var(--color-neutral-dark)' }}
          animate={{
            backgroundColor: isManuel
              ? 'var(--color-accent-teal)'
              : 'var(--color-neutral-dark)',
          }}
          onClick={() => {
            if (checkboxRef.current) {
              checkboxRef.current.click()
            }
          }}
        >
          <motion.div
            className='manuel-control__switch-handle'
            layout
            transition={{
              type: 'spring',
              stiffness: 550,
              damping: 30,
            }}
          />
        </motion.div>

        <AnimatePresence>
          {isManuel && (
            <motion.button
              className='demo-button manuel-control__button'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setIsAnimate(!isAnimate)}
              transition={{
                type: 'spring',
                stiffness: 550,
                damping: 30,
              }}
            >
              Animate
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <DemoWrapper>
        {isManuel ? (
          <motion.button
            className='demo-button'
            animate={{
              backgroundColor: isAnimate
                ? 'var(--color-accent-blue)'
                : 'var(--color-secondary)',
              color: isAnimate
                ? 'var(--color-secondary)'
                : 'var(--color-primary)',
              scale: isAnimate ? 1.5 : 1,
            }}
          >
            Button
          </motion.button>
        ) : (
          <motion.button
            className='demo-button'
            animate={{
              backgroundColor: 'var(--color-accent-blue)',
              color: 'var(--color-secondary)',
              // rotate: 360,
              scale: 1.5,
            }}
            transition={{
              // delay: 1,
              // ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.5,
              repeatType: 'reverse',
            }}
          >
            Button
          </motion.button>
        )}
      </DemoWrapper>
    </DemoWrapper>
  )
}
