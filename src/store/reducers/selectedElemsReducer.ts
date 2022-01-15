import { Application, clearSelectedElements, clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../scripts/structure";
import { clearAllElems, clearSlideElems, deleteElem, putElem } from "../actions/selectedElements";

export function selectedElements(state: Application, action: any) {
    switch(action.type) {
        case putElem: return putSelectedElement(state, action.selectedElement);
        case clearAllElems: return clearSelectedElements(state);
        case clearSlideElems: return clearSelectedElementsOnSlide(state);
        case deleteElem: return deleteSelectedElement(state, action.value);
        default: return state.selectedElements
    }
}