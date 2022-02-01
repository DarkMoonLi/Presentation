import { useState, useEffect, useRef, ReactElement } from 'react';
import styles from './dropdown.module.css';

type DropdownPropsType = {
  title: string,
  children: Array<ReactElement>
};

function Dropdown(props: DropdownPropsType) { 
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const onClick = (e: { target: any; }) => {
      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null) {
        setIsActive(!isActive);
      }
    }

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    }
  }, [isActive]);
  const onClick = () => setIsActive(!isActive);

  return (
    <nav className={styles.navbar} ref={dropdownRef}>
      <button className={styles.navbarBottom} onClick={onClick}>
        {props.title}
      </button>
      <ul className={styles.navbarNav}>
        {isActive && props.children}
      </ul>
    </nav>
  )}

  export default Dropdown;