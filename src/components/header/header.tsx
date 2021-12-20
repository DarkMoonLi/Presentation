import Dropdown from "../dropdown/dropdown";
import Item from "../dropdown/item";
import styles from './header.module.css'
import Menu from "./menu";
import TitlePresentation from "./title";

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/src/image/cat.jpeg" alt="img"/>
            <div className={styles.dBlock}>
                <TitlePresentation />
                <div className={styles.containerDropdown}>
                <Dropdown title="File" >
                    <Item title="Сохранить"/>
                    <Item title="Открыть"/>
                    <Item title="Экспортировать"/>
                </Dropdown>
                <Dropdown title="Edit">
                    <Item title="Редактировать"/>
                </Dropdown>
                <Dropdown title="Insert">
                    <Item title="Текст"/>
                    <Item title="Изображение"/>
                    <Item title="Примитив"/>
                </Dropdown>
                </div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;