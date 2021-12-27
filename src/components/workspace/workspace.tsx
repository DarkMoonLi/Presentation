import { editor } from "../../scripts/editor";
import { Slide } from "../../scripts/structure";
import Circle from "../primitives/circle/circle";
import Rectangle from "../primitives/rectangle/rectangle";
import Square from "../primitives/square/square";
import SomebodyText from "../primitives/text/text";
import Triangle from "../primitives/triangle/triangle";
import styles from "./workspace.module.css"

function Workspace(slide: Slide) {
  return(
    <div className={styles.workspaceWrap} style={{color: slide.background}}>
      <svg className={styles.workspace}>
        <div>
          {slide.content.map(function(content) {
            if (content.type === 'text') {
              return SomebodyText
            } else if (content.type === 'circle') {
              return Circle
            } else if (content.type === 'triangle') {
              return Triangle
            } else if (content.type === 'rectangle') {
              return Rectangle
            } else if (content.type === 'image') {
              return
            }
          })}
        </div> 
      </svg>
    </div>
  )}

export default Workspace;