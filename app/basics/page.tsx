'use client'

import { useState, Fragment } from 'react'
import { motion } from 'framer-motion'
import { DemoWrapper } from '@/components'

export default function BasicsPage() {
  const [isManuel, setIsManuel] = useState(false)
  const [isAnimate, setIsAnimate] = useState(false)

  return (
    <Fragment>
      <div className='manuel-control__wrapper'>
        <div className='manuel-control'>
          <input
            id='manuel-control__checkbox'
            type='checkbox'
            checked={isManuel}
            onChange={() => setIsManuel(!isManuel)}
          />
          <label
            htmlFor='manuel-control__checkbox'
            className='manuel-control__label'
          >
            Manuel
          </label>
        </div>
        {isManuel && (
          <button
            className='demo-button manuel-control__button'
            onClick={() => setIsAnimate(!isAnimate)}
          >
            Animate
          </button>
        )}
      </div>
      <DemoWrapper>
        {isManuel ? (
          <motion.button
            className='demo-button'
            animate={{
              backgroundColor: isAnimate ? '#ff0080' : '#f0f0f0',
              color: isAnimate ? '#fff' : '#191919',
              scale: isAnimate ? 1.5 : 1,
            }}
          >
            Button
          </motion.button>
        ) : (
          <motion.button
            className='demo-button'
            animate={{
              backgroundColor: '#ff0080',
              color: '#fff',
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
    </Fragment>
  )
}
