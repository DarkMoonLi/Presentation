import { Application, clearSelectedElements, clearSelectedElementsOnSlide, moveElements, putSelectedElement, setTitle, deleteSelectedElement, changeTextContent, savePresentation, openPresentation } from "../../scripts/structure";
import { putElem, clearAllElems, clearSlideElems, deleteElem } from "../actions/selectedElements"
import { move } from "../actions/moveElements"
import { changePresentationTitle } from "../actions/title";
import { changeText } from "../actions/text";
import { download, upload } from "../actions/download";

function reducer(state: Application = {} as Application, action: any) {
    switch(action.type) {
        case putElem: return putSelectedElement(state, action.selectedElements)
        case clearAllElems: return clearSelectedElements(state)
        case clearSlideElems: return clearSelectedElementsOnSlide(state)
        case deleteElem: return deleteSelectedElement(state, action.value)
        case move: return moveElements(state, action.newPos.x, action.newPos.y)
        case changeText: return changeTextContent(state, action.value);
        case changePresentationTitle: return setTitle(state, action.value);
        case download: return savePresentation(state, action.value);
        case upload: return openPresentation(state, action.value)
        default: return state
    }
}

export default reducer