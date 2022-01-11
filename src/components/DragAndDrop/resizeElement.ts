import { useEffect } from "react";

export const useResizeElement1 = (elementRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  }, 
                                  initPos: {
                                    x: number,
                                    y: number
                                  }, 
                                  setResize: any, 
                                  setPos: any, 
                                  setMoving: any,
                                  setEdit: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    startPos = {
      x: e.pageX,
      y: e.pageY
    }
    setMoving(true)
    setEdit(false);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.x - startPos.x, y: e.y - startPos.y };
    let newPos = {
      x: initPos.x + delta.x,
      y: initPos.y + delta.y
    };
    let newSize = {
      width: initSize.width - delta.x,
      height: initSize.height - delta.y
    };
    setResize(newSize);
    setPos(newPos);
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
    setMoving(false);
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

export const useResizeElement2 = (elementRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  },
                                  initPos: {
                                    x: number,
                                    y: number
                                  },
                                  setResize: any,
                                  setPos: any,
                                  setMoving: any,
                                  setEdit: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    setMoving(true);
    setEdit(false);
    startPos = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.pageX - startPos.x, y: e.pageY - startPos.y }
    let newPos = {
      x: initPos.x,
      y: initPos.y + delta.y
    }
    let newSize = {
      width: initSize.width + delta.x,
      height: initSize.height - delta.y
    }
    setPos(newPos);
    setResize(newSize);
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

export const useResizeElement3 = (elementRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  },
                                  initPos: {
                                    x: number,
                                    y: number
                                  }, 
                                  setResize: any,
                                  setPos: any,
                                  setMoving: any,
                                  setEdit: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    setMoving(true)
    setEdit(false)
    startPos = {
      x: e.pageX,
      y: e.pageY
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.pageX - startPos.x, y: e.pageY - startPos.y };
    let newPos = {
      x: initPos.x,
      y: initPos.y,
    }
    let newSize = {
      width: initSize.width + delta.x,
      height: initSize.height + delta.y
    };
    setPos(newPos);
    setResize(newSize);
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

export const useResizeElement4 = (elementRef: any, 
                                  initSize: {
                                    width: number,
                                    height: number
                                  }, 
                                  initPos: {
                                    x: number,
                                    y: number
                                  },
                                  setResize: any,
                                  setPos: any, 
                                  setMoving: any, 
                                  setEdit: any) => {

  let startPosition: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    startPosition = {
      x: e.pageX,
      y: e.pageY
    };
    setMoving(true)
    setEdit(false)
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.pageX - startPosition.x, y: e.pageY - startPosition.y }
    let newPos = {
      x: initPos.x + delta.x,
      y: initPos.y
    };
    let newSize = {
      width: initSize.width - delta.x,
      height: initSize.height + delta.y
    };
    setPos(newPos);
    setResize(newSize);
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