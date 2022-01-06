import { clearRedo } from "../actions/redo";

export function clearAllRedo() {
    return {
        type: clearRedo
    }
}