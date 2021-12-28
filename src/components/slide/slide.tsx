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
        <li id={slide.id} className={styles.slideContainer} key={slide.id}>
            <span className={styles.numberSlide}>{index}</span>
            <svg id={slide.id} className={styles.slide} onClick={() => {
                let slideId = slide.id
                dispatch(clearSelectedElements, editor);
                dispatch(putSelectedElement, slideId);
            }}>
            
                {getContent(slide)}
                
            </svg>
        </li>
)}