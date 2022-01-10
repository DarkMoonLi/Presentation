import { Presentation } from "../../scripts/structure";
import { NewPresentation, presentationFromFile } from "../actions/presentationActions";

export function openPresentationFromFile(presentation: Presentation) {
    return {
        type: presentationFromFile,
        value: presentation
    }
}

export function openNewPresentation() {
    return {
        type: NewPresentation
    }
}