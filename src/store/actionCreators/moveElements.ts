import { move, resize } from "../actions/moveElements";

export function moveElements(position: {x: number, y: number}) {
    return {
        type: move,
        newPos: position
    }
}

export function changeSize(size: {width: number, height: number}) {
    return {
        type: resize,
        newSize: size
    }
}