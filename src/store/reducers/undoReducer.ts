import { AnyAction } from "redux";
import { Application, Presentation } from "../../scripts/structure";
import { undoAction } from "../actions/undoActions";
import { ActionType } from "./mainReducer";

export function undoReducer(state: Application = {} as Application, action: AnyAction /*ActionType = {} as ActionType*/): Array<Presentation> {
    switch (action.type) {
        default: return state.undo.concat(state.presentation)
    }    
}