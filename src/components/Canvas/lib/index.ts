import { addListeners } from './listeners'
import { loadBalls, getMyBall } from './ball'

import * as t from './types'

/**
 * Inicia o projeto dentro do canvas.
 * @param canvas Recebe um Elemento HTML do tipo canvas
 * @param initialData Dados iniciais a serem carregados
 */
export const start = (
    canvas: HTMLCanvasElement, 
    initialData: t.TInitialData
) => {
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    // Limpa tudo que está no canvas, evitando que tudo seja criado novamente a cada atualização de código.
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

    const balls = loadBalls(ctx, initialData.balls)
    const myId = 1
    const myBall = getMyBall(balls, myId)

    addListeners({ ball: myBall })
}
