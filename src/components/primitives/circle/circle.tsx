import { PrimitiveType } from "../../../scripts/structure"
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";

function Circle(circle: PrimitiveType){
  let border = '';
  if (store.getState().selectedElements.includes(circle.id)) {
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
            store.dispatch(clearSelectedElementsOnSlide());
            store.dispatch(putSelectedElement(circle.id));
          } else {store.dispatch(deleteSelectedElement(circle.id))}
        }}
      />
    </svg>
  )}
  
export default Circle