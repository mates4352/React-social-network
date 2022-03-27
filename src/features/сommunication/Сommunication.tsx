import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Сommunication.module.scss'
import {NavLink} from "react-router-dom";
import {Message} from "./component/message/Message";
import {dataDialogsType, dateMessageType} from "../../redux/store";

export type communicationType = {
   messageValue: string
   messages: Array<dataDialogsType>
   dialogs: Array<dateMessageType>
   changeValueMessage: (e: ChangeEvent<HTMLInputElement>) => void
   sendMessage: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const Сommunication: React.FC<communicationType> = (
    {messageValue, messages, dialogs, changeValueMessage, sendMessage}
) => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

   return (
       <div className={s.communication}>
          <h1 className={s.title}>Dialogs</h1>

          <div className={s.contact}>
             <input className={s.search} type="text" placeholder="Search contact..."/>

             <ul className={s.dialogs}>
                {dialogs.map(dialog =>
                    <li className={s.dialogsItem}>
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

             <input className={s.entryFieldInput}
                    type="text"
                    placeholder="To write a message..."
                    value={messageValue}
                    onChange={changeValueMessage}
                    onKeyUp={sendMessage}/>
          </div>
       </div>
   );
};
