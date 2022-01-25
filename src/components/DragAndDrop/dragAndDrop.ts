import { useEffect } from "react";
import { moveElements } from "../../store/actionCreators/moveElements";
import { constPosition, moveSlides } from "../../store/actionCreators/slidesActions";
import store from "../../store/store";

export const useDragAndDrop = (elementRef: any, isSlide: boolean = false) => {

    let startPos: {
        x: number,
        y: number
    }

    const onMouseDown = (e: MouseEvent) => {
        startPos = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onStopMove);
    }

    const onMove = (e: MouseEvent) => {
        const delta = { x: e.clientX - startPos.x, y: e.clientY - startPos.y }
        startPos = {
            x: startPos.x + delta.x,
            y: startPos.y + delta.y
        }

        if (isSlide) 
            store.dispatch(moveSlides({x: 0, y: delta.y}))
        else 
            store.dispatch(moveElements(delta))
    }

    const onStopMove = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onStopMove);
        if (isSlide) store.dispatch(constPosition())
    };

    useEffect(() => {
        if (elementRef.current !== null) 
            elementRef.current.addEventListener("mousedown", onMouseDown);

        return () => {
            if (elementRef.current)
                elementRef.current.removeEventListener("mousedown", onMouseDown);
        }
    })
};
