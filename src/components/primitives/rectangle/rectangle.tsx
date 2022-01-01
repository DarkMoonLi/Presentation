import { clearSelectedElementsOnSlide, deleteSelectedElement, PrimitiveType, putSelectedElement } from "../../../scripts/structure"
import { dispatch } from "../../../scripts/editor"

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
            dispatch(clearSelectedElementsOnSlide, {});
            dispatch(putSelectedElement, rectangle.id)
          } else {dispatch(deleteSelectedElement, rectangle.id)}
        }}
      />
    </svg>
  )
}

export default Rectangle