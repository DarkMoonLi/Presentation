import { newImage, newText } from "../actions/slideElementActions";

export function addNewText() {
    return {
        type: newText
    }
}

export function addNewImage(file: Blob) {
    return {
        type: newImage,
        value: file
    }
}