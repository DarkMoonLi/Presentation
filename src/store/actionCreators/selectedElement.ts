import { putElem, clearAllElems, clearSlideElems, deleteElem } from "../actions/selectedElements"

const group = "SELECTED_ELEMENTS";

export function putSelectedElement(value: string) {
    return {
        group: group, 
        type: putElem,
        selectedElement: value
    }
};

export function clearSelectedElement() {
    return {
        group: group,
        type: clearAllElems
    }
}

export function clearSelectedElementsOnSlide() {
    return {
        group: group,
        type: clearSlideElems
    }
}

export function deleteSelectedElement(value: string) {
    return {
        group: group,
        type: deleteElem,
        value: value
    }
}