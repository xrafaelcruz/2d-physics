import styles from './Canvas.module.css'
import useCanvas from './useCanvas';

export default function Canvas() {
  useCanvas();

  return (
    <canvas id="canvas" className={styles.canvas} />
  )
}
