import { put, clear } from "../actions/selectedElements"

export function putSelectedElement(value: string) {
    return {
        type: put,
        selectedElement: value
    }
};

export function clearSelectedElement() {
    return {
        type: clear
    }
}