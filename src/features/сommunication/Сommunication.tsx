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

   const StrangerDataMassage:Array<dataMassageType> = [
      {id: 0, text: "Hello"},
      {id: 1, text: "Hello"},
      {id: 1, text: "Hello"},
      {id: 1, text: "Hello"},
   ]

   const MyDateMassage:Array<dataMassageType> = [
      {id: 0, text: "Bay"},
      {id: 1, text: "Bay"},
      {id: 1, text: "Bay"},
      {id: 1, text: "Bay"},
   ]


   return (
       <div className={s.communication}>
          <h1 className={s.title}>Dialogs</h1>

          <div className={s.contact}>
             <input className={s.search} type="text" placeholder="Search contact..."/>

             <ul className={s.dialogs}>
                {dataDialogs.map( dialogs =>
                    <li className={s.dialogsItem}>
                       <NavLink className={classLink} to={`Messages/${dialogs.id}`}>{dialogs.name}</NavLink>
                    </li>
                )}
             </ul>
          </div>

          <div className={s.content}>
             <p className={s.contactName}>
                name
             </p>

             <ul className={s.list}>
                {StrangerDataMassage.map( massage =>
                    massage &&
                    <li className={s.item} key={massage.id}>
                       <Massage massage={massage}/>
                    </li>
                )}

                {MyDateMassage.map( massage =>
                    massage &&
                   <li className={s.item} key={massage.id}>
                     <Massage massage={massage}/>
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