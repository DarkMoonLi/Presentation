import { getNextSlide, getPrevSlide, stopViewingMode } from '../../store/actionCreators/viewing';
import store from '../../store/store';
import getContent from '../content/content';
import styles from './viewing.module.css';

function processKey(event: KeyboardEvent) {
    console.log(event);
    if (event.key === 'ArrowLeft') {
        store.dispatch(getPrevSlide())
    }  
    if (event.key === 'ArrowRight') {
        store.dispatch(getNextSlide())
    }
    if (event.key === 'Escape') {
        store.dispatch(stopViewingMode())
    }
};

export function View() {
    document.removeEventListener('keydown', processKey)
    document.addEventListener('keydown', processKey)
    return (
        <div 
            className={styles.viewing}
            onClick={() => store.dispatch(getNextSlide())}
        >
            <div>
                {getContent(store.getState().viewing.currentSlide)}
            </div>
        </div>
    )
}