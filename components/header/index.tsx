import Link from 'next/link'
import './index.scss'

export function Header(): JSX.Element {
  return (
    <div className='site-header'>
      <Link href='/'>Web Animations</Link>
    </div>
  )
}
