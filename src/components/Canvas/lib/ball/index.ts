import { TBallPositions, TBall } from './types'

/**
 * Cria uma bola nova.
 * @param positions Posição da bola
 */
export const createBall = (
    positions: TBallPositions
): TBall => {
    return {
        x: positions.x,
        y: positions.y
    }
}

/**
 * Desenha a bola no canvas.
 * @param ctx Canvas context 2D
 * @param ball Objeto Bola
 */
export const drawBall = (
    ctx: CanvasRenderingContext2D, 
    ball: TBall
) => {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, 10, 0, 2*Math.PI)
    ctx.strokeStyle = 'black'
    ctx.stroke()
    ctx.fillStyle = 'red'
    ctx.fill()
}

/**
 * Cria e desenha uma bola nova para cada item de ballsPositions.
 * @param ctx Canvas context 2D
 * @param ballsPositions Array contendo a posição de cada bola
 */
export const loadBalls = (
    ctx: CanvasRenderingContext2D, 
    ballsPositions: TBallPositions[]
) => {
    return ballsPositions.map(positions => {
        const ball = createBall(positions);

        drawBall(ctx, ball)

        return ball
    })
}
