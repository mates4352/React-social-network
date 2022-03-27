import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';
import {store} from "./redux/redux-store";

const renderUi = () => {
   ReactDOM.render(
       <React.StrictMode>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
       </React.StrictMode>,
       document.getElementById('root')
   );
   reportWebVitals();
}

renderUi()
store.subscribe(renderUi)
