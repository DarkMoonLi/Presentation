import { nextSlide, offViewingMode, onViewingMode, prevSlide } from "../actions/viewing";

export function startViewingMode() {
    return {
        type: onViewingMode
    }
}

export function stopViewingMode() {
    return {
        type: offViewingMode
    }
}

export function getNextSlide() {
    return {
        type: nextSlide
    }
}

export function getPrevSlide() {
    return {
        type: prevSlide
    }    
}