import styles from './title.module.css'
import store from '../../store/store';
import { changeTitle } from '../../store/actionCreators/title';

function handleSelect(event: any) {
  event.target.select()
}

function TitlePresentation (this: any) {

  return (
    <div className={styles.titleContainer}>
      <input 
        type='text' 
        value={store.getState().presentation.title} 
        className={styles.titlePresentation} 
        onChange={(event) => store.dispatch(changeTitle(event.target.value))} 
        onClick={handleSelect}
        placeholder='Untitled presentation'/>
    </div>
  )}

export default TitlePresentation;