import React from 'react';
import s from './Messages.module.scss'
import {NavLink} from "react-router-dom";

type messagesType = {};

type dataDialogsType = {
   id: number,
   name: string,
}

export const Messages: React.FC<messagesType> = (props) => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

   const dataDialogs:Array<dataDialogsType> = [
      {id: 0, name: "Sergey"},
      {id: 1, name: "Sergey"},
      {id: 2, name: "Sergey"},
      {id: 3, name: "Sergey"},
      {id: 4, name: "Sergey"},
      {id: 5, name: "Sergey"},
   ]

   return (
       <div className={s.messages}>
          <div className={s.container}>
             <h2 className={s.title}>Dialogs</h2>
             <ul className={s.Dialogs}>
                {dataDialogs.map( dialogs =>
                    <li className={s.name}>
                       <NavLink className={classLink} to={`Messages/${dialogs.id}`}>{dialogs.name}</NavLink>
                    </li>
                )}
             </ul>
          </div>
       </div>
   );
};