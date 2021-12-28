import { editor } from "../../scripts/editor";
import { getDefaultSlide, Slide } from "../../scripts/structure";
import getContent from "../content/content";
import Circle from "../primitives/circle/circle";
import Rectangle from "../primitives/rectangle/rectangle";
import Square from "../primitives/square/square";
import SomebodyText from "../primitives/text/text";
import Triangle from "../primitives/triangle/triangle";
import styles from "./workspace.module.css";

function Workspace() {

  for (let slide of editor.presentation.slides) {
    if (editor.selectedElements.includes(slide.id)) {
      return(
        <div className={styles.workspaceWrap} style={{color: slide.background}}>
          <svg className={styles.workspace}>
              {console.log(slide)}
              {getContent(slide)}
  
          </svg>
        </div>
      )
    }
  }

  return (
    <div className={styles.workspaceWrap}>
      <svg className={styles.workspace}>
        {getContent(editor.presentation.slides[0])}
      </svg>
    </div>
  )
}

export default Workspace;