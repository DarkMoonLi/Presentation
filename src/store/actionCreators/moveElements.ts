import { moving, resize } from "../actions/moveElements";

export function moveElements(position: {x: number, y: number}) {
    return {
        type: moving,
        newPos: position
    }
}

export function changeSize(size: {width: number, height: number}, pos: {x: number, y: number}) {
    return {
        type: resize,
        width: size.width,
        height: size.height,
        x: pos.x,
        y: pos.y
    }
}