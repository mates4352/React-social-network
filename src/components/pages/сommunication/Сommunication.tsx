import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Сommunication.module.scss'
import {NavLink} from "react-router-dom";
import {Message} from "./component/message/Message";
import {DialogsType, MessageType} from "../../../bll/redux/reducer/communication/communication-reducer";
import {CommunicationInput} from "./component/communicationInput/CommunicationInput";

export type communicationType = {
   messages: Array<MessageType>
   dialogs: Array<DialogsType>
   sendMessage: (text: string) => void
}

export class Сommunication extends React.Component<communicationType> {
   constructor(props: communicationType) {
      super(props);
   }

   render() {
      const {messages, dialogs, sendMessage} = this.props
      const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

      return (
          <div className={s.communication}>
             <h1 className={s.title}>Dialogs</h1>

             <div className={s.contact}>
                <input className={s.search} type="text" placeholder="Search contact..."/>

                <ul className={s.dialogs}>
                   {dialogs.map(dialog =>
                       <li className={s.dialogsItem} key={dialog.id}>
                          <NavLink
                              className={classLink}
                              to={`${dialog.id}`}>
                             {dialog.name}
                          </NavLink>
                       </li>
                   )}
                </ul>
             </div>

             <div className={s.content}>
                <p className={s.contactName}>
                   <strong>hello</strong>
                </p>

                <ul className={s.list}>
                   {messages.map(message =>
                       <li className={s.item} key={message.id}>
                          <Message message={message}/>
                       </li>
                   )}
                </ul>

                <CommunicationInput sendMessage={sendMessage}/>
             </div>
          </div>
      );
   }
}



