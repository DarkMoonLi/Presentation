import styles from "./main.module.css"
import Slide from "../slide/slide";
import ListSlides from "../listSlides/listSlides";
import { getApplication, newPresentation } from "../../scripts/structure";
import Workspace from "../workspace/workspace";

function Main()
{ 
  return(
    <main>
      <div className={styles.container}>
        <ListSlides>
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </ListSlides>
        <Workspace />
      </div>
    </main>
  )
}

export default Main;