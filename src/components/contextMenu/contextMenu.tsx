import styles from './contextMenu.module.css'

function ContextMenu( props: any ) {  
  return (
    <foreignObject x={props.anchorPoint.x} y={props.anchorPoint.y} width={200} height={'100%'}>
      <ul className={styles.contextMenu}>
        {props.children}
      </ul>
    </foreignObject>)
}

export default ContextMenu