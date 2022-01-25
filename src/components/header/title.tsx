import styles from './title.module.css'
import store from '../../store/store';
import { changeTitle } from '../../store/actionCreators/title';
import { BaseSyntheticEvent } from 'react';

function handleSelect(event: BaseSyntheticEvent) {
  event.target.select()
}

function TitlePresentation() {

  return (
    <div className={styles.titleContainer}>
      <input 
        type='text' 
        value={store.getState().presentation.title} 
        className={styles.titlePresentation} 
        onChange={(event) => store.dispatch(changeTitle(event.target.value))} 
        onClick={handleSelect}
        placeholder='Название презентации'/>
    </div>
  )}

export default TitlePresentation;