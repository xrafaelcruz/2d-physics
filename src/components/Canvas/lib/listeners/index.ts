import * as t from './types'

/**
 * Adiciona os eventos de interações do canvas.
 * @param args Recebe um objeto com informações a serem manipuladas 
 */
export const addListeners = ({ ball }: t.TAddListenersArgs) => {    
    document.addEventListener('keydown', function(e) {
        console.log('e.key', e.key, ball)
    })
}