import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <ul className='demo__list'>
        <li className='demo__item'>
          <Link href='/basics' className='demo__link'>
            Basics
          </Link>
        </li>
        <li className='demo__item'>
          <Link href='/keyframes' className='demo__link'>
            Keyframes
          </Link>
        </li>
        <li className='demo__item'>
          <Link href='/gestures' className='demo__link'>
            Gestures
          </Link>
        </li>
      </ul>
    </main>
  )
}
