import { useEffect } from "react";

export const useResizeElement1 = (elementRef: any,
                                  resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  }, 
                                  initPos: {
                                    x: number,
                                    y: number
                                  }, 
                                  setSize: any, 
                                  setPos: any, 
                                  setResize: any,
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
    setResize(true)
    setEdit(false);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    let pos = elementRef.current.getBoundingClientRect();
    if (e.clientX > pos.x && e.clientX < (pos.x + pos.width) && e.clientY > pos.y && e.clientY < (pos.y + pos.height)) {
      const delta = { x: e.pageX - startPos.x, y: e.pageY - startPos.y };
      const newPos = {
        x: initPos.x + delta.x,
        y: initPos.y + delta.y
      };
      const newSize = {
        width: initSize.width - delta.x,
        height: initSize.height - delta.y
      };
      setSize(newSize);
      setPos(newPos);
    }
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
    setResize(false);
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

export const useResizeElement2 = (elementRef: any,
                                  resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  },
                                  initPos: {
                                    x: number,
                                    y: number
                                  },
                                  setSize: any,
                                  setPos: any,
                                  setResize: any,
                                  setEdit: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    setResize(true);
    setEdit(false);
    startPos = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    let pos = elementRef.current.getBoundingClientRect();
    if (e.clientX > pos.x && e.clientX < (pos.x + pos.width) && e.clientY > pos.y && e.clientY < (pos.y + pos.height)) {
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
      setSize(newSize);
    }
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
    setResize(false)
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

export const useResizeElement3 = (elementRef: any,
                                  resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  },
                                  initPos: {
                                    x: number,
                                    y: number
                                  }, 
                                  setSize: any,
                                  setPos: any,
                                  setResize: any,
                                  setEdit: any) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    setResize(true)
    setEdit(false)
    startPos = {
      x: e.pageX,
      y: e.pageY
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    let pos = elementRef.current.getBoundingClientRect();
    if (e.clientX > pos.x && e.clientX < (pos.x + pos.width) && e.clientY > pos.y && e.clientY < (pos.y + pos.height)) {
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
      setSize(newSize);
    }
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
    setResize(false)
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

export const useResizeElement4 = (elementRef: any, 
                                  resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  }, 
                                  initPos: {
                                    x: number,
                                    y: number
                                  },
                                  setSize: any,
                                  setPos: any, 
                                  setResize: any, 
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
    setResize(true)
    setEdit(false)
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    let pos = elementRef.current.getBoundingClientRect();
    if (e.clientX > pos.x && e.clientX < (pos.x + pos.width) && e.clientY > pos.y && e.clientY < (pos.y + pos.height)) {
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
      setSize(newSize);
    }
  }

  const onStopMove = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onStopMove);
    setResize(false)
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