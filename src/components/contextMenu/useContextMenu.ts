import { useCallback, useEffect, useState } from "react";

function useContextMenu() {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    setAnchorPoint({ x: event.offsetX + 5, y: event.offsetY - 10});
    setShow(true);
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
  return {anchorPoint, show};
}

export default useContextMenu;

