import styles from './slide.module.css'
import '../../scripts/structure'
import { putSelectedElement, clearSelectedElements, Slide } from "../../scripts/structure";
import { dispatch, editor } from '../../scripts/editor';
import getContent from '../content/content';

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
                    let slideId = slide.id
                    if (!event.ctrlKey) {
                        dispatch(clearSelectedElements, {});
                    }
                    dispatch(putSelectedElement, slideId);
                }}
            >
            
                {getContent(slide)}
                
            </div>
        </li>
)}