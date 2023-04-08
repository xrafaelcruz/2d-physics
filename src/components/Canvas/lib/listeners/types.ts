import { TPlayer } from "../player/types"

export type TArrowKeys = {
    up: boolean
    down: boolean
    right: boolean
    left: boolean
}

export type TAddListenersArgs = {
    player: TPlayer
}