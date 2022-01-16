import { addNewSlide, delSlide, moveSlide, setBackground, uploadImg } from "../actions/slides";

export function newSlide() {
    return {
        type: addNewSlide,
        value: '',
        newPresentation: {},
        newPos: {},
        size: {}
    }
}

export function deleteSlide() {
    return {
        type: delSlide,
        value: '',
        newPresentation: {},
        newPos: {},
        size: {}
    }
}

export function setBackImage(img: string) {
    return {
        type: setBackground,
        value: img,
        newPresentation: {},
        newPos: {},
        size: {}
    }
}

export function uploadBackImg() {
    return {
        type: uploadImg
    }
}

export function moveSlides(prevIndex: number, nextIndex: number) {
    return {
        type: moveSlide,
        prevIndex: prevIndex,
        nextIndex: nextIndex
    }
}