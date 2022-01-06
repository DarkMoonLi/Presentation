import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addEditorChangeHandler, dispatch } from './scripts/editor';
import { getApplication } from './scripts/structure';
import store from './store/store';
import { Provider } from 'react-redux';

dispatch(getApplication, {});

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

addEditorChangeHandler(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

