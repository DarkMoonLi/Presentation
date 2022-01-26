import Dropdown from "../dropdown/dropdown";
import Item from "../dropdown/item";
import styles from './header.module.css'
import Menu from "./menu";
import TitlePresentation from "./title";
import store from "../../store/store";
import { startViewingMode } from "../../store/actionCreators/viewing";
import { downloadFile, uploadFile } from "../../store/actionCreators/downloadFile";
import { addNewText, addNewPrimitive, addNewImageFromFile, deleteElements, changeLayer } from "../../store/actionCreators/slideElementActionCreators";
import { getApplication } from "../../scripts/structure"
import { openNewPresentation } from "../../store/actionCreators/presentationActionCreators";
import { setDefaultBackImage, uploadBackImg } from "../../store/actionCreators/slidesActions";
import { useState } from "react";
import { ColorPicker } from "../colorPicker/colorPicker";

function Header() {
  const [isModal, setModal] = useState(false)
  const onClose = () => setModal(false)
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.dBlock}>
                <TitlePresentation />
                <div className={styles.containerDropdown}>
                <Dropdown title="Файл">
                    <Item title="Создать" action = {openNewPresentation()} />
                    <Item title="Сохранить" action = {downloadFile(store.getState().presentation.title)}/>
                    <Item title="Открыть" action = {uploadFile()}/>
                    <Item title="Экспортировать" action = {{type: ''}}/>
                </Dropdown>
                <Dropdown title="Правка">
                    <Item title="Редактировать" action = {{type: ''}}/>
                    <Item title="Режим просмотра" action = {startViewingMode()}/>
                    <Item title="Удалить элементы слайда" action = {deleteElements()}/>
                    <Item title="На передний план" action = {changeLayer('up')}/>
                    <Item title="На задний план" action = {changeLayer('down')}/>
                </Dropdown>
                <Dropdown title="Вставка">
                    <Item title="Текст" action = {addNewText()}/>
                    <Item title="Изображение" action = {addNewImageFromFile()}/>
                    <Item title="Круг" action={addNewPrimitive('circle')}/>
                    <Item title="Треугольник" action={addNewPrimitive('triangle')}/>
                    <Item title="Прямоугольник" action={addNewPrimitive('rectangle')}/>
                </Dropdown>
                <Dropdown title="Слайд">
                    <Item title="Установить картинку фоном" action = {uploadBackImg()}/>
                    <Item title="Удалить фоновую картинку" action={setDefaultBackImage()}/>
                </Dropdown>
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;
