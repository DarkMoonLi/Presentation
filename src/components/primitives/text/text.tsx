import { TextType } from "../../../scripts/structure";
import { dispatch, editor } from "../../../scripts/editor"
import { useRef, useState, useEffect } from "react";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { moveElements } from "../../../store/actionCreators/moveElements";
import store from "../../../store/store";
import { putSelectedElement, clearSelectedElementsOnSlide, deleteSelectedElement } from "../../../store/actionCreators/selectedElement";
import { clearAllRedo } from '../../../store/actionCreators/redo';
import { changeTextValue } from '../../../store/actionCreators/text';

function SomebodyText(text: TextType) {

  const ref = useRef<HTMLDivElement>(null);

  let border = '';

  const state = store.getState();
  if (state.selectedElements.includes(text.id)) {
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

  if (state.selectedElements.includes(text.id)) {
    return (
      <div
        ref={ref}
        style={{
          ...textStyle,
          border: ''
        }}
        onMouseDown={(event) => {
          let startX = event.pageX;
          let startY = event.pageY;

          function onMove() {
            const deltaX = event.pageX - startX; 
            const deltaY = event.pageY - startY;
       
            const newPos = {
              x: text.position.x + deltaX,
              y: text.position.y + deltaY
            };
            store.dispatch(moveElements(newPos))
          };

          function stopMove() {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", stopMove);        
          };

          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", stopMove);
        }}
      >
        <textarea
          id={text.id}
          style={textStyle}
          color={text.color}
          wrap="soft"
          value={text.content}
          onClick={(event) => {
            if (!event.ctrlKey) {
              store.dispatch(clearSelectedElementsOnSlide);
              store.dispatch(putSelectedElement(text.id));
            } else {store.dispatch(deleteSelectedElement(text.id))};
          }}
          onChange={(event) => {
            if (editor.redo.length !== 0) {
              store.dispatch(clearAllRedo);
            }
            let newText = event.target.value;
            store.dispatch(changeTextValue(newText))
          }}
          onBlur={(event) => {
            store.dispatch(deleteSelectedElement(text.id))
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
          store.dispatch(clearSelectedElementsOnSlide)
        }
        const textId = text.id
        store.dispatch(putSelectedElement(textId));
      }}
    >
      {text.content}
    </p>
  )
}

export default SomebodyText