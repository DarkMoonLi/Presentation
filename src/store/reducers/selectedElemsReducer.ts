import { AnyAction } from "redux";
import { Application, clearSelectedElements, clearSelectedElementsOnSlide, deleteSelectedElement, Presentation, putSelectedElement } from "../../scripts/structure";
import { clearAllElems, clearSlideElems, deleteElem, putElem } from "../actions/selectedElements";
import { ActionType } from "./mainReducer";

export function selectedElements(state: Application = {} as Application, action: AnyAction /*ActionType = {} as ActionType*/): Array<string> {
    switch(action.type) {
        case putElem: return state.selectedElements.concat(action.value); //putSelectedElement(state, action.value);
        case clearAllElems: return [] //clearSelectedElements(state);
        case clearSlideElems: return clearSelectedElementsOnSlide(state);
        case deleteElem: return deleteSelectedElement(state, action.value);
        default: return state.selectedElements
    }
}