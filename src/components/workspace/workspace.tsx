import store from "../../store/store";
import getContent from "../content/content";
import styles from "./workspace.module.css";

function Workspace() {

  let state = store.getState();
  for (let slide of state.presentation.slides) {
    if (state.selectedElements.includes(slide.id)) {
      return(
        <div className={styles.workspaceWrap} style={{color: slide.background}}>
          <div className={styles.workspace}>
              
              {getContent(slide)}
  
          </div>
        </div>
      )
    }
  };

  return (
    <div className={styles.workspaceWrap} style={{color: state.presentation.slides[0].background}}>
      <svg className={styles.workspace}>

        {getContent(state.presentation.slides[0])}
      
      </svg>
    </div>
  )
}

export default Workspace;