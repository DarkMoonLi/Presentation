import { createRef } from 'react';
import { dispatch, editor, getEditor } from '../../scripts/editor';
import { addSlide, addText, addImageFromFile, deleteSlide, redo, undo, getDefaultSlide, getId } from '../../scripts/structure';
import { downloadFile, uploadFile } from '../../store/actionCreators/downloadFile';
import store from '../../store/store';
import styles from './menu.module.css'

function Menu () {
  
  return (
    <div className={styles.menu}>
      <button className={styles.iconAdd} onClick={() => dispatch(addSlide, getDefaultSlide)}></button>
      <button className={styles.iconDelete} onClick={() => dispatch(deleteSlide, {})}></button>
      <button className={styles.iconUndo} onClick={() => dispatch(undo, {})}></button>
      <button className={styles.iconRedo} onClick={() => dispatch(redo, {})}></button>
      <button className={styles.iconSelect}></button>
      <button className={styles.iconText} onClick={() => dispatch(addText, getId)}></button>
      <form method='post'>
        <input ref={createRef} type="file" className={styles.iconImage} onChange={(event) => {
          let files = event.target.files;
          if (files !== null) {
            dispatch(addImageFromFile, files[0])
          }
        }}></input>
      </form>
      <button onClick={() => store.dispatch(downloadFile(store.getState().presentation.title))}>{"Сохранить презентацию"}</button>
      <form method='post'>
        <input ref={createRef} type="file" className={styles.iconImage} onChange={(event) => {
          let files = event.target.files;
          if (files !== null) {
            const data = window.URL.createObjectURL(files[0]);
            store.dispatch(uploadFile(data))
          }
        }}></input>
      </form>
      
      <button className={styles.iconPrimitive}></button>
    </div>
  )}

export default Menu;