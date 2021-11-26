import { getApplication, newPresentation } from "../../scripts/structure";
import Slide from "../slide/slide";
import styles from "./listSlides.module.css"

function ListSlides(props: any) {
  return(
    <ul className={styles.slides}>
      {props.children}
    </ul>
  )}

export default ListSlides;