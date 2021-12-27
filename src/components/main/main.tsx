import styles from "./main.module.css"
import ListSlides from "../listSlides/listSlides";
import Workspace from "../workspace/workspace";
import { editor } from "../../scripts/editor";
import { getDefaultSlide } from "../../scripts/structure";

function Main()
{ 
  return(
    <main  className={styles.container}>
        <ListSlides />
        <Workspace {...getDefaultSlide()}/>
    </main>
  )
}

export default Main;