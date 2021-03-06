import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.scss';
import {store} from "./bll/redux/redux-store";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
         <App/>
       </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
