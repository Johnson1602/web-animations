import classNames from 'classnames'

import './index.scss'

interface SpinnerProps {
  size?: number
  theme?: 'light' | 'dark'
}

const BARS = Array(12).fill(0)

export function Spinner(props: SpinnerProps) {
  const { size = 20, theme = 'dark' } = props

  return (
    <div
      className={classNames('spinner', {
        [`spinner--${theme}`]: !!theme,
      })}
      style={
        {
          '--spinner-size': `${size}px`,
        } as React.CSSProperties
      }
    >
      <div className='spinner-group'>
        {BARS.map((_, i) => (
          <div className='spinner-single' key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  )
}
