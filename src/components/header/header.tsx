import Dropdown from "../dropdown/dropdown";
import Item from "../dropdown/item";
import styles from './header.module.css'
import Menu from "./menu";
import TitlePresentation from "./title";
import store from "../../store/store";
import { startViewingMode } from "../../store/actionCreators/viewing";
import { downloadFile, uploadFile } from "../../store/actionCreators/downloadFile";
import { addNewText, addNewPrimitive, addNewImageFromFile, changeFont } from "../../store/actionCreators/slideElementActionCreators";
import { openNewPresentation } from "../../store/actionCreators/presentationActionCreators";

function Header() {
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
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.dBlock}>
                <TitlePresentation />
                <div className={styles.containerDropdown}>
                <Dropdown title="Файл" >
                    <Item title="Создать" action = {openNewPresentation()} />
                    <Item title="Сохранить" action = {downloadFile(store.getState().presentation.title)}/>
                    <Item title="Открыть" action = {uploadFile()}/>
                    <Item title="Экспортировать" action = {{type: ''}}/>
                </Dropdown>
                <Dropdown title="Правка">
                    <Item title="Редактировать" action = {{type: ''}}/>
                    <Item title="Режим просмотра" action = {startViewingMode()}/>
                </Dropdown>
                <Dropdown title="Вставка">
                    <Item title="Текст" action = {addNewText()}/>
                    <Item title="Изображение" action = {addNewImageFromFile()}/>
                    <Item title="Круг" action={addNewPrimitive('circle')}/>
                    <Item title="Треугольник" action={addNewPrimitive('triangle')}/>
                    <Item title="Прямоугольник" action={addNewPrimitive('rectangle')}/>
                </Dropdown>
                {/* <Dropdown title="Font-Family" >
                    <Item title="Times New Roman" action = {changeFont('Times New Roman', 90, 300)} />
                    <Item title="Arial" action = {changeFont('Arial', 90, 300)}/>
                    <Item title="Roboto" action = {changeFont('Roboto', 90, 300)}/>
                    <Item title="Dongle" action = {changeFont('Dongle', 90, 300)}/>
                </Dropdown> */}
                {/* <div className={styles.fontSizeSettings}>
                    <Item title="-" action = {changeFont(fontParams.font, fontParams.fontSize - 1, 300)} />
                    <Item title={`${fontParams.fontSize}`} action = {changeFont(fontParams.font, fontParams.fontSize, 300)} />
                    <Item title="+" action = {changeFont(fontParams.font, fontParams.fontSize + 1, 300)} />
                </div> */}
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;
