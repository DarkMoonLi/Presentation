import { Slide } from "../../scripts/structure";
import SlideView from "../slide/slide";
import styles from "./listSlides.module.css"

function ListSlides(slides: Slide[]) {

  const listSlides = Object.values(slides)

  return(
    <div>
      <ul className={styles.slides}>
        {listSlides.map((item) => <SlideView {...item}/>)}
      </ul>
    </div>
  )}

export default ListSlides;