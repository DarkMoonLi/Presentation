import { Application, clearSelectedElements, clearSelectedElementsOnSlide, moveElements, putSelectedElement, setTitle, deleteSelectedElement, changeTextContent, savePresentation, openPresentation, addSlide, loadPresentation, deleteSlide, redo, undo, addText, addImageFromFile, startViewing, stopViewing, viewingNextSlide, viewingPrevSlide, addImage, addPrimitives, createNewPresentation, loadBackground, setBackgroundImg, changeWindowSize, changeBackground, move, deleteElements } from "../../scripts/structure";
import { putElem, clearAllElems, clearSlideElems, deleteElem } from "../actions/selectedElements"
import { moving, resize } from "../actions/moveElements"
import { changePresentationTitle } from "../actions/title";
import { changeText } from "../actions/text";
import { download, upload } from "../actions/download";
import { addNewSlide, delSlide, moveSlide, setBackground, uploadImg } from "../actions/slides";
import { NewPresentation, presentationFromFile } from "../actions/presentationActions";
import { redoAction } from "../actions/redo";
import { undoAction } from "../actions/undoActions";
import { deleteElems, newImage, newImageFromFile, newPrimitive, newText } from "../actions/slideElementActions";
import { nextSlide, offViewingMode, onViewingMode, prevSlide } from "../actions/viewing";
import { act } from "react-dom/test-utils";
import { changeBack } from "../actions/changeBackground";

function reducer(state: Application = {} as Application, action: any) {
    switch(action.type) {
        // Работа с выбраными элементами
        case putElem: return putSelectedElement(state, action.selectedElement);
        case clearAllElems: return clearSelectedElements(state);
        case clearSlideElems: return clearSelectedElementsOnSlide(state);
        case deleteElem: return deleteSelectedElement(state, action.value);
        // Работа с элементами на слайде
        case moving: return moveElements(state, action.newPos.x, action.newPos.y);
        case resize: return changeWindowSize(state, action.width, action.height, action.x, action.y);
        case changeText: return changeTextContent(state, action.value);
        case newText: return addText(state);
        case newImageFromFile: return addImageFromFile(state);
        case newImage: return addImage(state, action.value);
        case newPrimitive: return addPrimitives(state, action.value);
        case deleteElems: return deleteElements(state)
        // Работа с презентацией
        case changePresentationTitle: return setTitle(state, action.value);
        case download: return savePresentation(state, action.value);
        case upload: return loadPresentation(state, action.value);
        case presentationFromFile: return openPresentation(state, action.value);
        case NewPresentation: return createNewPresentation(state);
        // Работа со слайдами
        case addNewSlide: return addSlide(state);
        case delSlide: return deleteSlide(state);
        case uploadImg: return loadBackground(state);
        case setBackground: return setBackgroundImg(state, action.value);
        case changeBack: return changeBackground(state, action.newBackground);
        case moveSlide: return move(state, action.prevIndex, action.newIndex);
        // undo и redo
        case redoAction: return redo(state);
        case undoAction: return undo(state);
        // viewing
        case onViewingMode: return startViewing(state);
        case offViewingMode: return stopViewing(state);
        case nextSlide: return viewingNextSlide(state);
        case prevSlide: return viewingPrevSlide(state); 
        default: return state
    }
}

export default reducer