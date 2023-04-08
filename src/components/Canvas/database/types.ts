type TDatabaseBall = {
    dataPlayerId: number
    ballPositionX: number
    ballPositionY: number
}

type TDatabasePlayer = {
    id: number
}

export type TDatabase = {
    balls: TDatabaseBall[]
    players: TDatabasePlayer[]
    currentPlayer: TDatabasePlayer
}