import { Application, Presentation } from "../../scripts/structure";
import { ActionType } from "./mainReducer";

export function undoReducer(state: Application = {} as Application, action: ActionType): Array<Presentation> {
    switch (action.type) {
        default: return state.undo.concat(state.presentation)
    }    
}