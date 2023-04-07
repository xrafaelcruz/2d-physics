export type TInitialBall = {
    playerId: number
    x: number
    y: number
}

export type TBall = TInitialBall & {
    move: () => void
}