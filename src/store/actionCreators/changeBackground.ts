import { changeBack } from "../actions/changeBackground";

export function changeBackgroundFunc(newBackground: string) {
    return {
        type: changeBack,
        value: '#' + newBackground
    }
}
export function defaultBackgroundColor() {
    return {
        type: changeBack,
        value: '#fff'
    }
}