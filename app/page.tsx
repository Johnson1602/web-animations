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
