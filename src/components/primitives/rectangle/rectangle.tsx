import { useRef, useState } from "react";
import { PrimitiveType } from "../../../scripts/structure";
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { useResizeElement1, useResizeElement2, useResizeElement3, useResizeElement4 } from "../../DragAndDrop/resizeElement";
import { moveElements, changeSize } from '../../../store/actionCreators/moveElements';

function Rectangle(rectangle: PrimitiveType) {
  let border = '';

  const state = store.getState();
  if (state.selectedElements.includes(rectangle.id)) {
    border = '1px solid #000';
  }

  const elemRef = useRef(null);
  const resizeRef1 = useRef(null);
  const resizeRef2 = useRef(null);
  const resizeRef3 = useRef(null);
  const resizeRef4 = useRef(null);
  const [position, setPosition] = useState({ x: rectangle.position.x, y: rectangle.position.y });
  const [moving, setMoving] = useState(false);
  const [size, setSize] = useState({width: rectangle.size.width, height: rectangle.size.height});
  const [resizing, setResize] = useState(false);
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef, position, setPosition, setMoving, setEdit);
  useResizeElement1(resizeRef1, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement2(resizeRef2, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement3(resizeRef3, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement4(resizeRef4, size, position, setSize, setPosition, setResize, setEdit);

  return(
    <foreignObject
      width={rectangle.size.width}
      height={rectangle.size.height}
      x={rectangle.position.x}
      y={rectangle.position.y}
      onMouseDown={(event) => {
        if (!event.ctrlKey) {
          store.dispatch(clearSelectedElementsOnSlide());
          store.dispatch(putSelectedElement(rectangle.id));
        } 
        if (event.ctrlKey) { 
          if (!state.selectedElements.includes(rectangle.id)) 
            store.dispatch(putSelectedElement(rectangle.id));
          else
            store.dispatch(deleteSelectedElement(rectangle.id)) 
        };
        console.log(state.selectedElements);
      }}
      onMouseMove={() => {
        moving && store.dispatch(moveElements(position))
        resizing && store.dispatch(changeSize(size, position))
      }}
      onClick={() => setEdit(false)}
      onDoubleClick={() => setEdit(true)}
    >
      <svg
        ref={elemRef}
        style={{
          width: rectangle.size.width,
          height: rectangle.size.height,
          left: rectangle.position.x,
          top: rectangle.position.y
        }}
      >
        <rect 
          id={rectangle.id} 
          width={rectangle.size.width} 
          height={rectangle.size.height} 
          fill={rectangle.color}
          style={{border: border}}
        />
      </svg>
      <div ref={resizeRef1} style={{
        position: 'absolute',
        display: 'block',
        top: 0,
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
        left: rectangle.size.width - 9,
        display: 'block',
        top: 0,
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
        left: rectangle.size.width - 9,
        top: rectangle.size.height - 9,
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
        top: rectangle.size.height - 9,
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

export default Rectangle