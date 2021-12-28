import { PrimitiveType } from "../../../scripts/structure"

function Circle(circle: PrimitiveType){
  return(
    <circle 
      id={circle.id} 
      cx={circle.position.x} 
      cy={circle.position.y} 
      r={circle.size.width/2} 
      fill={circle.color}
    />
  )}

export default Circle