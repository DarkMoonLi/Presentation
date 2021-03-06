import { useRef, useState } from "react";
import { addNewImageFromFile, addNewPrimitive, addNewText, deleteElements } from "../../store/actionCreators/slideElementActionCreators";
import { uploadBackImg } from "../../store/actionCreators/slidesActions";
import store from "../../store/store";
import getContent from "../content/content";
import ContextMenu from "../contextMenu/contextMenu";
import Item from "../contextMenu/contextMenuItem";
import useContextMenu from "../contextMenu/useContextMenu";
import styles from "./workspace.module.css";

function Workspace() {

  let state = store.getState();
  const ref = useRef(null);

  const { anchorPoint, show } = useContextMenu(ref); 

  for (let slide of state.presentation.slides) {
    if (state.selectedElements.includes(slide.id)) {
      const slideStyle = {
        backgroundImage: `url(${slide.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '100% 100%',
        backgroundColor: slide.background,
        backgroundPosition: 'center'
      };

      return (
        <div className={styles.workspaceWrap}>
          <svg
            id="workspace"
            className={styles.workspace}
            style={slideStyle}
            ref={ref}
          >

            {getContent(slide)}

            {show ? (<ContextMenu anchorPoint = {anchorPoint}>
              <Item title="Установить фоновый изображение" action={uploadBackImg()}/>
              <Item title="Удалить элементы слайда" action={deleteElements()}/>
              <Item title="Вставить текст" action={addNewText()}/>
              <Item title="Вставить круг" action={addNewPrimitive('circle')}/>
              <Item title="Вставить треугольник" action={addNewPrimitive('triangle')}/>
              <Item title="Вставить прямоугольник" action={addNewPrimitive('rectangle')}/>
              <Item title="Вставить изображение" action={addNewImageFromFile()}/>
            </ContextMenu>) : null
            }
          </svg>
        </div>
      )
    }
  }

  return (
    <div className={styles.workspaceWrap}>
      <svg className={styles.workspace}
        style={{ backgroundColor: state.presentation.slides[0].background }}>
        {getContent(state.presentation.slides[0])}
      </svg>
    </div>
  )

}

export default Workspace;