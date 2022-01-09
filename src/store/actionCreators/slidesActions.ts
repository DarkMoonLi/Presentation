import { addNewSlide, delSlide } from "../actions/slides";

export function newSlide() {
    return {
        type: addNewSlide
    }
}

export function deleteSlide() {
    return {
        type: delSlide
    }
}