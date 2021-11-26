import Rectangle from "../primitives/rectangle/rectangle";
import styles from "./workspace.module.css"

function Workspace(props: any) {
  return(
    <div className={styles.workspaceWrap}>
      <div className={styles.workspace}>
        <Rectangle />
      </div>
    </div>
  )}

export default Workspace;