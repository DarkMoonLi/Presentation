import styles from "./main.module.css"
import ListSlides from "../listSlides/listSlides";
import Workspace from "../workspace/workspace";
import { editor } from "../../scripts/editor";
import { getDefaultSlide, Slide } from "../../scripts/structure";

function Main(slide = getDefaultSlide())
{ 
  return(
    <main  className={styles.container}>
        <ListSlides />
        <Workspace {...slide}/>
    </main>
  )
}

export default Main;