import store from "../../store/store";
import getContent from "../content/content";
import styles from "./workspace.module.css";

function Workspace() {

  let state = store.getState();

  for (let slide of state.presentation.slides) {
    if (state.selectedElements.includes(slide.id)) {
      const slideStyle = {
        backgroundImage: `url(${slide.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'contain',
        backgroundColor: slide.background,
        backgroundPosition: 'center'
      };

      return(
        <div className={styles.workspaceWrap}>
          <svg 
            className={styles.workspace} 
            style={slideStyle}
            onContextMenu={(event) => {
              event.preventDefault();
              console.log(event);
            }}
          >
            
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