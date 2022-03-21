import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';
import {store} from "./redux/state";

const renderUi = () => {
   ReactDOM.render(
       <React.StrictMode>
          <App state={store.getState()} addPost={store.addPost.bind(store)} changeValueTextarea={store.changeValueTextarea.bind(store)}/>
       </React.StrictMode>,
       document.getElementById('root')
   );
   reportWebVitals();
}

renderUi()
store.subscribe(renderUi)
