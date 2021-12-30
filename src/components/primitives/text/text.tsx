import { changeTextContent, putSelectedElement, Slide, TextType } from "../../../scripts/structure"
import { dispatch, editor } from "../../../scripts/editor"
import { useState, Component, useRef } from "react";

function SomebodyText(text: TextType) {
  let border = '';

  if (editor.selectedElements.includes(text.id)) {
    border = '3px solid #000';
  }
  //const [value, setValue] = useState(text.content);

  //function handleChange(event: any) {
  //  event.target.select()
  //  setValue(event.target.value);
  //  dispatch(changeTextContent, value);
  //}

  const textStyle = {
    x: text.position.x,
    y: text.position.y,
    width: text.size.width,
    height: text.size.height,
    fontFamily: text.font,
    fontSize: text.fontSize,
    color: text.color,
    fontWeight: text.weight,
    border: border
  };

  if (editor.selectedElements.includes(text.id)) {
    return (
      <textarea
        style={textStyle}
        color={text.color}
        onChange={(event) => {
          let newText = event.target.value;
          console.log(newText);
          dispatch(changeTextContent, newText)}
        }
      >
        {text.content}
      </textarea>
    )
  }

  return(
    <p
      id={text.id} 
      style={textStyle}
      onClick={(event) => {
        //handleChange(event)
        dispatch(putSelectedElement, text.id);
      }}
    >
      {text.content}
    </p>
  )
}

export default SomebodyText