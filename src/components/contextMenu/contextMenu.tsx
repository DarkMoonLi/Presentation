import { ReactElement } from 'react'
import styles from './contextMenu.module.css'

type ContextPropsType = {
  anchorPoint: {
    x: number,
    y: number
  }
  children: Array<ReactElement>
};

function ContextMenu( props: ContextPropsType ) { 
  return (
    <foreignObject 
      style={{
        position: 'absolute'
      }}
      x={props.anchorPoint.x}
      y={props.anchorPoint.y}
      width={200}
      height={'100%'}
    >
      <ul className={styles.contextMenu}>
        {props.children}
      </ul>
    </foreignObject>)
}

export default ContextMenu