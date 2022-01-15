import { ImageType } from "../../scripts/structure";
import { useRef, useState } from "react";
import { moveElements, changeSize } from "../../store/actionCreators/moveElements";
import { clearSelectedElementsOnSlide, deleteSelectedElement, putSelectedElement } from "../../store/actionCreators/selectedElement";
import store from "../../store/store";
import { useDragAndDrop } from "../DragAndDrop/dragAndDrop";
import { useResizeElement1, useResizeElement2, useResizeElement3, useResizeElement4 } from "../DragAndDrop/resizeElement";


export default function SomeImage(image: ImageType) {
  let state = store.getState();
  
  let border = '';
  if (state.selectedElements.includes(image.id)) {
    border = '3px solid #000';
  }

  const elemRef = useRef(null);
  const resizeRef1 = useRef(null);
  const resizeRef2 = useRef(null);
  const resizeRef3 = useRef(null);
  const resizeRef4 = useRef(null);
  const [position, setPosition] = useState({ x: image.position.x, y: image.position.y });
  const [moving, setMoving] = useState(false);
  const [size, setSize] = useState({width: image.size.width, height: image.size.height});
  const [resizing, setResize] = useState(false);
  const [edit, setEdit] = useState(false);

  useDragAndDrop(elemRef, position, setPosition, setMoving, setEdit);
  useResizeElement1(resizeRef1, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement2(resizeRef2, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement3(resizeRef3, size, position, setSize, setPosition, setResize, setEdit);
  useResizeElement4(resizeRef4, size, position, setSize, setPosition, setResize, setEdit);

  return(
    <foreignObject
      width={image.size.width}
      height={image.size.height}
      x={image.position.x}
      y={image.position.y}
      onMouseDown={(event) => {
        if (!event.ctrlKey) {
          store.dispatch(clearSelectedElementsOnSlide());
          store.dispatch(putSelectedElement(image.id));
        } 
        if (event.ctrlKey) { 
          if (!state.selectedElements.includes(image.id)) 
            store.dispatch(putSelectedElement(image.id));
          else
            store.dispatch(deleteSelectedElement(image.id)) 
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
            width: image.size.width,
            height: image.size.height,
            left: image.position.x,
            top: image.position.y
        }}
      >
        <image 
          href={image.content} 
          height={image.size.height}
          width={image.size.width}
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
        onMouseMove={() => resizing && store.dispatch(changeSize(size, position))}
      ></div>
      <div ref={resizeRef2} style={{
        position: 'absolute',
        left: image.size.width - 9,
        top: 0,
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#000',
        border: '2px solid #000',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
        onMouseMove={() => resizing && store.dispatch(changeSize(size, position))}
      ></div>
      <div ref={resizeRef3} style={{
        position: 'absolute',
        left: image.size.width - 9,
        top: image.size.height - 9,
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#000',
        border: '2px solid #000',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
        onMouseMove={() => resizing && store.dispatch(changeSize(size, position))}
      ></div>
      <div ref={resizeRef4} style={{
        position: 'absolute',
        top: image.size.height - 9,
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: '#000',
        border: '2px solid #000',
        borderRadius: '4px',
        cursor: 'se-resize'
        }}
        onMouseMove={() => resizing && store.dispatch(changeSize(size, position))}
      ></div>
    </foreignObject>
    )
}