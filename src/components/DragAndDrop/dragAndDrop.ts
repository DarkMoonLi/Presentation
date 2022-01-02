import React, { RefObject, useEffect, useRef, useState } from "react";

export function useDragAndDrop(elementRef: React.MutableRefObject<any>, startPosition: {x: number, y: number}) {
    const [position, setPosition] = useState(startPosition);

    let startX = 0;
    let startY = 0;

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.addEventListener("mousedown", moveStart);
        };
        return () => {
            if (elementRef.current) {
                elementRef.current.removeEventListener("mousedown", moveStart)
            }
        }
    });

    function moveStart(event: MouseEvent) {
        startX = event.pageX;
        startY = event.pageY;

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", stopMove);
    }

    function onMove(event: MouseEvent) {
        const deltaX = event.pageX - startX; 
        const deltaY = event.pageY - startY;

        const newPos = {
            x: startPosition.x + deltaX,
            y: startPosition.y + deltaY
        }
        setPosition(newPos)
    }

    function stopMove() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', stopMove);        
    }

    return(position)
}