import React from 'react';
import s from './Massage.module.scss'
import image from "./../../../../assets/images/avatar.jpg"

export type dataDialogsType = {
   id: number,
   text: string
}

export type DialogsType = {
   message: dataDialogsType
};


export const Massage:React.FC<DialogsType> = (props) => {

   return (
       <div className={s.message}>
          <img className={s.avatar} src={image} alt="Image personal"/>

          <p className={s.text}>
             {props.message.text}
          </p>
       </div>
   );
};