import { useEffect } from "react";
import { changeSize } from "../../store/actionCreators/moveElements";
import store from "../../store/store";

export const useResizeElement1 = (resizeRef: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    startPos = {
      x: e.clientX,
      y: e.clientY
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.clientX - startPos.x, y: e.clientY - startPos.y };
    startPos = {
      x: startPos.x + delta.x,
      y: startPos.y + delta.y
    };

    store.dispatch(changeSize({width: -delta.x, height: -delta.y}, delta));
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
  };

  useEffect(() => {
    if (resizeRef.current)
      resizeRef.current.addEventListener("mousedown", onMouseDown);

    return () => {
      if (resizeRef.current)
        resizeRef.current.removeEventListener("mousedown", onMouseDown);
    }
  })
};

export const useResizeElement2 = (resizeRef: any) => {

  let startPos: {
    x: number,
    y: number
  };

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
    store.dispatch(changeSize({width: delta.x, height: -delta.y}, {x: 0, y: delta.y}));
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
  };

  useEffect(() => {
    if (resizeRef.current)
      resizeRef.current.addEventListener("mousedown", onMouseDown);

    return () => {
      if (resizeRef.current)
        resizeRef.current.removeEventListener("mousedown", onMouseDown);
    }
  })
};

export const useResizeElement3 = (resizeRef: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    startPos = {
      x: e.clientX,
      y: e.clientY
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.clientX - startPos.x, y: e.clientY - startPos.y };
    startPos = {
      x: startPos.x + delta.x,
      y: startPos.y + delta.y
    }
    store.dispatch(changeSize({width: delta.x, height: delta.y}, {x: 0, y: 0}))
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
  };

  useEffect(() => {
    if (resizeRef.current)
      resizeRef.current.addEventListener("mousedown", onMouseDown);

    return () => {
      if (resizeRef.current)
        resizeRef.current.removeEventListener("mousedown", onMouseDown);
    }
  })
};

export const useResizeElement4 = (resizeRef: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    startPos = {
      x: e.clientX,
      y: e.clientY
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.clientX - startPos.x, y: e.clientY - startPos.y }
    startPos = {
      x: startPos.x + delta.x,
      y: startPos.y + delta.y
    }
    store.dispatch(changeSize({width: -delta.x, height: delta.y}, {x: delta.x, y: 0}))
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
  };

  useEffect(() => {
    if (resizeRef.current)
      resizeRef.current.addEventListener("mousedown", onMouseDown);

    return () => {
      if (resizeRef.current)
        resizeRef.current.removeEventListener("mousedown", onMouseDown);
    }
  })
};