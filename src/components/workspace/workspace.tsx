import { moveElements } from "../../store/actionCreators/moveElements";
import store from "../../store/store";
import getContent from "../content/content";
import styles from "./workspace.module.css";

function Workspace() {

  let state = store.getState();

  for (let slide of state.presentation.slides) {
    if (state.selectedElements.includes(slide.id)) {
      return(
        <div className={styles.workspaceWrap}>
          <svg className={styles.workspace} style={{backgroundColor: slide.background}}>
            
            {getContent(slide)}

          </svg>
        </div>
      )
    }
  }

  return (
    <div className={styles.workspaceWrap}>
      <svg className={styles.workspace} style={{backgroundColor: state.presentation.slides[0].background}}>
        {getContent(state.presentation.slides[0])}
      </svg>
    </div>
  )

}

export default Workspace;