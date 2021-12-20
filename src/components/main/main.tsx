import styles from "./main.module.css"
import ListSlides from "../listSlides/listSlides";
import Workspace from "../workspace/workspace";
import { state } from "../../scripts/state";

function Main()
{ 
  return(
    <main  className={styles.container}>
        <ListSlides {...state.slides} />
        <Workspace />
    </main>
  )
}

export default Main;