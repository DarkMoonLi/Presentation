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
                    <Item title="Создать" key="1" action = {openNewPresentation()} />
                    <Item title="Сохранить" key="1" action = {downloadFile(store.getState().presentation.title)}/>
                    <Item title="Открыть" key="1" action = {uploadFile()}/>
                    <Item title="Экспортировать" key="1" action = {getApplication}/>
                </Dropdown>
                <Dropdown title="Правка">
                    <Item title="Редактировать" key="2" action = {getApplication}/>
                    <Item title="Режим просмотра" key="2" action = {startViewingMode()}/>
                    <Item title="Удалить элементы слайда" key="2" action = {deleteElements()}/>
                    <Item title="На передний план" key="2" action = {changeLayer('up')}/>
                    <Item title="На задний план" key="2" action = {changeLayer('down')}/>
                </Dropdown>
                <Dropdown title="Вставка">
                    <Item title="Текст" key="3" action = {addNewText()}/>
                    <Item title="Изображение" key="3" action = {addNewImageFromFile()}/>
                    <Item title="Круг" key="3" action={addNewPrimitive('circle')}/>
                    <Item title="Треугольник" key="3" action={addNewPrimitive('triangle')}/>
                    <Item title="Прямоугольник" key="3" action={addNewPrimitive('rectangle')}/>
                </Dropdown>
                <Dropdown title="Слайд">
                    <Item title="Установить картинку фоном" key="4" action = {uploadBackImg()}/>
                    <Item title="Удалить фоновую картинку" key="4" action={setDefaultBackImage()}/>
                </Dropdown>
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;
