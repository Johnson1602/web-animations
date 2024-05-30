import Link from 'next/link'

import Feedback from './feedback/page'
import Registration from './registration/page'

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

          <div className='demo__grid demo__grid--single'>
            {PROJECT_PAGES.map((item) => (
              <DemoItemWithPreview key={item.path} demoInfo={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

interface DemoInfo {
  path: string
  title: string
  description?: string[]
  takeaways?: string[]
}

interface DemoWithPreviewInfo extends DemoInfo {
  preview: JSX.Element
}

interface DemoItemProps<T> {
  demoInfo: T
}

function DemoItem(props: DemoItemProps<DemoInfo>): JSX.Element {
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
        {Array.from(demoInfo.description || []).map((item, index) => (
          <div key={index} className='demo__description'>
            <span>•</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DemoItemWithPreview(
  props: DemoItemProps<DemoWithPreviewInfo>
): JSX.Element {
  const { demoInfo } = props

  return (
    <div className='demo__item-with-preview'>
      <div className='demo__item'>
        <Link href={demoInfo.path} className='demo__link'>
          {demoInfo.title}
        </Link>
        <div className='demo__header'>
          <h3 className='demo__title'>{demoInfo.title}</h3>
        </div>
      </div>

      <div className='demo__preview'>{demoInfo.preview}</div>
    </div>
  )
}

const BASIC_PAGES: DemoInfo[] = [
  {
    path: '/basics',
    title: 'Basics',
    description: [
      // `show the basic usage of framer motion, including the 'animate' and the 'transition' property`,
      'Framer Motion 的基本使用方法，包括 animate 和 transition 属性',
    ],
    takeaways: ['animate property', 'transition property'],
  },
  {
    path: '/keyframes',
    title: 'Keyframes',
    description: [
      // 'we can set keyframes in framer motion, just like those in CSS animations',
      '在 Framer Motion 中，我们像在 CSS 动画中一样设置关键帧',
      // 'not commonly used, but still good to know',
      '不常用，了解一下即可',
    ],
    takeaways: ['keyframes'],
  },
  {
    path: '/gestures',
    title: 'Gestures',
    description: [
      // `framer motion provides a lot of gesture events, like 'whileHover', 'whileTap', 'whileDrag', etc.`,
      'Framer Motion 提供了很多 gesture 事件，如 whileHover、whileTap、whileDrag 等',
      // 'we can use them to create interactive animations',
      '实现与用户交互相关的效果',
    ],
    takeaways: ['gesture events'],
  },
  {
    path: '/layout',
    title: 'Layout',
    description: [
      // 'CSS layouts are difficult and expensive, framer motion makes animate layout properties much easier',
      '有些属性难以、无法使用 CSS 进行动画，使用 Framer Motion 让布局动画变得更简单',
      // 'one of the most powerful and magical features of framer motion',
      'Framer Motion 最强大、最神奇的特性之一',
    ],
    takeaways: ['layout property', 'layoutId property'],
  },
  {
    path: '/modal',
    title: 'Modal',
    description: [
      // `use layoutId to create magical transitions between different components, just like the 'Magic Move' in Apple Keynote`,
      '使用 layoutId 可以在不同组件之间创建过渡动画，类似 Apple Keynote 中的 “神奇移动” 效果',
      '将一个元素移动到另一个位置',
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
      // 'use key to differentiate and animate between different components within the same parent component',
      '使用 key 来区分同一父组件中的子组件，并为它们添加动画',
      '在不同元素之间切换',
    ],
    takeaways: ['key property', 'mode property', 'initial property'],
  },
  // {
  //   path: '/dynamic-height',
  //   title: 'Dynamic Height',
  // },
]

const PROJECT_PAGES: DemoWithPreviewInfo[] = [
  // final project, lets see how we can use framer motion to create an real-world animation that improves user experience and sparks joy
  {
    path: '/feedback',
    title: 'Feedback',
    preview: <Feedback />,
  },
  {
    path: '/registration',
    title: 'Multi-step Registration Form',
    preview: <Registration />,
  },
]
