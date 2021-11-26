import styles from './dropdown.module.css';

function Item (props: any) {
  return (
    <li className={styles.navbarItem}>
      <span className={styles.navbarItemTitle}>{props.title}</span>
    </li>
  )}

export default Item;