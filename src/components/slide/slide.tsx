import styles from './slide.module.css'
import { Slide } from "../../scripts/structure";
import getContent from '../content/content';
import store from '../../store/store';
import { putSelectedElement, clearSelectedElement } from '../../store/actionCreators/selectedElement';
import { useRef, useState } from "react";
import { useDragAndDrop } from "../DragAndDrop/dragAndDrop";
import { moveSlides } from '../../store/actionCreators/slidesActions';

type MiniSlide = {
    slide: Slide,
    index: number
}

export default function SlideView({slide, index}: MiniSlide) {

    const state = store.getState();
    let prevSlidePos = 0;
    let nextSlidePos = 0;
    if (state.presentation.slides[index-2] != null) {
        let prevSlide = document.getElementById(state.presentation.slides[index-2].id);
        console.log();
        prevSlidePos = (prevSlide != null) ? prevSlide.getBoundingClientRect().top : 0;
    };
    if (state.presentation.slides[index] != null) {
        let nextSlide = document.getElementById(state.presentation.slides[index].id);
        nextSlidePos = (nextSlide != null) ? nextSlide.getBoundingClientRect().top : 0;
    }
    let nowSlide = document.getElementById(slide.id);
    let slidePos = {
        x: (nowSlide != null) ? nowSlide.getBoundingClientRect().left : 0,
        y: (nowSlide != null) ? nowSlide.getBoundingClientRect().top : 0
    };

    const elemRef = useRef(null);
    const [position, setPosition] = useState({x: 0, y: prevSlidePos + 210});
    const [moving, setMoving] = useState(false);
    const [edit, setEdit] = useState(false);
  
    useDragAndDrop(elemRef, position, setPosition, setMoving, setEdit);

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
            onMouseMove={() => {
                moving && console.log(position.y, prevSlidePos);
                if (position.y < prevSlidePos) {
                    moving && store.dispatch(moveSlides(index - 1, index - 2))
                }
                if (position.y > prevSlidePos + 220) {
                    moving && store.dispatch(moveSlides(index - 1, index))
                }
            }}
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