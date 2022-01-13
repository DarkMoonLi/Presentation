import { TextType } from "../../../scripts/structure";
import store from "../../../store/store";
import { putSelectedElement, clearSelectedElementsOnSlide, deleteSelectedElement } from "../../../store/actionCreators/selectedElement";
import { changeTextValue } from '../../../store/actionCreators/text';
import { useRef, useState } from "react";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { changeSize, moveElements } from "../../../store/actionCreators/moveElements";
import { useResizeElement1, useResizeElement2, useResizeElement3, useResizeElement4 } from "../../DragAndDrop/resizeElement";
import { resizeBlock } from "../../DragAndDrop/resizeBlocks";

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
  const [position, setPosition] = useState({ x: text.position.x, y: text.position.y });
  const [moving, setMoving] = useState(false);
  const [size, setSize] = useState({width: text.size.width, height: text.size.height});
  const [resizing, setResize] = useState(false);
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef, position, setPosition, setMoving, setEdit);
  useResizeElement1(resizeRef1, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement2(resizeRef2, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement3(resizeRef3, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement4(resizeRef4, size, position, setSize, setPosition, setResize, setEdit);

  return (
    <foreignObject
      width={text.size.width}
      height={text.size.height}
      x={text.position.x}
      y={text.position.y}
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
        console.log(state.selectedElements);
      }}
      onMouseMove={() => {
        moving && (store.dispatch(moveElements(position)))
        resizing && store.dispatch(changeSize(size, position))
      }}
      onClick={() => setEdit(false)}
      onDoubleClick={() => setEdit(true)}
    >
      <textarea
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
          border: border,
          backgroundColor: 'transparent',
          textAlign: 'center',
          position: 'absolute',
          scale: '1',
          resize: 'none'
        }}
        color={text.color}
        wrap="soft"
        value={text.content}
        onChange={(event) => {
          let newText = event.target.value;
          store.dispatch(changeTextValue(newText))
        }}
        onBlur={() => {
          store.dispatch(deleteSelectedElement(text.id))
        }}
      />
      <div ref={resizeRef1} style={{
        position: 'absolute',
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#000',
        border: '2px solid #000',
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
        backgroundColor: '#000',
        border: '2px solid #000',
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
        backgroundColor: '#000',
        border: '2px solid #000',
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
        backgroundColor: '#000',
        border: '2px solid #000',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
      ></div>
    </foreignObject>
  )
}

export default SomebodyText