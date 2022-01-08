import {addImage, addPrimitives, addText, getApplication} from "../../scripts/structure";
import Dropdown from "../dropdown/dropdown";
import Item from "../dropdown/item";
import styles from './header.module.css'
import Menu from "./menu";
import TitlePresentation from "./title";
import { dispatch } from "../../scripts/editor";
import {editor} from "../../scripts/editor"
import store from "../../store/store";
import { startViewingMode } from "../../store/actionCreators/viewing";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.dBlock}>
                <TitlePresentation />
                <div className={styles.containerDropdown}>
                <Dropdown title="File" >
                    <Item title="Создать" action = {getApplication} />
                    <Item title="Сохранить" action = {getApplication}/>
                    <Item title="Открыть" action = {getApplication}/>
                    <Item title="Экспортировать" action = {getApplication}/>
                </Dropdown>
                <Dropdown title="Edit">
                    <Item title="Редактировать" action = {getApplication}/>
                    <Item title="Режим просмотра" action = {startViewingMode()}/>
                </Dropdown>
                <Dropdown title="Insert">
                    <Item title="Текст" action = {() => dispatch(addText, {})}/>
                    <Item title="Изображение" action = {() => dispatch(addImage, editor)}/>
                    {/*<Dropdown title="Примитив"> 
                        <Item title="Треугольник" action = {() => {
                            let primitive = 'triangle';
                            dispatch(addPrimitives, primitive)
                        }}/>*/}
                        <Item title="Круг" action={() => {
                            let primitive = 'circle';
                            dispatch(addPrimitives, primitive)
                        }}/>
                    {/*</Dropdown>*/}
                </Dropdown>
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;
