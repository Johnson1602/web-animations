import Link from 'next/link'
import './index.scss'

export function Header(): JSX.Element {
  return (
    <header className='site-header'>
      <Link href='/'>Web Animations</Link>
    </header>
  )
}
