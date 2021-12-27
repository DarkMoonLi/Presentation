import styles from './slide.module.css'
import '../../scripts/structure'
import { getId, putSelectedElement, clearSelectedElements, Slide } from "../../scripts/structure";
import SomebodyText from '../primitives/text/text';
import { dispatch, editor } from '../../scripts/editor';
import Workspace from '../workspace/workspace';
import { DOMElement } from 'react';
import Circle from '../primitives/circle/circle';
import Rectangle from '../primitives/rectangle/rectangle';
import Triangle from '../primitives/triangle/triangle';

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {
    const id = slide.id
    return (
        <li className={styles.slideContainer} key={slide.id}>
            <span className={styles.numberSlide}>{index}</span>
            <svg className={styles.slide} onClick={(id) => {
                dispatch(clearSelectedElements, {});
                dispatch(putSelectedElement, {id});
                }}>
                
                {slide.content.map(function(content) {
                    if (content.type === 'text') {
                        return SomebodyText(content)
                    } else if (content.type === 'circle') {
                        return Circle
                    } else if (content.type === 'triangle') {
                        return Triangle
                    } else if (content.type === 'rectangle') {
                        return Rectangle
                    } else if (content.type === 'image') {
                        return
                    }
                })}
                
            </svg>
        </li>
)}