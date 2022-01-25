import { Application, clearSelectedElementsOnSlide, deleteSelectedElement } from "../../scripts/structure";
import { clearAllElems, clearSlideElems, deleteElem, putElem } from "../actions/selectedElements";
import { ActionType } from "./mainReducer";

export function selectedElements(state: Application = {} as Application, action: ActionType): Array<string> {
    switch(action.type) {
        case putElem: return state.selectedElements.concat(action.value);
        case clearAllElems: return [];
        case clearSlideElems: return clearSelectedElementsOnSlide(state);
        case deleteElem: return deleteSelectedElement(state, action.value);
        default: return state.selectedElements
    }
}