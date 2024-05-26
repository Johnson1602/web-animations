import './index.scss'

interface SpinnerProps {
  color: string
  size?: number
}

const BARS = Array(12).fill(0)

export function Spinner({ color, size = 20 }: SpinnerProps) {
  return (
    <div
      className={`size-[--spinner-size]`}
      style={
        {
          ['--spinner-size']: `${size}px`,
          ['--spinner-color']: color,
        } as React.CSSProperties
      }
    >
      <div className='spinner-container'>
        {BARS.map((_, i) => (
          <div className='spinner' key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  )
}
