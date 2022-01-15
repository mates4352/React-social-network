import React from 'react';
import s from './Message.module.scss'
import image from "./../../../../assets/images/avatar.jpg"

export type dataDialogsType = {
   id: number,
   text: string
}

export type dialogsType = {
   messages: dataDialogsType
};

export const Message:React.FC<dialogsType> = (props) => {

   return (
       <div className={s.message}>
          <img className={s.avatar} src={image} alt="Image personal"/>

          <p className={s.text}>
             {props.messages.text}
          </p>
       </div>
   );
};