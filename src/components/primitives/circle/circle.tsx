import { useRef } from "react";
import { dispatch } from "../../../scripts/editor";
import { PrimitiveType } from "../../../scripts/structure"
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";
import { handleMouseDown, handleMouseUp } from "../../DragAndDrop/dragAndDrop";

function Circle(circle: PrimitiveType) {
  let border = '';
  const ref = useRef();

  if (store.getState().selectedElements.includes(circle.id)) {
    border = '3px solid #000';
  }

  const draggable = { cursor: 'move', border: border }
  return (
    <circle
      ref={() => ref}
      id={circle.id}
      cx={circle.position.x}
      cy={circle.position.y}
      r={circle.size.width / 2}
      fill={circle.color}
      style={{ border: border }}
      onClick={(event) => {
        if (!event.ctrlKey) {
          store.dispatch(clearSelectedElementsOnSlide());
          store.dispatch(putSelectedElement(circle.id));
        } else { store.dispatch(deleteSelectedElement(circle.id)) }
      }}
      onMouseDown={store.dispatch(handleMouseDown)}
      onMouseUp={store.dispatch(handleMouseUp)}
    />
  )
}

export default Circle