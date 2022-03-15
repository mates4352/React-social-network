import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';
import {store, storeType} from "./redux/state";

const renderUi = (store: storeType) => {
   ReactDOM.render(
       <React.StrictMode>
          <App state={store.state}/>
       </React.StrictMode>,
       document.getElementById('root')
   );
   reportWebVitals();
}

renderUi(store)
store.subscribe(renderUi)
