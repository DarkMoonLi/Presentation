import { useState } from 'react';
import { downloadFile, uploadFile } from '../../store/actionCreators/downloadFile';
import { openNewPresentation } from '../../store/actionCreators/presentationActionCreators';
import { reDo } from '../../store/actionCreators/redo';
import { addNewImageFromFile, addNewText, changeFont, changeLayer, deleteElements } from '../../store/actionCreators/slideElementActionCreators';
import { deleteSlide, newSlide, uploadBackImg } from '../../store/actionCreators/slidesActions';
import { unDo } from '../../store/actionCreators/undoActionCreators';
import store from '../../store/store';
import { ColorPicker } from '../colorPicker/colorPicker';
import Dropdown from '../dropdown/dropdown';
import Item from '../dropdown/item';
import styles from './menu.module.css'

function Menu () {
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
      <button onClick={() => store.dispatch(uploadBackImg())}>{"Установить фоновую картинку"}</button>
      <button className={styles.iconPrimitive}></button>
      <button className={styles.iconBackground} onClick={() => setModal(true)}>{'Покрасить фон слайда'}</button>
      
      {isModal ? (<ColorPicker setModal={setModal} isElem={isElem} setElem={setElem} isContour={isContour} setContour={setContour}/>) : null}
      
      <button onClick={() => store.dispatch(deleteElements())}>{"Удалить элементы слайда"}</button>
      {/* <button onClick={() => store.dispatch(changeLayer('1'))}>{"На передний план"}</button>
      <button onClick={() => store.dispatch(changeLayer('5'))}>{"На задний план"}</button> */}
      <button className={styles.iconFontColor} onClick={() => {setModal(true); setElem(true)}}></button>
      <button onClick={() => {setModal(true); setContour(true)}}>{'Изменить цвет контура'}</button>
        {/* <button onClick={() => store.dispatch(changeFont('Arial', 10, 600))}>Times New Roman</button> */}
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

    </div>
  )}

export default Menu;
