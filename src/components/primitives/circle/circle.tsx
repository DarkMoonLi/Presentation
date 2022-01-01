import { PrimitiveType, putSelectedElement, moveElements, clearSelectedElementsOnSlide, deleteSelectedElement } from "../../../scripts/structure"
import { dispatch } from "../../../scripts/editor"
import { editor } from "../../../scripts/editor"

function Circle(circle: PrimitiveType){
  let border = '';
  if (editor.selectedElements.includes(circle.id)) {
    border = '3px solid #000';
  }
  return(
    <svg>
      <circle 
        id={circle.id} 
        cx={circle.position.x} 
        cy={circle.position.y} 
        r={circle.size.width} 
        fill={circle.color}
        style={{border: border}}
        onClick={(event) => {
          if (!event.ctrlKey) {
            dispatch(clearSelectedElementsOnSlide, {});
            dispatch(putSelectedElement, circle.id);
          } else {dispatch(deleteSelectedElement, circle.id)}
        }}
      />
    </svg>
  )}

export default Circle