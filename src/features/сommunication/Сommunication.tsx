import React from 'react';
import s from './Сommunication.module.scss'
import {NavLink} from "react-router-dom";
import {dataMassageType, Massage} from "./component/massage/Massage";

type messagesType = {};

type dataDialogsType = {
   id: number,
   name: string,
}

export const Сommunication: React.FC<messagesType> = (props) => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

   const dataDialogs:Array<dataDialogsType> = [
      {id: 0, name: "Sergey"},
      {id: 1, name: "Sergey"},
      {id: 2, name: "Sergey"},
      {id: 3, name: "Sergey"},
      {id: 4, name: "Sergey"},
      {id: 5, name: "Sergey"},
   ]

   const dataMassage:Array<dataMassageType> = [
      {id: 0, text: "Hello"},
      {id: 1, text: "Hello"},
   ]

   return (
       <div className={s.communication}>
          <div className={s.container}>
             <h2 className={s.title}>Dialogs</h2>
             <ul className={s.Dialogs}>
                {dataDialogs.map( dialogs =>
                    <li className={s.name}>
                       <NavLink className={classLink} to={`Messages/${dialogs.id}`}>{dialogs.name}</NavLink>
                    </li>
                )}
             </ul>

             <ul className={s.list_massage}>
                {dataMassage.map( massage =>
                    <li className={s.item_massage} key={massage.id}>
                       <Massage massage={massage}/>
                    </li>
                )}
             </ul>
          </div>
       </div>
   );
};