import { useEffect, useRef } from 'react'

import { start } from './lib'

import styles from './index.module.css'

export default function Canvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (ref.current) {
      start(ref.current)
    }
  }, [])

  return (
    <canvas ref={ref} className={styles.canvas} />
  )
}
