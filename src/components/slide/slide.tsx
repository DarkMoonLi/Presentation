import styles from './slide.module.css'
import '../../scripts/structure'
import { /*getId,*/ putSelectedElement, Slide } from "../../scripts/structure";
import SomebodyText from '../primitives/text/text';
import { dispatch, editor } from '../../scripts/editor';

type MiniSlide = {
    slide: Slide
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {
    const id = slide.id
    return (
        <li className={styles.slideContainer} key={slide.id}>
            <span className={styles.numberSlide}>{index}</span>
            <div className={styles.slide} onClick={() => dispatch(putSelectedElement, {id})}>
                
            </div>
        </li>
)}
