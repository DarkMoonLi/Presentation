import { useRef, useState } from "react";
import { PrimitiveType } from "../../../scripts/structure"
import { moveElements, changeSize } from "../../../store/actionCreators/moveElements";
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { useResizeElement1, useResizeElement2, useResizeElement3, useResizeElement4 } from "../../DragAndDrop/resizeElement";

function Circle(circle: PrimitiveType) {
  let state = store.getState();
  
  let border = '';
  if (state.selectedElements.includes(circle.id)) {
    border = '3px solid #000';
  }

  const elemRef = useRef(null);
  const resizeRef1 = useRef(null);
  const resizeRef2 = useRef(null);
  const resizeRef3 = useRef(null);
  const resizeRef4 = useRef(null);
  const [position, setPosition] = useState({ x: circle.position.x, y: circle.position.y });
  const [moving, setMoving] = useState(false);
  const [size, setSize] = useState({width: circle.size.width, height: circle.size.height});
  const [resizing, setResize] = useState(false);
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef, position, setPosition, setMoving, setEdit);
  useResizeElement1(resizeRef1, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement2(resizeRef2, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement3(resizeRef3, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement4(resizeRef4, size, position, setSize, setPosition, setResize, setEdit);

  return(
    <foreignObject
      width={circle.size.width}
      height={circle.size.height}
      x={circle.position.x}
      y={circle.position.y}
      onMouseDown={(event) => {
        if (!event.ctrlKey) {
          store.dispatch(clearSelectedElementsOnSlide());
          store.dispatch(putSelectedElement(circle.id));
        } 
        if (event.ctrlKey) { 
          if (!state.selectedElements.includes(circle.id)) 
            store.dispatch(putSelectedElement(circle.id));
          else
            store.dispatch(deleteSelectedElement(circle.id)) 
        };
        console.log(state.selectedElements);
      }}
      onMouseMove={() => {
        moving && store.dispatch(moveElements(position));
        resizing && store.dispatch(changeSize(size, position))
      }} 
      onClick={() => setEdit(false)} 
      onDoubleClick={() => setEdit(true)}
    >
      <svg
        ref={elemRef}
        style={{
          width: circle.size.width,
          height: circle.size.height,
          left: circle.position.x,
          top: circle.position.y
        }}
      >
        <circle 
          id={circle.id}
          cx={circle.size.width/2}
          cy={circle.size.height/2}
          r={circle.size.width / 2} 
          fill={circle.color}
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
        left: circle.size.width - 9,
        top: 0,
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
        left: circle.size.width - 9,
        top: circle.size.height - 9,
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
        top: circle.size.height - 9,
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

export default Circle