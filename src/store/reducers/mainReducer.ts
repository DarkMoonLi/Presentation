import { Application, changeWindowSize, createNewPresentation, deleteSlide, moveElements, openPresentation, Presentation, redo, startViewing, stopViewing, undo, viewingNextSlide, viewingPrevSlide } from "../../scripts/structure";
import { selectedElements } from "./selectedElemsReducer";
import { presentationReducer } from "./presentationReducer";
import { viewingReducer } from "./viewingReducer";
import { undoReducer } from "./undoReducer";
import { redoReducer } from "./redoReducer";
import { NewPresentation, presentationFromFile } from "../actions/presentationActions";
import { redoAction } from "../actions/redo";
import { undoAction } from "../actions/undoActions";
import { delSlide } from "../actions/slides";
import { moving, resize } from "../actions/moveElements";
import { nextSlide, offViewingMode, onViewingMode, prevSlide } from "../actions/viewing";

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
    newIndex: number
}

function reducer(state: Application = {} as Application, action: ActionType): Application {
    switch (action.type) {
        case NewPresentation: return createNewPresentation(state);
        case presentationFromFile: return openPresentation(state, action.newPresentation);
        case delSlide: return deleteSlide(state);
        case redoAction: return redo(state);
        case undoAction: return undo(state);
        case moving: return moveElements(state, action.newPos.x, action.newPos.y);
        case resize: return changeWindowSize(state, action.size.width, action.size.height, action.newPos.x, action.newPos.y);
        case onViewingMode: return startViewing(state);
        case offViewingMode: return stopViewing(state);
        case nextSlide: return viewingNextSlide(state);
        case prevSlide: return viewingPrevSlide(state);
        default: return {
            selectedElements: selectedElements(state, action),
            presentation: presentationReducer(state, action),
            viewing: state.viewing, //viewingReducer(state, action),
            undo: undoReducer(state, action),
            redo: [] //redoReducer(state, action)
        }
    }
}

export default reducer