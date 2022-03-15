import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';
import {addPost} from "./redux/state";
import {changeValueTextarea} from "./redux/state";

export function renderUi(state) {
  ReactDOM.render(
     <React.StrictMode>
       <App state={state} changeValueTextarea={changeValueTextarea} addPost={addPost}/>
     </React.StrictMode>,
     document.getElementById('root')
  );
  reportWebVitals();
}
