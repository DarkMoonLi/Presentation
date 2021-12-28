import { PrimitiveType } from "../../../scripts/structure"

function Rectangle(rectangle: PrimitiveType) {
  return(
    <rect 
      id={rectangle.id} 
      x={rectangle.position.x} 
      y={rectangle.position.y} 
      width={rectangle.size.width} 
      height={rectangle.size.height} 
      fill={rectangle.color}
    />
  )
}

export default Rectangle