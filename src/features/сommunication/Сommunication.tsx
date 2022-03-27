import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Сommunication.module.scss'
import {NavLink} from "react-router-dom";
import {Message} from "./component/message/Message";
import {
   addTextMessageActionCreate,
   addTextMessageType,
   changeTextMessageActionCreate,
   changeTextMessageType,
} from "../../redux/reducer/communicationPage-reducer";
import { communicationDateType } from '../../redux/store';

export type communicationType = {
   communicationPage: communicationDateType
   dispatch: (action: addTextMessageType | changeTextMessageType) => void
}

export const Сommunication: React.FC<communicationType> = ({communicationPage, dispatch}) => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;
   const message = communicationPage.textMessage;

   const changeValueMessage = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeTextMessageActionCreate(e.currentTarget.value))
   }

   const addValueMessage = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
         dispatch(addTextMessageActionCreate())
      }
   }

   return (
       <div className={s.communication}>
          <h1 className={s.title}>Dialogs</h1>

          <div className={s.contact}>
             <input className={s.search} type="text" placeholder="Search contact..."/>

             <ul className={s.dialogs}>
                {communicationPage.dialogs.map(dialog =>
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
                {communicationPage.messages.map(message =>
                    <li className={s.item} key={message.id}>
                       <Message message={message}/>
                    </li>
                )}
             </ul>

             <input className={s.entryFieldInput}
                    type="text"
                    placeholder="To write a message..."
                    value={message}
                    onChange={changeValueMessage}
                    onKeyUp={addValueMessage}/>
          </div>
       </div>
   );
};
