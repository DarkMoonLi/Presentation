import { redoAction } from "../actions/redo";

export function reDo() {
    return {
        type: redoAction
    }
}