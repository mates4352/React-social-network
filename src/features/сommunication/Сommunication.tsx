import React, {useState} from 'react';
import s from './Сommunication.module.scss'
import {NavLink} from "react-router-dom";
import {Message} from "./component/message/Message";
import {communicationDateType} from "../../redux/state";

export type communicationType = {
   communicationPage: communicationDateType
}

export const Сommunication: React.FC<communicationType> = ({communicationPage}) => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;
   const [pathId, setPathId] = useState(0);

   return (
       <div className={s.communication}>
          <h1 className={s.title}>Dialogs</h1>

          <div className={s.contact}>
             <input className={s.search} type="text" placeholder="Search contact..."/>

             <ul className={s.dialogs}>
                {communicationPage.dialogs.map( dialog =>
                    <li className={s.dialogsItem}>
                       <NavLink
                           className={classLink}
                           to={`${dialog.id}`}
                           onClick={() => {setPathId(dialog.id)}}>
                           {dialog.name}
                       </NavLink>
                    </li>
                )}
             </ul>
          </div>

          <div className={s.content}>
             <p className={s.contactName}>
                {communicationPage.dialogs.map(dialog =>
                    dialog.id === pathId &&
                    <strong>{dialog.name}</strong>
                )}
             </p>

             <ul className={s.list}>
                {communicationPage.messages.map( message =>
                    <li className={s.item} key={message.id}>
                       <Message message={message}/>
                    </li>
                )}
             </ul>

             <form className={s.entryField}>
                <input className={s.entryFieldInput} type="text" placeholder="To write a message..."/>
             </form>
          </div>
       </div>
   );
};
