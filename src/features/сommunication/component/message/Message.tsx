import React from 'react';
import s from './Message.module.scss'
import image from "./../../../../assets/images/avatar.jpg"
import {dataDialogsType} from "../../../../redux/store";

export type dialogsType = {
   message: dataDialogsType
};

export const Message:React.FC<dialogsType> = (props) => {

   return (
       <div className={s.message}>
          <img className={s.avatar} src={image} alt="Image personal"/>

          <p className={s.text}>
             {props.message.text}
          </p>
       </div>
   );
};
