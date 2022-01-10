import { useEffect } from "react";

export const useDragAndDrop = (elementRef: any, initPosition: { x: number; y: number }, setPosition: any, setMoving: any, setEdit: any) => {

    let startPosition: {
        x: number,
        y: number
    }

    const onMouseDown = (e: MouseEvent) => {
        startPosition = {
            x: e.pageX,
            y: e.pageY
        }
        setMoving(true)
        setEdit(false)
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onStopMove);
    }

    const onMove = (e: MouseEvent) => {
        const delta = { x: e.pageX - startPosition.x, y: e.pageY - startPosition.y }
        const newPos = { x: initPosition.x + delta.x, y: initPosition.y + delta.y }
        setPosition(newPos);
    }

    const onStopMove = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onStopMove);
        setMoving(false)
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
