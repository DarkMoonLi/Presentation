import { Slide, TextType } from "../../../scripts/structure"

function SomebodyText(text: TextType) {
  return(
    <input type={'text'} value={text.content}></input>
  )
}

export default SomebodyText