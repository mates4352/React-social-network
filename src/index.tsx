import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';
import {state, changeValueTextarea, addPost, subscribe, stateType} from "./redux/state";

const renderUi = (state: stateType) => {
   ReactDOM.render(
       <React.StrictMode>
          <App state={state} changeValueTextarea={changeValueTextarea} addPost={addPost}/>
       </React.StrictMode>,
       document.getElementById('root')
   );
   reportWebVitals();
}

renderUi(state)
subscribe(renderUi)
