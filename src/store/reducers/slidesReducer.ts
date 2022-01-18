import { addImage, addImageFromFile, addPrimitives, addSlide, addText, Application, changeBackground, changeColor, changeContourColor, changeFont, changeLayer, changeTextContent, deleteElements, deleteSlide, getDefaultSlide, loadBackground, move, setBackgroundImg, Slide } from "../../scripts/structure";
import { changeBack } from "../actions/changeBackground";
import { chColor, chContourColor, chFont, chLayer, deleteElems, newImage, newImageFromFile, newPrimitive, newText } from "../actions/slideElementActions";
import { addNewSlide, delSlide, moveSlide, setBackground, uploadImg } from "../actions/slides";
import { changeText } from "../actions/text";
import { ActionType } from "./mainReducer";

export function slides(state: Application = {} as Application, action: ActionType): Array<Slide> {
    switch (action.type) {
        case addNewSlide: return state.presentation.slides.concat(getDefaultSlide());// addSlide(state);
        //case delSlide: return deleteSlide(state);
        case uploadImg: return loadBackground(state);
        case setBackground: return setBackgroundImg(state, action.value);
        case changeBack: return changeBackground(state, action.value);
        case moveSlide: return move(state, action.prevIndex, action.newIndex);
        case changeText: return changeTextContent(state, action.value);
        case newText: return addText(state);
        case newImageFromFile: return addImageFromFile(state);
        case newImage: return addImage(state, action.value);
        case newPrimitive: return addPrimitives(state, action.newPrimitive);
        case deleteElems: return deleteElements(state);
        case chLayer: return changeLayer(state, Number(action.value))
        case chColor: return changeColor(state, action.value)
        case chFont: return changeFont(state, action.value, action.newFontSize, action.newWeight)
        case chContourColor: return changeContourColor(state, action.value)
        default: return state.presentation.slides
    }
}