import styles from './slide.module.css'
import '../../scripts/structure'
import { putSelectedElement, clearSelectedElements, Slide } from "../../scripts/structure";
import { dispatch, editor } from '../../scripts/editor';
import Workspace from '../workspace/workspace';
import getContent from '../content/content';

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {
    return (
        <li key={slide.id} className={styles.slideContainer}>
            <span className={styles.numberSlide}>{index}</span>
            <div id={slide.id} className={styles.slide} onClick={() => {
                let slideId = slide.id
                dispatch(clearSelectedElements, {});
                dispatch(putSelectedElement, slideId);
            }}>
            
                {getContent(slide)}
                
            </div>
        </li>
)}