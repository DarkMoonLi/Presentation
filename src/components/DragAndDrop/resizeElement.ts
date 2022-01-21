import { useEffect } from "react";
import { changeSize } from "../../store/actionCreators/moveElements";
import store from "../../store/store";

export const useResizeElement1 = (resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  }, 
                                  initPos: {
                                    x: number,
                                    y: number
                                  }) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    startPos = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onStopMove);
  }

  const onMove = (e: MouseEvent) => {
    const delta = { x: e.pageX - startPos.x, y: e.pageY - startPos.y };
    const newPos = {
      x: initPos.x + delta.x,
      y: initPos.y + delta.y
    };
    const newSize = {
      width: initSize.width - delta.x,
      height: initSize.height - delta.y
    };
    store.dispatch(changeSize(newSize, newPos));
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

export const useResizeElement2 = (resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  },
                                  initPos: {
                                    x: number,
                                    y: number
                                  }) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
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
    store.dispatch(changeSize(newSize, newPos));
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

export const useResizeElement3 = (resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  },
                                  initPos: {
                                    x: number,
                                    y: number
                                  }) => {

  let startPos: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
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
    store.dispatch(changeSize(newSize, newPos))
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

export const useResizeElement4 = (resizeRef: any,
                                  initSize: {
                                    width: number,
                                    height: number
                                  }, 
                                  initPos: {
                                    x: number,
                                    y: number
                                  }) => {

  let startPosition: {
    x: number,
    y: number
  };

  const onMouseDown = (e: MouseEvent) => {
    startPosition = {
      x: e.pageX,
      y: e.pageY
    };
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
    store.dispatch(changeSize(newSize, newPos))
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