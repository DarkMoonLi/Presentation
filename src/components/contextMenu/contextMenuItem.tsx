import styles from './contextMenuItem.module.css';
import store from '../../store/store'

type ItemTypes = {
  title: string,
  action: any
}

function Item ({title, action}: ItemTypes) {
  return (
    <li className={styles.navbarItem} onClick={() => store.dispatch(action)}>
      <span className={styles.navbarItemTitle}>{title}</span>
    </li>
  )}

export default Item;