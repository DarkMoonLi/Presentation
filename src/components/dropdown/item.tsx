import { dispatch } from '../../scripts/editor';
import { Application, Presentation } from '../../scripts/structure';
import styles from './item.module.css';

type ItemTypes = {
  title: string,
  action: Function
}

function Item ({title, action}: ItemTypes) {
  return (
    <li className={styles.navbarItem} onClick={() => dispatch(action, {})}>
      <span className={styles.navbarItemTitle}>{title}</span>
    </li>
  )}

export default Item;