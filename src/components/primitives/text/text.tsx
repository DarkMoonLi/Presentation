import { changeTextContent, clearRedo, clearSelectedElementsOnSlide, deleteSelectedElement, moveElements, putSelectedElement, TextType } from "../../../scripts/structure"
import { dispatch, editor } from "../../../scripts/editor"
import { useRef, useState, useEffect } from "react";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";

function SomebodyText(text: TextType) {

  const ref = useRef<HTMLDivElement>(null);

  const pos = useDragAndDrop(ref, text.position);

  useEffect(() => {
    if (pos !== text.position) dispatch(moveElements, pos)
  });

  let border = '';

  if (editor.selectedElements.includes(text.id)) {
    border = '3px solid #000';
  }

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
      <div
        ref={ref}
        style={{
          ...textStyle,
          border: ''
        }
      }>
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
            } else {dispatch(deleteSelectedElement, text.id)};
          }}
          onChange={(event) => {
            if (editor.redo.length !== 0) {
              dispatch(clearRedo, {});
            }
            let newText = event.target.value;
            dispatch(changeTextContent, newText)
          }}
          onBlur={(event) => {
            dispatch(deleteSelectedElement, text.id)
          }}
        >
          {text.content}
        </textarea>
      </div>
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