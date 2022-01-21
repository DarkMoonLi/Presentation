import { useRef, useState } from "react";
import { PrimitiveType } from "../../../scripts/structure";
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { useResizeElement1, useResizeElement2, useResizeElement3, useResizeElement4 } from "../../DragAndDrop/resizeElement";

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
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef, rectangle.position);
  useResizeElement1(resizeRef1, rectangle.size, rectangle.position);
  useResizeElement2(resizeRef2, rectangle.size, rectangle.position);
  useResizeElement3(resizeRef3, rectangle.size, rectangle.position);
  useResizeElement4(resizeRef4, rectangle.size, rectangle.position);

  if (!state.selectedElements.includes(rectangle.id)) {
    return (
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
      </foreignObject>
    )
  };
  
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