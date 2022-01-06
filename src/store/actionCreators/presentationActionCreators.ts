import { Presentation } from "../../scripts/structure";
import { NewPresentation } from "../actions/presentationActions";

export function openNewPresentation(presentation: Presentation) {
    return {
        type: NewPresentation,
        value: presentation
    }
}