import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addEditorChangeHandler, dispatch, getEditor } from './scripts/editor';
import { getApplication/*, newPresentation*/ } from './scripts/structure';

dispatch(getApplication, {});

function render() {
  return(
  ReactDOM.render(
    <React.StrictMode>
      <App editor = {getEditor()} />
    </React.StrictMode>,
    document.getElementById('root')
  ));
}

addEditorChangeHandler(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

