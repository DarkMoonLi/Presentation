import { PrimitiveType, putSelectedElement } from "../../../scripts/structure"
import { dispatch } from "../../../scripts/editor"

function Rectangle(rectangle: PrimitiveType) {
  return(
    <rect 
      id={rectangle.id} 
      x={rectangle.position.x} 
      y={rectangle.position.y} 
      width={rectangle.size.width} 
      height={rectangle.size.height} 
      fill={rectangle.color}
      onClick={() => dispatch(putSelectedElement, rectangle.id)}
    />
  )
}

export default Rectangle