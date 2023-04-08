import { TBall } from './ball/types'
import { TArrowKeys } from './listeners/types'
import { TPlayer } from './player/types'

export type TStartArgs = {
    canvas: HTMLCanvasElement
    balls: TBall[]
    playerId?: TPlayer['id'];
    players: TPlayer[]
}

export type TDrawArgs = {
    ctx: CanvasRenderingContext2D
    canvas: HTMLCanvasElement
    arrowKeys: TArrowKeys
    balls: TBall[]
    playerBallIndex: number
}