import styles from "./main.module.css"
import ListSlides from "../listSlides/listSlides";
import Workspace from "../workspace/workspace";
import { editor } from "../../scripts/editor";

function Main()
{ 
  return(
    <main  className={styles.container}>
        <ListSlides />
        <Workspace />
    </main>
  )
}

export default Main;