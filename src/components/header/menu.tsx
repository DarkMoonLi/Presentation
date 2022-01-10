import { downloadFile, uploadFile } from '../../store/actionCreators/downloadFile';
import { reDo } from '../../store/actionCreators/redo';
import { addNewImageFromFile, addNewText } from '../../store/actionCreators/slideElementActionCreators';
import { deleteSlide, newSlide, uploadBackImg } from '../../store/actionCreators/slidesActions';
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
      <button onClick={() => store.dispatch(addNewImageFromFile())}>{"Загрузить изображение"}</button>
      <button onClick={() => store.dispatch(downloadFile(store.getState().presentation.title))}>{"Сохранить презентацию"}</button>
      <button onClick={() => store.dispatch(uploadFile())}>{"Загрузить презентацию"}</button>      
      <button onClick={() => store.dispatch(uploadBackImg())}>{"Установить фоновую картинку"}</button>
      <button className={styles.iconPrimitive}></button>
    </div>
  )}

export default Menu;