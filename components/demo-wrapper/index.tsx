import classNames from 'classnames'
import './index.scss'

interface DemoWrapperProps {
  className?: string
  children: React.ReactNode
}

export function DemoWrapper(props: DemoWrapperProps): JSX.Element {
  const { className, children } = props

  return (
    <div
      className={classNames('demo-wrapper', {
        [`${className}`]: !!className,
      })}
    >
      {children}
    </div>
  )
}
