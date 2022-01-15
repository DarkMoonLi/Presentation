import { changeBack } from "../actions/changeBackground";

export function changeBackgroundFunc(newBackground: string) {
    return {
        type: changeBack,
        newBack: '#' + newBackground
    }
}