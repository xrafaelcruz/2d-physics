import * as t from './types'

const arrowKeys: t.TArrowKeys = {
    up: false,
    down: false,
    right: false,
    left: false
}

/**
 * Retorna um objeto que informa se as teclas de setas estão ou não pressionadas
 */
export const getArrowKeys = (): t.TArrowKeys => {
    return arrowKeys
}

/**
 * Adiciona os eventos de interações do canvas.
 */
export const addListeners = () => {   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            arrowKeys.up = true
        }

        if (e.key === 'ArrowDown') {
            arrowKeys.down = true
        }

        if (e.key === 'ArrowRight') {
            arrowKeys.right = true
        }

        if (e.key === 'ArrowLeft') {
            arrowKeys.left = true
        }
    })

    document.addEventListener('keyup', function(e) {
        if (e.key === 'ArrowUp') {
            arrowKeys.up = false
        }

        if (e.key === 'ArrowDown') {
            arrowKeys.down = false
        }

        if (e.key === 'ArrowRight') {
            arrowKeys.right = false
        }

        if (e.key === 'ArrowLeft') {
            arrowKeys.left = false
        }
    })
}
