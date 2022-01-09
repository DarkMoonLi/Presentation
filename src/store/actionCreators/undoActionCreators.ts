import { undoAction } from "../actions/undoActions";

export function unDo() {
    return {
        type: undoAction
    }
}