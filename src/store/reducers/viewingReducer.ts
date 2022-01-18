import { Application, Viewing } from "../../scripts/structure";
import { ActionType } from "./mainReducer";

export function viewingReducer(state: Application = {} as Application, action: ActionType): Viewing {
    switch (action.type) {
        default: return state.viewing
    }
}