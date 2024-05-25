import './index.scss'

export function DemoWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return <div className='demo-wrapper'>{children}</div>
}
