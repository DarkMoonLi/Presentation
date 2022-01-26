import { useState } from 'react';
import { defaultBackgroundColor } from '../../store/actionCreators/changeBackground';
import { downloadFile, uploadFile } from '../../store/actionCreators/downloadFile';
import { reDo } from '../../store/actionCreators/redo';
import { addNewImageFromFile, addNewText, changeFont, changeLayer, deleteElements } from '../../store/actionCreators/slideElementActionCreators';
import { deleteSlide, newSlide, setDefaultBackImage, uploadBackImg } from '../../store/actionCreators/slidesActions';
import { unDo } from '../../store/actionCreators/undoActionCreators';
import store from '../../store/store';
import { ColorPicker } from '../colorPicker/colorPicker';
import Dropdown from '../dropdown/dropdown';
import Item from '../dropdown/item';
import styles from './menu.module.css'

function Menu () {

  const state = store.getState();
  let fontParams = {
    font: 'Times New Roman',
    fontSize: 14,
    weight: 400
  };

  for (const slide of state.presentation.slides) {
    if (state.selectedElements.includes(slide.id)) {
      for (const content of slide.content) {
        if (state.selectedElements.includes(content.id)) {
          if (content.type === 'text') {
            fontParams = {
              font: content.font,
              fontSize: content.fontSize,
              weight: content.weight
            }
          }
        }
      }
    }
  }

  function makeBold() {
    if (fontParams.weight > 500) {
      return (store.dispatch(changeFont(fontParams.font, fontParams.fontSize, 400)))
    } else {
      return (store.dispatch(changeFont(fontParams.font, fontParams.fontSize, 900)))
    }
  }
  
  const [isModal, setModal] = useState(false);
  const [isElem, setElem] = useState(false);
  const [isContour, setContour] = useState(false);
  
  return (
    <div className={styles.menu}>
      <button className={styles.iconAdd} onClick={() => store.dispatch(newSlide())}></button>
      <button className={styles.iconDelete} onClick={() => store.dispatch(deleteSlide())}></button>
      <button className={styles.iconUndo} onClick={() => store.dispatch(unDo())}></button>
      <button className={styles.iconRedo} onClick={() => store.dispatch(reDo())}></button>
      <button className={styles.iconText} onClick={() => store.dispatch(addNewText())}></button>
      <button className={styles.iconBackground} onClick={() => setModal(true)}></button>
      {isModal ? (<ColorPicker setModal={setModal} isElem={isElem} setElem={setElem} isContour={isContour} setContour={setContour}/>) : null}
      <Dropdown title={`${fontParams.font}`} >
        <Item title="Times New Roman" action = {changeFont('Times New Roman', fontParams.fontSize, fontParams.weight)} />
        <Item title="Arial" action = {changeFont('Arial', fontParams.fontSize, fontParams.weight)}/>
        <Item title="Roboto" action = {changeFont('Roboto', fontParams.fontSize, fontParams.weight)}/>
        <Item title="Dongle" action = {changeFont('Dongle', fontParams.fontSize, fontParams.weight)}/>
      </Dropdown>
      <div className={styles.fontSizeSettings}>
        <button className={styles.fontSizeSettings_func} onClick={() => store.dispatch(changeFont(fontParams.font, fontParams.fontSize - 1, fontParams.weight))}></button>
        <div className={styles.fontSizeSettings_size}>{fontParams.fontSize}</div>
        <button className={styles.fontSizeSettings_func} onClick={() => store.dispatch(changeFont(fontParams.font, fontParams.fontSize + 1, fontParams.weight))}></button>
      </div>
      <button className={styles.iconFontColor} onClick={() => {setModal(true); setElem(true)}}></button>
      <button onClick={ makeBold } className={styles.iconBold}></button>
      <button onClick={() => {setModal(true); setContour(true)}}>{'Изменить цвет контура'}</button>
    </div>
  )}

export default Menu;
