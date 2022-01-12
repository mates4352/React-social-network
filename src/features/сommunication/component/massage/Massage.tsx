import React from 'react';
import s from './Massage.module.scss'
import image from "./../../../../assets/images/avatar.jpg"

export type dataMessageType = {
   id: number,
   text: string
};

type messageType = {
   massage: dataMessageType
};


export const Massage:React.FC<messageType> = (props) => {

   return (
       <div className={s.message}>
          <img className={s.avatar} src={image} alt="Image personal"/>

          <p className={s.text}>
             {props.massage.text}
          </p>
       </div>
   );
};