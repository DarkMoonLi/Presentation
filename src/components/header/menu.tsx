import styles from './menu.module.css'

function Menu () {
  return (
    <div className={styles.menu}>
      <button className={styles.iconAdd}></button>
      <button className={styles.iconUndo}></button>
      <button className={styles.iconRedo}></button>
      <button className={styles.iconSelect}></button>
      <button className={styles.iconText}></button>
      <button className={styles.iconImage}></button>
      <button className={styles.iconPrimitive}></button>
    </div>
  )}

export default Menu;