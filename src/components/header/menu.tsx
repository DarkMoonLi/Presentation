import { createRef } from 'react';
import { downloadFile, uploadFile } from '../../store/actionCreators/downloadFile';
import { reDo } from '../../store/actionCreators/redo';
import { addNewImage, addNewText } from '../../store/actionCreators/slideElementActionCreators';
import { deleteSlide, newSlide } from '../../store/actionCreators/slidesActions';
import { unDo } from '../../store/actionCreators/undoActionCreators';
import store from '../../store/store';
import styles from './menu.module.css'

function Menu () {
  
  return (
    <div className={styles.menu}>
      <button className={styles.iconAdd} onClick={() => store.dispatch(newSlide())}></button>
      <button className={styles.iconDelete} onClick={() => store.dispatch(deleteSlide())}></button>
      <button className={styles.iconUndo} onClick={() => store.dispatch(unDo())}></button>
      <button className={styles.iconRedo} onClick={() => store.dispatch(reDo())}></button>
      <button className={styles.iconSelect}></button>
      <button className={styles.iconText} onClick={() => store.dispatch(addNewText())}></button>
      <form method='post'>
        <input ref={createRef} type="file" className={styles.iconImage} onChange={(event) => {
          let files = event.target.files;
          if (files !== null) {
            store.dispatch(addNewImage(files[0]))
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