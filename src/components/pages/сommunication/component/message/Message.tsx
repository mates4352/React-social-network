import React from 'react';
import s from './Message.module.scss'
import image from "../../../../../assets/images/avatar.jpg"
import {MessageType} from "../../../../../bll/redux/reducer/communication-page-reducer/communication-page-reducer";

export type dialogsType = {
   message: MessageType
};

export class Message extends React.Component<dialogsType> {
   constructor(props: dialogsType) {
      super(props);
   }

   render() {
      const {message} = this.props;
      return (
          <div className={s.message}>
             <img className={s.avatar} src={image} alt="Image personal"/>

             <p className={s.text}>
                {message.text}
             </p>
          </div>
      );
   }
}
