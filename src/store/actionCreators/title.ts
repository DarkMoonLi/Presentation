import { changePresentationTitle } from "../actions/title";

export function changeTitle(newTitle: string) {
    return {
        type: changePresentationTitle,
        value: newTitle
    }    
}