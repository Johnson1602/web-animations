import Link from 'next/link'

import Feedback from './feedback/page'

import './index.scss'

export default function HomePage() {
  return (
    <main className='page-home'>
      <div className='site-container home__section-group'>
        <div className='home__section'>
          <h2 className='section__title'>From The Basics</h2>

          <div className='demo__grid'>
            {BASIC_PAGES.map((item) => (
              <DemoItem key={item.path} demoInfo={item} />
            ))}
          </div>
        </div>
        <div className='home__section'>
          <h2 className='section__title'>To The Real-world</h2>

          <div className='demo__item-with-preview'>
            <div className='demo__item'>
              <Link href={FINAL_PROJECT[0].path} className='demo__link'>
                {FINAL_PROJECT[0].title}
              </Link>
              <div className='demo__header'>
                <h3 className='demo__title'>{FINAL_PROJECT[0].title}</h3>
              </div>
            </div>

            <div className='demo__preview'>
              <Feedback />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

interface DemoInfo {
  path: string
  title: string
  description: string[]
  takeaways: string[]
}

interface DemoItemProps {
  demoInfo: DemoInfo
}

function DemoItem(props: DemoItemProps): JSX.Element {
  const { demoInfo } = props

  return (
    <div className='demo__item'>
      <Link href={demoInfo.path} className='demo__link'>
        {demoInfo.title}
      </Link>

      <div className='demo__header'>
        <h3 className='demo__title'>{demoInfo.title}</h3>
      </div>

      <div className='demo__detail'>
        {demoInfo.description.map((item, index) => (
          <div key={index} className='demo__description'>
            <span>•</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const BASIC_PAGES: DemoInfo[] = [
  {
    path: '/basics',
    title: 'Basics',
    description: [
      `show the basic usage of framer motion, including the 'animate' and the 'transition' property`,
    ],
    takeaways: ['animate property', 'transition property'],
  },
  {
    path: '/keyframes',
    title: 'Keyframes',
    description: [
      'we can set keyframes in framer motion, just like those in CSS animations',
      'not commonly used, but still good to know',
    ],
    takeaways: ['keyframes'],
  },
  {
    path: '/gestures',
    title: 'Gestures',
    description: [
      `framer motion provides a lot of gesture events, like 'whileHover', 'whileTap', 'whileDrag', etc.`,
      'we can use them to create interactive animations',
    ],
    takeaways: ['gesture events'],
  },
  {
    path: '/layout',
    title: 'Layout',
    description: [
      'CSS layouts are difficult and expensive, framer motion makes animate layout properties much easier',
      'one of the most powerful and magical features of framer motion',
    ],
    takeaways: ['layout property', 'layoutId property'],
  },
  {
    path: '/modal',
    title: 'Modal',
    description: [
      `use layoutId to create magical transitions between different components, just like the 'Magic Move' in Apple Keynote`,
    ],
    takeaways: [
      'layoutId property',
      'AnimatePresence component',
      'exit property',
    ],
  },
  {
    path: '/subscribe-button',
    title: 'Subscribe Button',
    description: [
      'use key to differentiate and animate between different components within the same parent component',
    ],
    takeaways: ['key property', 'mode property', 'initial property'],
  },
  // {
  //   path: '/dynamic-height',
  //   title: 'Dynamic Height',
  // },
]

const FINAL_PROJECT = [
  // final project, lets see how we can use framer motion to create an real-world animation that improves user experience and sparks joy
  {
    path: '/feedback',
    title: 'Feedback',
  },
]
