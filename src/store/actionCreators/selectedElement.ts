import { putElem, clearAllElems, clearSlideElems, deleteElem } from "../actions/selectedElements"

export function putSelectedElement(value: string) {
    return {
        type: putElem,
        value: value,
        newPresentation: {},
        newPos: {},
        size: {}
    }
};

export function clearSelectedElement() {
    return {
        type: clearAllElems
    }
}

export function clearSelectedElementsOnSlide() {
    return {
        type: clearSlideElems
    }
}

export function deleteSelectedElement(value: string) {
    return {
        type: deleteElem,
        value: value
    }
}