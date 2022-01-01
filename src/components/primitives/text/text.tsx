import { changeTextContent, clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement, Slide, TextType } from "../../../scripts/structure"
import { dispatch, editor } from "../../../scripts/editor"
import { useState, Component, useRef } from "react";
import Workspace from "../../workspace/workspace";

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
        id={text.id}
        style={textStyle}
        color={text.color}
        wrap="soft"
        value={text.content}
        onClick={(event) => {
          if (!event.ctrlKey) {
            dispatch(clearSelectedElementsOnSlide, {});
            dispatch(putSelectedElement, text.id);
          } else {dispatch(deleteSelectedElement, text.id)}
        }}
        onChange={(event) => {
          let newText = event.target.value;
          dispatch(changeTextContent, newText)
        }}
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
        if (!event.ctrlKey) {
          dispatch(clearSelectedElementsOnSlide, {})
        }
        dispatch(putSelectedElement, text.id);
      }}
    >
      {text.content}
    </p>
  )
}

export default SomebodyText