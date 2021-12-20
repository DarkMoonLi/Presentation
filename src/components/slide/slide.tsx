import React from "react";
import styles from './slide.module.css'
import '../../scripts/structure'
import { getDefaultSlide, Slide } from "../../scripts/structure";

export default function SlideView(slide: Slide) {
    return (
        <li className={styles.slideContainer} key={slide.id}>
            <span className={styles.numberSlide}>{slide.id}</span>
            <div className={styles.slide}>
                
            </div>
        </li>
)}
