import { useCallback, useEffect, useState } from "react";

function useContextMenu(ref: any) {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback((event: MouseEvent) => {
    const workspace = document.getElementById('workspace');
    let pos = {
      x: 0,
      y: 0
    }
    let not = false
    if (workspace != null) {
      let docPos = workspace.getBoundingClientRect();
      pos = {
        x: docPos.x,
        y: docPos.y
      }
      not = (event.clientX > docPos.x && event.clientX < docPos.x+docPos.width) && (event.clientY > docPos.y && event.clientY < docPos.y + docPos.height)
    }
    event.preventDefault();
    if (not) {
      setAnchorPoint({ x: event.clientX - pos.x, y: event.clientY - pos.y - 30 });
      setShow(true);
    }
  }, [setShow, setAnchorPoint])

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    }
  });
  return { anchorPoint, show };
}

export default useContextMenu;

