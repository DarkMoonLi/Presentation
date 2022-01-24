import { useState } from 'react';
import { defaultBackgroundColor } from '../../store/actionCreators/changeBackground';
import { downloadFile, uploadFile } from '../../store/actionCreators/downloadFile';
import { reDo } from '../../store/actionCreators/redo';
import { addNewImageFromFile, addNewText, changeLayer, deleteElements } from '../../store/actionCreators/slideElementActionCreators';
import { deleteSlide, newSlide, setDefaultBackImage, uploadBackImg } from '../../store/actionCreators/slidesActions';
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
      <button className={styles.iconText} onClick={() => store.dispatch(addNewText())}></button>
      <button className={styles.iconBackground} onClick={() => setModal(true)}></button>
      {isModal ? (<ColorPicker setModal={setModal}/>) : null}
    </div>
  )}

export default Menu;
