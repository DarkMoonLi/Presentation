import { useRef, useState } from "react";
import { PrimitiveType } from "../../../scripts/structure"
import { moveElements } from "../../../store/actionCreators/moveElements";
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";

function Circle(circle: PrimitiveType){
  let border = '';

  if (store.getState().selectedElements.includes(circle.id)) {
    border = '3px solid #000';
  }

  const ref = useRef();
  const [position, setPosition] = useState({x: circle.position.x, y: circle.position.y});
  //useDragAndDrop(ref, position, setPosition, moveElements);
  //store.dispatch(moveElements(position))

  return(
    <svg>
      <circle 
        id={circle.id} 
        cx={circle.position.x} 
        cy={circle.position.y} 
        r={circle.size.width / 2} 
        fill={circle.color}
        style={{border: border}}
        onClick={(event) => {
          if (!event.ctrlKey) {
            store.dispatch(clearSelectedElementsOnSlide());
            store.dispatch(putSelectedElement(circle.id));
          } else {store.dispatch(deleteSelectedElement(circle.id))}
        }}
      />
    </svg>
  )}
  
export default Circle