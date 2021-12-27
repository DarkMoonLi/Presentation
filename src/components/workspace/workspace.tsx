import { editor } from "../../scripts/editor";
import { Slide } from "../../scripts/structure";
import getContent from "../content/content";
import Circle from "../primitives/circle/circle";
import Rectangle from "../primitives/rectangle/rectangle";
import Square from "../primitives/square/square";
import SomebodyText from "../primitives/text/text";
import Triangle from "../primitives/triangle/triangle";
import styles from "./workspace.module.css"

function Workspace(slide: Slide) {

  return(
    <div className={styles.workspaceWrap} style={{color: slide.background}}>
      <div className={styles.workspace}>

          {getContent(slide)}

      </div>
    </div>
  )}

export default Workspace;