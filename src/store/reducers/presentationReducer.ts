import { AnyAction } from "redux";
import { Application, createNewPresentation, loadPresentation, openPresentation, Presentation, redo, savePresentation, undo } from "../../scripts/structure";
import { download, upload } from "../actions/download";
import { NewPresentation, presentationFromFile } from "../actions/presentationActions";
import { redoAction } from "../actions/redo";
import { undoAction } from "../actions/undoActions";
import { ActionType } from "./mainReducer";
import { slides } from "./slidesReducer";
import { title } from "./titleReducer";

export function presentationReducer(state: Application = {} as Application, action: AnyAction /* ActionType = {} as ActionType*/): Presentation {
    switch (action.type) {
        case download: return savePresentation(state, action.value);
        case upload: return loadPresentation(state);
        case presentationFromFile: return action.newPresentation;
        default: return {
            title: title(state, action),
            type: 'presentation',
            slides: slides(state, action)
        }
    }    
}