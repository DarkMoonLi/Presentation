import { useState } from "react";
import { moveElements } from "../../scripts/structure";

let coords: { x?: any; y?: any; } = {};

export function handleMouseDown(elem: any) {
    coords = {
        x: elem.pageX,
        y: elem.pageY
    }
    document.addEventListener('mousemove', handleMouseMove);
};

export function handleMouseUp(){
    document.removeEventListener('mousemove', handleMouseMove);
    coords = {};
};

export function handleMouseMove(elem: { pageX: number; pageY: number; }) {
    const xDiff = coords.x - elem.pageX;
    const yDiff = coords.y - elem.pageY;

    coords.x = elem.pageX;
    coords.y = elem.pageY;
};