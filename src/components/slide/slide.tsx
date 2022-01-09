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
    return (
        <li key={slide.id} className={styles.slideContainer}>
            <span className={styles.numberSlide}>{index}</span>
            <svg 
                width={'1416px'}
                height={'658px'}
                viewBox='0 0 1400 800'
                preserveAspectRatio='xMinYMax meet'
                id={slide.id} 
                className={styles.slide} 
                onClick={(event) => {
                    if (!event.ctrlKey) {
                        store.dispatch(clearSelectedElement());
                    }
                    store.dispatch(putSelectedElement(slide.id))
                }}
            >
                {getContent(slide)}
            </svg>
        </li>
)}