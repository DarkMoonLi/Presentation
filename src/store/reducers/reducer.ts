import { Application, clearSelectedElements, moveElements, putSelectedElement } from "../../scripts/structure";
import { put, clear } from "../actions/selectedElements"
import { move } from "../actions/moveElements"

function reducer(state: Application = {} as Application, action: any) {
    switch(action.type) {
        case put: return putSelectedElement(state, action.selectedElements)
        case clear: return clearSelectedElements(state)
        case move: return moveElements(state, action.newPos.x, action.newPos.y)
        default: return state
    }
}

export default reducer