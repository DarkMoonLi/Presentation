import styles from './slide.module.css'
import '../../scripts/structure'
import { getId, putSelectedElement, clearSelectedElements, Slide } from "../../scripts/structure";
import SomebodyText from '../primitives/text/text';
import { dispatch, editor } from '../../scripts/editor';
import Workspace from '../workspace/workspace';
import { DOMElement } from 'react';
import getContent from '../content/content';

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {
    const id = slide.id
    return (
        <li className={styles.slideContainer} key={slide.id}>
            <span className={styles.numberSlide}>{index}</span>
            <div className={styles.slide} onClick={(id) => {
                dispatch(clearSelectedElements, {});
                dispatch(putSelectedElement, {id});
                <Workspace {...slide}/>
            }}>
            
            {getContent(slide)}
                
            </div>
        </li>
)}