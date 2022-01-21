import { useRef, useState } from "react";
import { PrimitiveType } from "../../../scripts/structure"
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
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef, circle.position);
  useResizeElement1(resizeRef1, circle.size, circle.position);
  useResizeElement2(resizeRef2, circle.size, circle.position);
  useResizeElement3(resizeRef3, circle.size, circle.position);
  useResizeElement4(resizeRef4, circle.size, circle.position);

  if (!state.selectedElements.includes(circle.id)) {
    return (
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
          <ellipse 
            id={circle.id}
            cx={circle.size.width / 2}
            cy={circle.size.height / 2}
            rx={circle.size.width / 2 - 2} 
            ry={circle.size.height / 2 - 2}
            fill={circle.color}
            style={{border: border}}
            stroke={circle.contourColor}
            strokeWidth={2}
          />
        </svg>
      </foreignObject>  
    )
  };
  
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
        <ellipse
          id={circle.id}
          cx={circle.size.width / 2}
          cy={circle.size.height / 2}
          rx={circle.size.width / 2 - 2}
          ry={circle.size.height / 2 - 2}
          fill={circle.color}
          style={{border: border}}
          stroke={circle.contourColor}
          strokeWidth={2}
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