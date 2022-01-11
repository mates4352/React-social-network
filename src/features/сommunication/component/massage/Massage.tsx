import React from 'react';
import s from './Massage.module.scss'

export type dataMassageType = {
   id: number,
   text: string
};

type massageType = {
   massage: dataMassageType
};


export const Massage:React.FC<massageType> = (props) => {
   debugger
   return (
       <div className={s.massage}>
          <img className={s.avatar} src="#" alt="Image personal"/>

          <p className={s.text}>
             {props.massage.text}
          </p>
       </div>
   );
};