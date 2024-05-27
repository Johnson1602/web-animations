import Link from 'next/link'

const ROUTE = [
  {
    path: '/basics', // show the basic usage of framer motion, including the 'animate' and the 'transition' property
    label: 'Basics',
  },
  {
    path: '/keyframes', // we can set keyframes in framer motion, just like those in css animations
    label: 'Keyframes',
  },
  {
    path: '/gestures',
    label: 'Gestures',
  },
  {
    path: '/layout',
    label: 'Layout',
  },
  {
    path: '/modal',
    label: 'Modal',
  },
  {
    path: '/subscribe-button',
    label: 'Subscribe Button',
  },
  // {
  //   path: '/dynamic-height',
  //   label: 'Dynamic Height',
  // },
  {
    path: '/feedback',
    label: 'Feedback',
  },
]

export default function Home() {
  return (
    <main>
      <ul className='demo__list'>
        {ROUTE.map((route) => (
          <li key={route.path} className='demo__item'>
            <Link href={route.path} className='demo__link'>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
