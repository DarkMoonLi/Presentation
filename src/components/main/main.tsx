import styles from "./main.module.css"
import ListSlides from "../listSlides/listSlides";
import Workspace from "../workspace/workspace";

function Main(store: any)
{ 
  return(
    <main  className={styles.container}>
        <ListSlides />
        <Workspace />
    </main>
  )
}

export default Main;