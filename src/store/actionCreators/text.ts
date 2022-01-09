import { changeText } from "../actions/text";

export function changeTextValue(newText: string) {
    return {
        type: changeText,
        value: newText
    }    
}