import { createBall } from './ball'

/**
 * Inicia o projeto dentro do canvas.
 */
export const start = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    // Limpa tudo que está no canvas, evitando que tudo seja criado novamente a cada atualização de código.
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

    createBall(ctx)
}