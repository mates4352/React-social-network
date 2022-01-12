import React, {useState} from 'react';
import s from './Сommunication.module.scss'
import {NavLink, Outlet} from "react-router-dom";
import {dataMessageType, Massage} from "./component/massage/Massage";

type messagesType = {};

type dataDialogsType = {
   id: number,
   name: string,
   message: Array<dataMessageType>
}

export const Сommunication: React.FC<messagesType> = (props) => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

   const [number, setNumber] = useState(0);

   const counterNumber = (value:number) => {
      setNumber(value)
   }

   const dataDialogs: Array<dataDialogsType> = [
      {
         id: 0,
         name: "Sergey1",
         message: [
            {id: 0, text: "Hello"},
            {id: 1, text: "Bay"},
            {id: 3, text: "Hello"},
            {id: 4, text: "Bay"},
            {id: 5, text: "Hello"},
         ]
      },

      {
         id: 1,
         name: "Sergey2",
         message: [
            {id: 0, text: "Hello"},
            {id: 1, text: "Bay"},
            {id: 3, text: "Hello"},
            {id: 4, text: "Bay"},
            {id: 5, text: "Hello"},
            {id: 6, text: "Bay"},
            {id: 7, text: "Hello"},
            {id: 8, text: "Bay"},
            {id: 9, text: "Hello"},
            {id: 10, text: "Bay"},
            {id: 11, text: "Hello"},
            {id: 12, text: "Bay"},
            {id: 13, text: "Hello"},
            {id: 14, text: "Bay"},
         ]
      },
      {
         id: 2,
         name: "Sergey3",
         message: [
            {id: 0, text: "Hello"},
         ]
      },

      {
         id: 3,
         name: "Sergey4",
         message: [
            {id: 0, text: "Hello"},
            {id: 1, text: "Bay"},
         ]
      },

      {
         id: 4,
         name: "Sergey5",
         message: [
            {id: 0, text: "Hello"},
            {id: 1, text: "Bay"},
            {id: 3, text: "Hello"},
         ]
      },

   ]

   return (
       <div className={s.communication}>
          <h1 className={s.title}>Dialogs</h1>

          <div className={s.contact}>
             <input className={s.search} type="text" placeholder="Search contact..."/>

             <ul className={s.dialogs}>
                {dataDialogs.map(dialogs =>
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
                {dataDialogs.map(dialogs =>
                    dialogs.id === number &&
                    <strong>{dialogs.name}</strong>
                )}
             </p>

             <ul className={s.list}>
                {dataDialogs.map(item =>
                    item &&
                    item.message.map(message =>
                        <li className={s.item} key={item.id}>
                           <Massage massage={message}/>
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