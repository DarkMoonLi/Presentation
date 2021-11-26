import { useState } from 'react';
import styles from './dropdown.module.css';

function Dropdown(props: any) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button className={styles.navbarBottom} onClick={() => setOpen(!open)}>{props.title}</button>
      <ul className={styles.navbarNav}>
        {open && props.children}
      </ul>
    </nav>
  )}

  export default Dropdown;