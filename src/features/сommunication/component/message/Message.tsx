import React from 'react';
import s from './Message.module.scss'
import image from "./../../../../assets/images/avatar.jpg"
import {MessageType} from "../../../../redux/reducer/communicationPage-reducer/communicationPage-reducer";

export type dialogsType = {
   message: MessageType
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
