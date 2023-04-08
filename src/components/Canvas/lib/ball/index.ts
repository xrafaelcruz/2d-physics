import { TArrowKeys } from '../listeners/types'
import { TPlayer } from '../player/types'
import * as t from './types'

/**
 * Desenha a bola no canvas.
 * @param ctx
 * @param ball
 */
export const drawBall = (
    ctx: CanvasRenderingContext2D, 
    ball: t.TBall
) => {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, 10, 0, 2*Math.PI)
    ctx.strokeStyle = 'black'
    ctx.stroke()
    ctx.fillStyle = 'red'
    ctx.fill()
}

/**
 * Retorna o index da bola do player.
 * @param balls
 * @param playerId
 */
export const getPlayerBallIndex = (
    balls: t.TBall[], 
    playerId: TPlayer['id']
): number  => {
    const index = balls.findIndex(ball => ball.playerId === playerId)
    if (index >= 0) return index

    balls.push({ playerId, x: 10, y: 10 })
    return balls.length - 1
}

/**
 * Atualiza a posição de uma bola com base nas teclas pressionadas.
 * @param ball 
 * @param arrowKeys 
 */
export const updateBallPosition = (
    ball: t.TBall, 
    arrowKeys: TArrowKeys
) => {
    if (arrowKeys.up) {
        ball.y--
    }

    if (arrowKeys.down) {
        ball.y++
    }

    if (arrowKeys.left) {
        ball.x--
    }

    if (arrowKeys.right) {
        ball.x++
    }
}