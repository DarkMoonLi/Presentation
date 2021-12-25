import styles from './title.module.css'
import '../../scripts/structure'
import { setTitle } from '../../scripts/structure';
import { useState } from 'react';
import { dispatch, editor } from '../../scripts/editor';

function TitlePresentation () {

  const [value, setValue] = useState(editor.presentation.title);

  function handleChange(event: any) {
      setValue(event.target.value);
      dispatch(setTitle, {value});
  }

  return (
    <div className={styles.titleContainer}>
      <input type='text' value={value} className={styles.titlePresentation} onChange={handleChange} placeholder='Untitled presentation'/>
    </div>
  )}

export default TitlePresentation;