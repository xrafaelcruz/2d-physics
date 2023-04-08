import * as t from "./types"

/**
 * Cria um novo player.
 * @param players 
 */
const createPlayer = (players: t.TPlayer[]): t.TPlayer => {
    const newPlayer:t.TPlayer = { id: Math.random() }
    players.push(newPlayer)
    return newPlayer
}

/**
 * Procura um player pelo id ou cria um novo caso não encontre.
 * @param players 
 * @param playerId 
 */
export const getPlayer = (
    players: t.TPlayer[], 
    playerId?: t.TPlayer['id']
): t.TPlayer => {
    return players.find(player => player.id === playerId) || createPlayer(players)
}