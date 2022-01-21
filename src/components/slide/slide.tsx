import styles from './slide.module.css'
import { Slide } from "../../scripts/structure";
import getContent from '../content/content';
import store from '../../store/store';
import { putSelectedElement, clearSelectedElement, clearSelectedElementsOnSlide } from '../../store/actionCreators/selectedElement';
import { useRef } from "react";
import { useDragAndDrop } from "../DragAndDrop/dragAndDrop";
import { constPosition, moveSlides } from '../../store/actionCreators/slidesActions';

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {

    const elemRef = useRef(null);
  
    useDragAndDrop(elemRef, {x:0, y: slide.y}, true);

    const slideStyle = {
        backgroundImage: `url(${slide.backgroundImg})`,
        backgroundColor: slide.background,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center'
    };

    return (
        <foreignObject
            ref={elemRef}
            style={{
                position: 'relative',
                top: slide.y - 100*(index-1)
            }}
            onMouseDown={() => store.dispatch(clearSelectedElementsOnSlide())}
            onMouseUp={() => store.dispatch(constPosition())}
            onClick={(event) => {
                if (!event.ctrlKey) {
                    store.dispatch(clearSelectedElement())
                }
                store.dispatch(putSelectedElement(slide.id))
            }}
            onContextMenu={(event) => {
                event.preventDefault()
            }}
        >
            <li 
            key={slide.id} 
            className={styles.slideContainer} 
            >
                <span className={styles.numberSlide}>{index}</span>
                <svg 
                    viewBox='0 0 1400 800'
                    preserveAspectRatio='xMinYMax meet'
                    id={slide.id} 
                    className={styles.slide} 
                    style={slideStyle}
                >
                    {getContent(slide)}
                </svg>
            </li>
        </foreignObject>
)}