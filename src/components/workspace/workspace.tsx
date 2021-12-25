import { editor } from "../../scripts/editor";
import Circle from "../primitives/circle/circle";
import Rectangle from "../primitives/rectangle/rectangle";
import Square from "../primitives/square/square";
import SomebodyText from "../primitives/text/text";
import Triangle from "../primitives/triangle/triangle";
import styles from "./workspace.module.css"

function Workspace(props: any) {
  return(
    <div className={styles.workspaceWrap}>
      <svg className={styles.workspace}>
        
      </svg>
    </div>
  )}

export default Workspace;