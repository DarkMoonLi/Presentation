import { AnyAction } from "redux";
import { Application } from "../../scripts/structure";
import { changePresentationTitle } from "../actions/title";
import { ActionType } from "./mainReducer";

export function title(state: Application = {} as Application, action: AnyAction /*ActionType = {} as ActionType*/): string {
    switch (action.type) {
        case changePresentationTitle: return action.value;
        default: return state.presentation.title
    }
}