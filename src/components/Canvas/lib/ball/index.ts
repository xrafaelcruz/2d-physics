import { TInitialBall, TBall } from './types'

/**
 * Cria uma bola nova.
 * @param databaseBall Bolas salvas na base de dados
 */
export const createBall = (
    initialBall: TInitialBall
): TBall => {
    return {
        ...initialBall,
        move: () => {
            console.log('move')
        }
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
    initialBalls: TInitialBall[]
): TBall[] => {
    return initialBalls.map(databaseBall => {
        const ball = createBall(databaseBall)

        drawBall(ctx, ball)

        return ball
    })
}

/**
 * Retorna da lista de bolas, a bola que corresponde ao playerId passado por parâmetro.
 * @param balls Lista de bolas
 * @param playerId Id do player
 */
export const getMyBall = (
    balls: TBall[], 
    playerId: number
): TBall | undefined  => {
    return balls.find(ball => ball.playerId === playerId)
}