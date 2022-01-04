import styles from './slide.module.css'
import { Slide } from "../../scripts/structure";
import { dispatch, editor } from '../../scripts/editor';
import getContent from '../content/content';
import store from '../../store/store';
import { putSelectedElement, clearSelectedElement } from '../../store/actionCreators/selectedElement';

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {
    if (editor.selectedElements.length === 0) {
        editor.selectedElements.push(slide.id)
    }
    return (
        <li key={slide.id} className={styles.slideContainer}>
            <span className={styles.numberSlide}>{index}</span>
            <div 
                id={slide.id} 
                className={styles.slide} 
                onClick={(event) => {
                    let slideId = slide.id;
                    if (!event.ctrlKey) {
                        store.dispatch(clearSelectedElement());
                    }
                    store.dispatch(putSelectedElement(slideId))
                }}
            >
            
                {getContent(slide)}
                
            </div>
        </li>
)}