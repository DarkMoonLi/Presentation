import styles from './slide.module.css'
import { Slide } from "../../scripts/structure";
import getContent from '../content/content';
import store from '../../store/store';
import { putSelectedElement, clearSelectedElement, clearSelectedElementsOnSlide } from '../../store/actionCreators/selectedElement';
import { useRef } from "react";
import { useDragAndDrop } from "../DragAndDrop/dragAndDrop";

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {

    const elemRef = useRef(null);
  
    const state = store.getState();
    useDragAndDrop(elemRef, true);

    let border: string = '';
    if (state.selectedElements.includes(slide.id)) {
        border = '2px solid #7073aa';
    };

    const slideStyle = {
        border: border,
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
                top: slide.y - 100 * (index-1)
            }}
            onMouseDown={() => store.dispatch(clearSelectedElementsOnSlide())}
            onClick={(event: { ctrlKey: any; }) => {
                if (!event.ctrlKey) {
                    store.dispatch(clearSelectedElement())
                }
                store.dispatch(putSelectedElement(slide.id))
            }}
            onContextMenu={(event: { preventDefault: () => void; }) => {
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