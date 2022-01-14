import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';

import {datePostType} from "./features/account/components/post/post";
import {dataPersonalType} from "./features/account/components/personal/Personal";
import {communicationType} from "./features/сommunication/Сommunication"

export const dataPost: Array<datePostType> = [
   {
      id: 0,
      text: "lorem lorem lorem lorem lorem",
      time: "2022-01-10",
   },

   {
      id: 1,
      text: "text",
      time: "2022-01-10",
   }
]
export const personal: dataPersonalType = {
   id: 0,
   name: "Sergey",
   description: "description"
}
export const dataMessage: Array<communicationType> = [
   {
      id: 0,
      name: "Sergey1",
      message: [
         {id: 0, text: "Hello"},
         {id: 1, text: "Bay"},
         {id: 3, text: "Hello"},
         {id: 4, text: "Bay"},
         {id: 5, text: "Hello"},
      ]
   },

   {
      id: 1,
      name: "Sergey2",
      message: [
         {id: 0, text: "Hello"},
         {id: 1, text: "Bay"},
         {id: 3, text: "Hello"},
         {id: 4, text: "Bay"},
         {id: 5, text: "Hello"},
         {id: 6, text: "Bay"},
         {id: 7, text: "Hello"},
         {id: 8, text: "Bay"},
         {id: 9, text: "Hello"},
         {id: 10, text: "Bay"},
         {id: 11, text: "Hello"},
         {id: 12, text: "Bay"},
         {id: 13, text: "Hello"},
         {id: 14, text: "Bay"},
         {id: 15, text: "Bay"},
         {id: 16, text: "Bay"},
         {id: 17, text: "Bay"},
      ]
   },
   {
      id: 2,
      name: "Sergey3",
      message: [
         {id: 0, text: "Hello"},
      ]
   },

   {
      id: 3,
      name: "Sergey4",
      message: [
         {id: 0, text: "Hello"},
         {id: 1, text: "Bay"},
      ]
   },

   {
      id: 4,
      name: "Sergey5",
      message: [
         {id: 0, text: "Hello"},
         {id: 1, text: "Bay"},
         {id: 3, text: "Hello"},
      ]
   },

]


ReactDOM.render(
  <React.StrictMode>
    <App
        datePost={dataPost}
        personal={personal}
        dataMessage={dataMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
