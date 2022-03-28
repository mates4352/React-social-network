import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';
import {store} from "./redux/redux-store";
import {StoreContext} from "./context";

const renderUi = () => {
   ReactDOM.render(
       <React.StrictMode>
          <StoreContext.Provider value={store}>
             <App/>
          </StoreContext.Provider>
       </React.StrictMode>,
       document.getElementById('root')
   );
   reportWebVitals();
}

renderUi()
store.subscribe(renderUi)
