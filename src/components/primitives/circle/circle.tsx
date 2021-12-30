import { PrimitiveType, putSelectedElement, moveElements } from "../../../scripts/structure"
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
        onClick={() => {
          dispatch(putSelectedElement, circle.id)
        }}
      />
    </svg>
  )}

export default Circle