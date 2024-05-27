'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { DemoWrapper } from '@/components'

import './index.scss'

const TABS = [
  {
    id: 1,
    name: 'Mobile',
    backgroundColor: 'var(--color-neutral-light)',
  },
  {
    id: 2,
    name: 'Wearables',
    backgroundColor: 'var(--color-accent-blue)',
  },
  {
    id: 3,
    name: 'Smart Home',
    backgroundColor: 'var(--color-accent-teal)',
  },
  {
    id: 4,
    name: 'Lifestyle',
    backgroundColor: 'var(--color-accent-magenta)',
  },
]

export default function Example() {
  const [open, setOpen] = useState(false)
  const [justifyContent, setJustifyContent] = useState<
    'flex-start' | 'flex-end'
  >('flex-start')
  const [activeTab, setActiveTab] = useState(-1)

  return (
    <DemoWrapper className='demo-layout__wrapper'>
      <div className='demo-full-screen__wrapper'>
        <motion.div
          className='demo-full-screen'
          onClick={() => setOpen(!open)}
          style={
            open
              ? {
                  position: 'fixed',
                  inset: 0,
                  top: 'var(--header-height)',
                  borderRadius: 0,
                }
              : { height: 50, width: 50, borderRadius: 8 }
          }
          layout
        />
      </div>

      <div className='demo-change-justify__wrapper'>
        <div
          className='demo-change-justify__ball-container'
          style={{
            justifyContent,
          }}
        >
          <motion.div className='demo-change-justify__ball' layout />
        </div>
        <button
          className='demo-change-justify__button'
          onClick={() =>
            setJustifyContent(
              justifyContent === 'flex-end' ? 'flex-start' : 'flex-end'
            )
          }
        >
          Change justify-content
        </button>
      </div>

      <div className='demo-highlight'>
        <ul className='demo-highlight__list'>
          {TABS.map((tab, index) => (
            <li
              key={`${tab.id}-${index}`}
              className='demo-highlight__item'
              onMouseOver={() => setActiveTab(tab.id)}
              onMouseLeave={() => setActiveTab(-1)}
            >
              <span className='demo-highlight__name'>{tab.name}</span>
              {tab.id === activeTab && (
                <motion.div
                  className='demo-highlight__background'
                  layoutId='highlight'
                  // style={{ backgroundColor: tab.backgroundColor }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </DemoWrapper>
  )
}
