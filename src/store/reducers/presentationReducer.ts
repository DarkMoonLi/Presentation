import { Application, loadPresentation, Presentation, savePresentation } from "../../scripts/structure";
import { download, upload } from "../actions/download";
import { ActionType } from "./mainReducer";
import { slides } from "./slidesReducer";
import { title } from "./titleReducer";

export function presentationReducer(state: Application = {} as Application, action: ActionType): Presentation {
    switch (action.type) {
        case download: return savePresentation(state, action.value);
        case upload: return loadPresentation(state);
        default: return {
            title: title(state, action),
            type: 'presentation',
            slides: slides(state, action)
        }
    }    
}