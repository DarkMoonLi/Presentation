import { editor } from "../../scripts/editor";
import getContent from "../content/content";
import styles from "./workspace.module.css";

function Workspace() {

  for (let slide of editor.presentation.slides) {
    if (editor.selectedElements.includes(slide.id)) {
      return(
        <div className={styles.workspaceWrap} style={{color: slide.background}}>
          <div className={styles.workspace}>
              
              {getContent(slide)}
  
          </div>
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