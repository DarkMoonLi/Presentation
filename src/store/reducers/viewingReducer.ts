import { Application, startViewing, stopViewing, Viewing, viewingNextSlide, viewingPrevSlide } from "../../scripts/structure";
import { nextSlide, offViewingMode, onViewingMode, prevSlide } from "../actions/viewing";
import { ActionType } from "./mainReducer";

export function viewingReducer(state: Application = {} as Application, action: ActionType): Viewing {
    switch (action.type) {
        case onViewingMode: return startViewing(state);
        case offViewingMode: return stopViewing(state);
        case nextSlide: return viewingNextSlide(state);
        case prevSlide: return viewingPrevSlide(state);
        default: return state.viewing
    }
}