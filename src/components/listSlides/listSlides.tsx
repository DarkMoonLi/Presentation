import { editor } from "../../scripts/editor";
import { Slide } from "../../scripts/structure";
import SlideView from "../slide/slide";
import styles from "./listSlides.module.css"

function ListSlides() {

  const listSlides = Object.values(editor.presentation.slides);

  return(
    <div>
      <ul className={styles.slides}>
        {listSlides.map((item, index) => <SlideView slide={item} index={index + 1}/>)}
      </ul>
    </div>
  )}

export default ListSlides;