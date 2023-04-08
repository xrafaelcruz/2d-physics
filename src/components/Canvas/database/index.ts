import { TDatabase } from "./types";

export const database: TDatabase = {
    balls: [
        {
            dataPlayerId: 1,
            ballPositionX: 200,
            ballPositionY: 100
        },
        {
            dataPlayerId: 2,
            ballPositionX: 100,
            ballPositionY: 100
        }
    ],
    players: [
        { id: 1 },
        { id: 2 },
    ],
    currentPlayer: { id: 1 }
}