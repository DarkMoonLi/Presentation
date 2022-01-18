import { chLayer, deleteElems, newImage, newImageFromFile, newPrimitive, newText } from "../actions/slideElementActions";

export function addNewText() {
    return {
        type: newText,
    }
}

export function addNewImageFromFile() {
    return {
        type: newImageFromFile,
    }
}

export function addNewImage(file: string) {
    return {
        type: newImage,
        value: file,
    }
}

export function addNewPrimitive(primitive: 'circle' | 'triangle' | 'rectangle') {
    return {
        type: newPrimitive,
        newPrimitive: primitive,
    }    
}

export function deleteElements() {
    return {
        type: deleteElems
    }    
}

export function changeLayer(layer: string) {
    return {
        type: chLayer,
        value: layer
    }
}