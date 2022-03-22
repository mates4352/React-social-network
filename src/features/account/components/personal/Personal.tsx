// @flow
import React from 'react';
import s from "./Personal.module.scss"
import imageAvatar from "../../../../assets/images/avatar.jpg";
import {dataPersonalType} from "../../../../redux/store";

export type personalType = {
   personal: dataPersonalType;
};

export const Personal:React.FC<personalType> = (props) => {
   return (
       <div className={s.personal}>
          <img className={s.avatar} src={imageAvatar} alt="Изображение аватара"/>

          <div className={s.description}>
             <h2 className={s.name}>{props.personal.name || "name"}</h2>
             <p className={s.text}>{props.personal.description || "text"}</p>
          </div>
       </div>
   );
};
