import {addImage, addPrimitives, addText, createNewPresentation} from "../../scripts/structure";
import Dropdown from "../dropdown/dropdown";
import Item from "../dropdown/item";
import styles from './header.module.css'
import Menu from "./menu";
import TitlePresentation from "./title";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.dBlock}>
                <TitlePresentation />
                <div className={styles.containerDropdown}>
                <Dropdown title="File" >
                    <Item title="Создать" action = {createNewPresentation} />
                    <Item title="Сохранить" action = {createNewPresentation}/>
                    <Item title="Открыть" action = {createNewPresentation}/>
                    <Item title="Экспортировать" action = {createNewPresentation}/>
                </Dropdown>
                <Dropdown title="Edit">
                    <Item title="Редактировать" action = {createNewPresentation}/>
                </Dropdown>
                <Dropdown title="Insert">
                    <Item title="Текст" action = {addText}/>
                    <Item title="Изображение" action = {addImage}/>
                    <Item title="Примитив" action = {addPrimitives}/>
                </Dropdown>
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;
