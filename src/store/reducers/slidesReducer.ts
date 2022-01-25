import { addImage, addImageFromFile, addPrimitives, addText, Application, changeBackground, changeColor, changeContourColor, changeFont, changeLayer, changeTextContent, changeWindowSize, deleteElements, getDefaultSlide, loadBackground, move, moveElements, setBackgroundImg, setPosition, Slide } from "../../scripts/structure";
import { changeBack } from "../actions/changeBackground";
import { moving } from "../actions/moveElements";
import { resize } from "../actions/resizeElements";
import { chColor, chContourColor, chFont, chLayer, deleteElems, newImage, newImageFromFile, newPrimitive, newText } from "../actions/slideElementActions";
import { addNewSlide, moveSlide, setBackground, setPos, uploadImg } from "../actions/slides";
import { changeText } from "../actions/text";
import { ActionType } from "./mainReducer";

export function slides(state: Application = {} as Application, action: ActionType): Array<Slide> {
    switch (action.type) {
        case addNewSlide: return state.presentation.slides.concat(getDefaultSlide(state.presentation.slides.length));
        case uploadImg: return loadBackground(state);
        case setBackground: return setBackgroundImg(state, action.value);
        case changeBack: return changeBackground(state, action.value);
        case moveSlide: return move(state, action.newPos.y);
        case setPos: return setPosition(state);
        case changeText: return changeTextContent(state, action.value);
        case newText: return addText(state);
        case newImageFromFile: return addImageFromFile(state);
        case newImage: return addImage(state, action.value);
        case newPrimitive: return addPrimitives(state, action.newPrimitive);
        case deleteElems: return deleteElements(state);
        case chLayer: return changeLayer(state, Number(action.value))
        case chColor: return changeColor(state, action.value)
        case chFont: return changeFont(state, action.value, action.newFontSize, action.newWeight)
        case chContourColor: return changeContourColor(state, action.value);
        case moving: return moveElements(state, action.newPos.x, action.newPos.y);
        case resize: return changeWindowSize(state, action.size.width, action.size.height, action.newPos.x, action.newPos.y);
        default: return state.presentation.slides
    }
}