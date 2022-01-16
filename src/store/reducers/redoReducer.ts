import { AnyAction } from "redux";
import { Application, Presentation } from "../../scripts/structure";
import { redoAction } from "../actions/redo";
import { undoAction } from "../actions/undoActions";
import { ActionType } from "./mainReducer";

export function redoReducer(state: Application = {} as Application, action: AnyAction /*ActionType = {} as ActionType*/): Array<Presentation> {
    switch (action.type) {
        default: return []
    }
}