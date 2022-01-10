import { move } from "../actions/moveElements";

export function moveElements(position: {x: number, y: number}) {
    return {
        type: move,
        newPos: position
    }
}