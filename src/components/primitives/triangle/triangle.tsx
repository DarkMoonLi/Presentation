import { PrimitiveType } from "../../../scripts/structure";

function Triangle(triangle: PrimitiveType) {
  let x1 = triangle.position.x;
  let x2 = triangle.position.x + triangle.size.width/2;
  let x3 = triangle.position.x + triangle.size.width;
  let y1 = triangle.position.y + triangle.size.height;
  let y2 = triangle.position.y;
  let y3 = triangle.position.y + triangle.size.height;
  let str = ''+x1+','+y1+' '+x2+','+y2+' '+x3+','+y3;
  return(
    <polygon 
      id={triangle.id} 
      points= {str} 
      fill={triangle.color}/>
  )
}

export default Triangle