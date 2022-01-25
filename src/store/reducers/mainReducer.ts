import { Application, createNewPresentation, deleteSlide, openPresentation, Presentation, redo, undo } from "../../scripts/structure";
import { selectedElements } from "./selectedElemsReducer";
import { presentationReducer } from "./presentationReducer";
import { viewingReducer } from "./viewingReducer";
import { undoReducer } from "./undoReducer";
import { NewPresentation, presentationFromFile } from "../actions/presentationActions";
import { redoAction } from "../actions/redo";
import { undoAction } from "../actions/undoActions";
import { delSlide } from "../actions/slides";

export type ActionType = {
    type: string,
    value: string,
    newPrimitive: 'circle' | 'triangle' | 'rectangle'
    newPresentation: Presentation,
    newPos: {
        x: number,
        y: number
    },
    size: {
        width: number,
        height: number
    },
    prevIndex: number,
    newIndex: number,
    newFontSize: number,
    newWeight: number
}

function reducer(state: Application = {} as Application, action: ActionType): Application {
    switch (action.type) {
        case NewPresentation: return createNewPresentation(state);
        case presentationFromFile: return openPresentation(state, action.newPresentation);
        case delSlide: return deleteSlide(state);
        case redoAction: return redo(state);
        case undoAction: return undo(state);
        default: return {
            selectedElements: selectedElements(state, action),
            presentation: presentationReducer(state, action),
            viewing: viewingReducer(state, action),
            undo: undoReducer(state, action),
            redo: []
        }
    }
}

export default reducer