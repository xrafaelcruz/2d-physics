import { addListeners, getArrowKeys } from './listeners'

import { getPlayer } from './player'
import { drawBall, getPlayerBallIndex, updateBallPosition } from './ball'

import * as t from './types'

/**
 * Atualiza o conteúdo do canvas.
 */
const draw = ({
    ctx, 
    canvas, 
    arrowKeys,
    balls,
    playerBallIndex
}: t.TDrawArgs) => {
    // Limpa tudo que está no canvas para poder recriar tudo com os valores atualizados
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

    updateBallPosition(balls[playerBallIndex], arrowKeys)
    balls.forEach(ball => drawBall(ctx, ball))

    requestAnimationFrame(() => draw({
        ctx, 
        canvas, 
        arrowKeys,
        balls,
        playerBallIndex
    }))
}

/**
 * Inicia o projeto dentro do canvas.
 */
export const start = ({
    canvas,
    balls,
    playerId,
    players
}: t.TStartArgs) => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    addListeners();
    const arrowKeys = getArrowKeys()
    const player = getPlayer(players, playerId)
    const playerBallIndex = getPlayerBallIndex(balls, player.id)

    requestAnimationFrame(() => draw({
        ctx, 
        canvas, 
        arrowKeys,
        balls,
        playerBallIndex
    }))
}
