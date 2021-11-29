import styles from './title.module.css'
import '../../scripts/structure'
import { getApplication, newPresentation, setTitle } from '../../scripts/structure';
import { useState } from 'react';

function TitlePresentation () {

  const app = getApplication();
  const [value, setValue] = useState(app.presentation.title);

  function handleChange(event: any) {
      setValue(event.target.value);
      setTitle(app, value);
  }

  

  return (
    <div className={styles.titleContainer}>
      <input type='text' value={value} className={styles.titlePresentation} onChange={handleChange} placeholder='Untitled presentation'/>
    </div>
  )}

export default TitlePresentation;