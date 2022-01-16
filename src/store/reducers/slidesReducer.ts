import { AnyAction } from "redux";
import { addImage, addImageFromFile, addPrimitives, addSlide, addText, Application, changeBackground, changeTextContent, changeWindowSize, deleteElements, deleteSlide, getDefaultSlide, loadBackground, move, moveElements, setBackgroundImg, Slide } from "../../scripts/structure";
import { changeBack } from "../actions/changeBackground";
import { upload } from "../actions/download";
import { moving } from "../actions/moveElements";
import { resize } from "../actions/resizeElements";
import { deleteElems, newImage, newImageFromFile, newPrimitive, newText } from "../actions/slideElementActions";
import { addNewSlide, delSlide, moveSlide, setBackground, uploadImg } from "../actions/slides";
import { changeText } from "../actions/text";
import { ActionType } from "./mainReducer";

export function slides(state: Application = {} as Application, action: AnyAction /*ActionType = {} as ActionType*/): Array<Slide> {
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
        default: return state.presentation.slides
    }
}