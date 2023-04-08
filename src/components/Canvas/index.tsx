import { useEffect, useRef } from 'react'
import { database } from './database'
import { start } from './lib'
import styles from './index.module.css'

export default function Canvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (ref.current) {
      start({
        canvas: ref.current,
        playerId: database.currentPlayer.id,
        players: database.players.map(player => ({ id: player.id })),
        balls: database.balls.map(ball => ({
          playerId: ball.dataPlayerId,
          x: ball.ballPositionX,
          y: ball.ballPositionY
        }))
      })
    }
  }, [])

  return (
    <canvas ref={ref} className={styles.canvas} />
  )
}
