import { useEffect } from "react";

export const useResizeElement = (elementRef: any, initSize: { width: number; height: number }, setSize: any, setResize: any, setEdit: any) => {

  let beginSize: {
    width: number,
    height: number
  }

  const onMouseDown = (e: any) => {
    beginSize = {
      width: initSize.width,
      height: initSize.height
    }
    setResize(true)
    setEdit(false)
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    let newSize ={x: 0, y: 0}
    const delta = { x: e.pageX - beginSize.width, y: e.pageY - beginSize.height }
    if (delta.x >= 0 && delta.y >= 0)
    {
      newSize = { x: initSize.width + delta.x, y: initSize.height + delta.y }
    } else {
      newSize = { x: initSize.width - delta.x, y: initSize.height - delta.y }
    }
    setSize(newSize);
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
    setResize(false)
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
