import { addNewSlide, delSlide, setBackground, uploadImg } from "../actions/slides";

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

export function setBackImage(img: string) {
    return {
        type: setBackground,
        value: img
    }
}

export function uploadBackImg() {
    return {
        type: uploadImg
    }
}