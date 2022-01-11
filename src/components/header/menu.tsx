import { useState } from 'react';
import { downloadFile, uploadFile } from '../../store/actionCreators/downloadFile';
import { reDo } from '../../store/actionCreators/redo';
import { addNewImageFromFile, addNewText } from '../../store/actionCreators/slideElementActionCreators';
import { deleteSlide, newSlide } from '../../store/actionCreators/slidesActions';
import { unDo } from '../../store/actionCreators/undoActionCreators';
import store from '../../store/store';
import { ColorPicker } from '../colorPicker/colorPicker';
import styles from './menu.module.css'

function Menu () {
  
  const [isModal, setModal] = useState(false)
  const onClose = () => setModal(false)
  
  return (
    <div className={styles.menu}>
      <button className={styles.iconAdd} onClick={() => store.dispatch(newSlide())}></button>
      <button className={styles.iconDelete} onClick={() => store.dispatch(deleteSlide())}></button>
      <button className={styles.iconUndo} onClick={() => store.dispatch(unDo())}></button>
      <button className={styles.iconRedo} onClick={() => store.dispatch(reDo())}></button>
      <button className={styles.iconSelect}></button>
      <button className={styles.iconText} onClick={() => store.dispatch(addNewText())}></button>
      <button data-title="Загрузить изображение" className={styles.iconImage} onClick={() => store.dispatch(addNewImageFromFile())}></button>
      <button data-title="Сохранить презентацию" className={styles.iconSave} onClick={() => store.dispatch(downloadFile(store.getState().presentation.title))}></button>
      <button data-title="Открыть презентацию" className={styles.iconOpen} onClick={() => store.dispatch(uploadFile())}></button>      
      <button className={styles.iconPrimitive}></button>
      <button className={styles.iconBackground} onClick={() => setModal(true)}></button>
      {isModal ? (<ColorPicker setModal={setModal}/>) : null}
    </div>
  )}

export default Menu;
