import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

store.subscribe(() => render())

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

render();