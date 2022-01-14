import React, {useState} from 'react';
import s from './Сommunication.module.scss'
import {NavLink} from "react-router-dom";
import {dataDialogsType, Massage} from "./component/massage/Massage";

export type communicationType = {
   id: number
   name: string
   message: Array<dataDialogsType>
};

export type messageType = {
   dataMessage: Array<communicationType>
}

export const Сommunication: React.FC<messageType> = (props) => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

   const [number, setNumber] = useState(0);

   const counterNumber = (value:number) => {
      setNumber(value)
   }

   return (
       <div className={s.communication}>
          <h1 className={s.title}>Dialogs</h1>

          <div className={s.contact}>
             <input className={s.search} type="text" placeholder="Search contact..."/>

             <ul className={s.dialogs}>
                {props.dataMessage.map(dialogs =>
                    <li className={s.dialogsItem}>
                       <NavLink
                           className={classLink}
                           to={`${dialogs.id}`}
                           onClick={()=> {counterNumber(dialogs.id)}}>
                           {dialogs.name}
                       </NavLink>
                    </li>
                )}
             </ul>
          </div>

          <div className={s.content}>
             <p className={s.contactName}>
                {props.dataMessage.map(dialogs =>
                    dialogs.id === number &&
                    <strong>{dialogs.name}</strong>
                )}
             </p>

             <ul className={s.list}>
                {props.dataMessage.map(item =>
                    item &&
                    item.message.map(message =>
                        <li className={s.item} key={item.id}>
                           <Massage message={message}/>
                        </li>
                    ).filter( () => item.id === number )
                )}
             </ul>

             <form className={s.entryField}>
                <input className={s.entryFieldInput} type="text" placeholder="To write a message..."/>
             </form>
          </div>
       </div>
   );
};