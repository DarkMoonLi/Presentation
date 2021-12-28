import { Slide, TextType } from "../../../scripts/structure"

function SomebodyText(text: TextType) {
  return(
    <text 
      id={text.id} 
      x={text.position.x}
      y={text.position.y}
      width={text.size.width}
      height={text.size.height}>
        {text.content}
    </text>
  )
}

export default SomebodyText