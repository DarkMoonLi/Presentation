import { addNewSlide, delSlide, moveSlide, setBackground, setPos, uploadImg } from "../actions/slides";

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

export function moveSlides(pos: {x: number, y: number}) {
    return {
        type: moveSlide,
        newPos: {
            x: pos.x,
            y: pos.y
        }
    }
}

export function constPosition() {
    return {
        type: setPos
    }    
}

export function setDefaultBackImage() {
    return {
        type: setBackground,
        value: '',
        newPresentation: {},
        newPos: {},
        size: {}
    }
}