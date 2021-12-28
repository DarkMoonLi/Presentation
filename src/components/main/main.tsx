import styles from "./main.module.css"
import ListSlides from "../listSlides/listSlides";
import Workspace from "../workspace/workspace";
import { editor } from "../../scripts/editor";
import { getDefaultSlide, Slide } from "../../scripts/structure";

function Main()
{ 
  //const workSpace = <Workspace slide = {...editor.presentation.slides} />;
  return(
    <main  className={styles.container}>
        <ListSlides />
        <Workspace />
    </main>
  )
}

export default Main;