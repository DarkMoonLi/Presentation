import { clearRedoAction, redoAction } from "../actions/redo";

export function reDo() {
    return {
        type: redoAction
    }
}

export function clearAllRedo() {
    return {
        type: clearRedoAction
    }
}