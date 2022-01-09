import { PrimitiveType } from "../../../scripts/structure";
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";

function Rectangle(rectangle: PrimitiveType) {
  return(
    <svg>
      <rect 
        id={rectangle.id} 
        x={rectangle.position.x} 
        y={rectangle.position.y} 
        width={rectangle.size.width} 
        height={rectangle.size.height} 
        fill={rectangle.color}
        onClick={(event) => {
          if (!event.ctrlKey) {
            store.dispatch(clearSelectedElementsOnSlide());
            store.dispatch(putSelectedElement(rectangle.id));
          } else {store.dispatch(deleteSelectedElement(rectangle.id))}
        }}
      />
    </svg>
  )
}

export default Rectangle