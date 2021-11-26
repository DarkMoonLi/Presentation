import styles from './header.module.css'
import '../../scripts/structure'
import { getApplication, newPresentation, setTitle } from '../../scripts/structure';
import { useState } from 'react';

function TitlePresentation () {

  const app = newPresentation(getApplication());

  return (
    <div className={styles.titleContainer}>
      <input value={app.presentation.title} className={styles.titlePresentation} placeholder='Untitled presentation'/>
    </div>
  )}

export default TitlePresentation;