import { AnyAction } from "redux";
import { Application, Presentation, startViewing, stopViewing, Viewing, viewingNextSlide, viewingPrevSlide } from "../../scripts/structure";
import { delSlide } from "../actions/slides";
import { nextSlide, offViewingMode, onViewingMode, prevSlide } from "../actions/viewing";
import { ActionType } from "./mainReducer";

export function viewingReducer(state: Application = {} as Application, action: AnyAction /*ActionType = {} as ActionType*/): Viewing {
    switch (action.type) {
        default: return state.viewing
    }
}