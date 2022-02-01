import { useRef, useState } from "react";
import { PrimitiveType } from "../../../scripts/structure"
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../../store/actionCreators/selectedElement";
import store from "../../../store/store";
import { useDragAndDrop } from "../../DragAndDrop/dragAndDrop";
import { useResizeElement1, useResizeElement2, useResizeElement3, useResizeElement4 } from "../../DragAndDrop/resizeElement";


function Triangle(triangle: PrimitiveType) {
  let x1 = 1;
  let x2 = triangle.size.width/2;
  let x3 = triangle.size.width;
  let y1 = triangle.size.height-1;
  let y2 = 1;
  let y3 = triangle.size.height-1;
  let str = ''+x1+','+y1+' '+x2+','+y2+' '+x3+','+y3;

  let state = store.getState();
  
  let border = '';
  if (state.selectedElements.includes(triangle.id)) {
    border = '3px solid #000';
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

  if (!state.selectedElements.includes(triangle.id)) {
    return (
      <foreignObject
        width={triangle.size.width}
        height={triangle.size.height}
        x={triangle.position.x}
        y={triangle.position.y}
        onClick={() => setEdit(false)} 
        onDoubleClick={() => setEdit(true)}
      >
        <svg
          ref={elemRef}
          style={{
            width: triangle.size.width,
            height: triangle.size.height,
            left: triangle.position.x,
            top: triangle.position.y
          }}
          onMouseDown={(event) => {
            if (!event.ctrlKey) {
              store.dispatch(clearSelectedElementsOnSlide());
              store.dispatch(putSelectedElement(triangle.id));
            } 
            if (event.ctrlKey) { 
              if (!state.selectedElements.includes(triangle.id)) 
                store.dispatch(putSelectedElement(triangle.id));
              else
                store.dispatch(deleteSelectedElement(triangle.id)) 
            };
          }}
        >
          <polygon 
            id={triangle.id} 
            points= {str} 
            fill={triangle.color}
            stroke={triangle.contourColor}
            strokeWidth={2}
          />
        </svg>
      </foreignObject>
    )
  };

  return(
    <foreignObject
      width={triangle.size.width}
      height={triangle.size.height}
      x={triangle.position.x}
      y={triangle.position.y}
      onClick={() => setEdit(false)} 
      onDoubleClick={() => setEdit(true)}
    >
      <svg
        ref={elemRef}
        style={{
          width: triangle.size.width,
          height: triangle.size.height,
          left: triangle.position.x,
          top: triangle.position.y
        }}
        onMouseDown={(event) => {
          if (!event.ctrlKey) {
            store.dispatch(clearSelectedElementsOnSlide());
            store.dispatch(putSelectedElement(triangle.id));
          } 
          if (event.ctrlKey) { 
            if (!state.selectedElements.includes(triangle.id)) 
              store.dispatch(putSelectedElement(triangle.id));
            else
              store.dispatch(deleteSelectedElement(triangle.id)) 
          };
        }}
      >
        <polygon 
          id={triangle.id} 
          points= {str} 
          fill={triangle.color}
          stroke={triangle.contourColor}
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
        left: triangle.size.width - 9,
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
        left: triangle.size.width - 9,
        top: triangle.size.height - 9,
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
        top: triangle.size.height - 9,
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

export default Triangle