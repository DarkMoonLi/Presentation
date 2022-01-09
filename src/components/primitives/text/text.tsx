import { TextType } from "../../../scripts/structure";
import { useRef, useState, useEffect } from "react";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { moveElements } from "../../../store/actionCreators/moveElements";
import store from "../../../store/store";
import { putSelectedElement, clearSelectedElementsOnSlide, deleteSelectedElement } from "../../../store/actionCreators/selectedElement";
import { clearAllRedo } from '../../../store/actionCreators/redo';
import { changeTextValue } from '../../../store/actionCreators/text';

function SomebodyText(text: TextType) {

  let border = '';

  const state = store.getState();
  if (state.selectedElements.includes(text.id)) {
    border = '1px solid #000';
  }

    return (
      <foreignObject 
          width={'100%'} 
          height={'100%'} 
          x={text.position.x} 
          y={text.position.y}
      >
        <textarea
          id={text.id}
          style={{
                width: text.size.width,
                height: text.size.height,
                fontFamily: text.font,
                fontSize: text.fontSize,
                color: text.color,
                fontWeight: text.weight,
                border: border,
                backgroundColor: 'transparent',
                textAlign: 'center',
                position:'absolute'}}
          color={text.color}
          wrap="soft"
          value={text.content}
          onClick={(event) => {
            if (!event.ctrlKey) {
              store.dispatch(clearSelectedElementsOnSlide());
              store.dispatch(putSelectedElement(text.id));
            } else {store.dispatch(deleteSelectedElement(text.id))};
          }}
          onChange={(event) => {
            if (state.redo.length !== 0) {
              store.dispatch(clearAllRedo());
            }
            let newText = event.target.value;
            store.dispatch(changeTextValue(newText))
          }}
          onBlur={(event) => {
            store.dispatch(deleteSelectedElement(text.id))
          }}
        />
      </foreignObject>
    )
  }

export default SomebodyText