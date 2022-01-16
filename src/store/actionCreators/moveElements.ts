import { moving, resize } from "../actions/moveElements";

export function moveElements(position: {x: number, y: number}) {
    return {
        type: moving,
        newPos: {
            x: position.x,
            y: position.y
        }
    }
}

export function changeSize(size: {width: number, height: number}, pos: {x: number, y: number}) {
    return {
        type: resize,
        newPos: {
            x: pos.x,
            y: pos.y
        },
        size: {
            width: size.width,
            height: size.height
        }
    }
}