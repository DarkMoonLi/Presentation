import { TextType } from "../../../scripts/structure";
import store from "../../../store/store";
import { putSelectedElement, clearSelectedElementsOnSlide, deleteSelectedElement } from "../../../store/actionCreators/selectedElement";
import { changeTextValue } from '../../../store/actionCreators/text';
import { useRef, useState } from "react";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { useResizeElement1, useResizeElement2, useResizeElement3, useResizeElement4 } from "../../DragAndDrop/resizeElement";
import style from './text.module.css';

function SomebodyText(text: TextType) {

  let border = '';

  const state = store.getState();
  if (state.selectedElements.includes(text.id)) {
    border = '1px solid #000';
  }

  const elemRef = useRef(null);
  const resizeRef1 = useRef(null);
  const resizeRef2 = useRef(null);
  const resizeRef3 = useRef(null);
  const resizeRef4 = useRef(null);
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef);
  useResizeElement1(resizeRef1);
  useResizeElement2(resizeRef2);
  useResizeElement3(resizeRef3);
  useResizeElement4(resizeRef4);

  if (!state.selectedElements.includes(text.id)) {
    return (
      <foreignObject
        width={text.size.width}
        height={text.size.height}
        x={text.position.x}
        y={text.position.y}
        onClick={() => setEdit(false)}
        onDoubleClick={() => setEdit(true)}
      >
        <p
          ref={elemRef}
          id={text.id}
          style={{
            margin: 0,
            width: text.size.width,
            height: text.size.height,
            fontFamily: text.font,
            fontSize: text.fontSize,
            color: text.color,
            fontWeight: text.weight,
            border: border,
            backgroundColor: 'transparent',
            textAlign: 'center',
            position: 'absolute',
            scale: '1',
            resize: 'none'
          }}
          color={text.color} 
          onMouseDown={(event) => {
            if (!event.ctrlKey) {
              store.dispatch(clearSelectedElementsOnSlide());
              store.dispatch(putSelectedElement(text.id));
            } 
            if (event.ctrlKey) { 
              if (!state.selectedElements.includes(text.id)) 
                store.dispatch(putSelectedElement(text.id));
              else
                store.dispatch(deleteSelectedElement(text.id)) 
            };
          }}
        >{text.content}</p>
      </foreignObject>
    )
  }

  return (
    <foreignObject
      width={text.size.width}
      height={text.size.height}
      x={text.position.x}
      y={text.position.y}
      onClick={() => setEdit(false)}
      onDoubleClick={() => setEdit(true)}
    >
      <textarea
        className={style.textarea}
        ref={elemRef}
        id={text.id}
        readOnly={edit ? true : false}
        style={{
          width: text.size.width,
          height: text.size.height,
          fontFamily: text.font,
          fontSize: text.fontSize,
          color: text.color,
          fontWeight: text.weight,
          // border: border,
          backgroundColor: 'transparent',
          textAlign: 'center',
          position: 'absolute',
          scale: '1',
          resize: 'none',
          overflow: 'hidden'
        }}
        color={text.color}
        wrap="soft"
        value={text.content}
        onChange={(event) => {
          let newText = event.target.value;
          store.dispatch(changeTextValue(newText))
        }}
        onMouseDown={(event) => {
          if (!event.ctrlKey) {
            store.dispatch(clearSelectedElementsOnSlide());
            store.dispatch(putSelectedElement(text.id));
          } 
          if (event.ctrlKey) { 
            if (!state.selectedElements.includes(text.id)) 
              store.dispatch(putSelectedElement(text.id));
            else
              store.dispatch(deleteSelectedElement(text.id)) 
          };
        }}
      />
      <div ref={resizeRef1} style={{
        position: 'absolute',
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#9393c9',
        border: '2px solid #9393c9',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
      ></div>
      <div ref={resizeRef2} style={{
        position: 'absolute',
        left: text.size.width - 9,
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#9393c9',
        border: '2px solid #9393c9',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
      ></div>
      <div ref={resizeRef3} style={{
        position: 'absolute',
        left: text.size.width - 9,
        top: text.size.height - 9,
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#9393c9',
        border: '2px solid #9393c9',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
      ></div>
      <div ref={resizeRef4} style={{
        position: 'absolute',
        top: text.size.height - 9,
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#9393c9',
        border: '2px solid #9393c9',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
      ></div>
    </foreignObject>
  )
}

export default SomebodyText