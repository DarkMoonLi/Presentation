import styles from './slide.module.css'
import { Slide } from "../../scripts/structure";
import getContent from '../content/content';
import store from '../../store/store';
import { putSelectedElement, clearSelectedElement } from '../../store/actionCreators/selectedElement';

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {
    if (store.getState().selectedElements.length === 0) {
        store.dispatch(putSelectedElement(slide.id));
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