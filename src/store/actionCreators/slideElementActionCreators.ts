import { newImage, newImageFromFile, newPrimitive, newText } from "../actions/slideElementActions";

export function addNewText() {
    return {
        type: newText
    }
}

export function addNewImageFromFile() {
    return {
        type: newImageFromFile
    }
}

export function addNewImage(file: string) {
    return {
        type: newImage,
        value: file
    }
}

export function addNewPrimitive(primitive: string) {
    return {
        type: newPrimitive,
        value: primitive
    }    
}