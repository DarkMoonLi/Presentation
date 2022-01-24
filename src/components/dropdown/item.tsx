import styles from './item.module.css';
import store from '../../store/store'

type ItemTypes = {
  title: string,
  key: string
  action: any
}

function Item ({title, key, action}: ItemTypes) {
  if ((title === 'Установить картинку фоном') || (title === 'Удалить фоновую картинку') || (title === 'Редактировать') || (title === 'Режим просмотра') || (title === 'Удалить элементы слайда') || (title === 'На передний план') || (title === 'На задний план')) {
   return (
   <li className={`${styles.navbarItem} ${styles.navbarItem_image}`} onClick={() => store.dispatch(action)}>
     <span className={styles.navbarItemTitle}>{title}</span>
   </li>
   )
  } else {
  return (
    <li className={styles.navbarItem} onClick={() => store.dispatch(action)}>
      <span className={styles.navbarItemTitle}>{title}</span>
    </li>
  )}}
export default Item;