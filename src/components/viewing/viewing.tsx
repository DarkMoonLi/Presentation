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
    document.removeEventListener('keydown', processKey);
    document.addEventListener('keydown', processKey);
    let state = store.getState()
    const slideStyle = {
        backgroundImage: `url(${state.viewing.currentSlide.backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'contain',
        backgroundColor: state.viewing.currentSlide.background,
        backgroundPosition: 'center'
    };
    return (
        <div 
            className={styles.viewing}
            onClick={() => store.dispatch(getNextSlide())}
        >
            <svg
                className={styles.viewing}
                style={slideStyle}
                viewBox='0 0 1400 800'
                pointerEvents='none'
                preserveAspectRatio='xMinYMax meet'
            >
                {getContent(state.viewing.currentSlide)}
            </svg>
        </div>
    )
}