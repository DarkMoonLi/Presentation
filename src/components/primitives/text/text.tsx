import { TextType } from "../../../scripts/structure";
import store from "../../../store/store";
import { putSelectedElement, clearSelectedElementsOnSlide, deleteSelectedElement } from "../../../store/actionCreators/selectedElement";
import { clearAllRedo } from '../../../store/actionCreators/redo';
import { changeTextValue } from '../../../store/actionCreators/text';
import { useRef, useState } from "react";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { moveElements } from "../../../store/actionCreators/moveElements";
import { useResizeElement } from "../../DragAndDrop/resizeElement";

function SomebodyText(text: TextType) {

  let border = '';

  const state = store.getState();
  if (state.selectedElements.includes(text.id)) {
    border = '1px solid #000';
  }

  const elemRef = useRef(null);
  const resizeRef = useRef(null);
  const [position, setPosition] = useState({ x: text.position.x, y: text.position.y });
  const [moving, setMoving] = useState(false);
  const [resize, setResize] = useState({width: text.size.width, height: text.size.height})
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef, position, setPosition, setMoving, setEdit);
  useResizeElement(resizeRef, resize, setResize, setMoving, setEdit)


  return (
    <foreignObject
      width={text.size.width}
      height={text.size.height}
      x={text.position.x}
      y={text.position.y}
    >
      <textarea
        ref={elemRef}
        id={text.id}
        readOnly={edit ? true : false}
        style={{
          width: resize.width,
          height: resize.height,
          fontFamily: text.font,
          fontSize: text.fontSize,
          color: text.color,
          fontWeight: text.weight,
          border: border,
          backgroundColor: 'transparent',
          textAlign: 'center',
          position: 'absolute',
          scale: '1'
        }}
        color={text.color}
        wrap="soft"
        value={text.content}
        onClick={(event) => {
          setEdit(false);
          if (!event.ctrlKey) {
            store.dispatch(clearSelectedElementsOnSlide());
            store.dispatch(putSelectedElement(text.id));
          } else { store.dispatch(deleteSelectedElement(text.id)) };
        }}
        onChange={(event) => {
          if (state.redo.length !== 0) {
            store.dispatch(clearAllRedo());
          }
          let newText = event.target.value;
          store.dispatch(changeTextValue(newText))
        }}
        onBlur={() => {
          store.dispatch(deleteSelectedElement(text.id))
        }}
        onMouseMove={() => (moving && (store.dispatch(moveElements(position))))}
        onDoubleClick={() => setEdit(true)}
      />
      <div ref={resizeRef} style={{
        position: 'absolute',
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#000',
        border: '2px solid #000',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}></div>
    </foreignObject>
  )
}

export default SomebodyText