import SlideView from "../slide/slide";
import styles from "./listSlides.module.css"
import store from "../../store/store";

function ListSlides() {

  const listSlides = store.getState().presentation.slides;

  return(
    <div>
      <ul className={styles.slides}>
        {listSlides.map((item, index) => <SlideView slide={item} index={index + 1}/>)}
      </ul>
    </div>
  )}

export default ListSlides;