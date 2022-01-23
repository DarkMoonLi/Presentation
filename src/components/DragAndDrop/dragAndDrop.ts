import { useEffect } from "react";
import { moveElements } from "../../store/actionCreators/moveElements";
import { constPosition, moveSlides } from "../../store/actionCreators/slidesActions";
import store from "../../store/store";

export const useDragAndDrop = (elementRef: any, initPosition: { x: number; y: number }, isSlide: boolean = false) => {

    let startPosition: {
        x: number,
        y: number
    }

    const onMouseDown = (e: MouseEvent) => {
        startPosition = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onStopMove);
    }

    const onMove = (e: MouseEvent) => {
        console.log(elementRef.current);
        const delta = { x: e.clientX - startPosition.x, y: e.clientY - startPosition.y }
        const newPos = { x: initPosition.x + delta.x, y: initPosition.y + delta.y }

        if (isSlide) 
            store.dispatch(moveSlides({x: 0, y: newPos.y}))
        else 
            store.dispatch(moveElements(newPos))
    }

    const onStopMove = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onStopMove);
        if (isSlide) store.dispatch(constPosition())
    };

    useEffect(() => {
        if (elementRef.current)
            elementRef.current.addEventListener("mousedown", onMouseDown);

        return () => {
            if (elementRef.current)
                elementRef.current.removeEventListener("mousedown", onMouseDown);
        }
    })
};
