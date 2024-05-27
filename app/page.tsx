import Link from 'next/link'

const ROUTE = [
  {
    path: '/basics',
    label: 'Basics',
  },
  {
    path: '/keyframes',
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
    path: '/layout/modal',
    label: 'Modal',
  },
  {
    path: '/subscribe-button',
    label: 'Subscribe Button',
  },
  {
    path: '/dynamic-height',
    label: 'Dynamic Height',
  },
  {
    path: '/feedback',
    label: 'Feedback',
  },
]

export default function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
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
