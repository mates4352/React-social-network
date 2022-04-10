import * as React from 'react';
import {userPropsType} from "./UserContainer";
import s from './User.module.scss'
import image from './../../assets/images/avatar.jpg'

export const User:React.FC<userPropsType> = (
    {users, changeFollowUser}
) => {
   return (
       <div className={s.users_page}>
          {
             users.map(user =>
               <div className={s.container}>
                  <div className={s.wrap_image}>
                     <img className={s.image} src={image} alt="Изображение пользователя"/>
                     <button className={s.button} onClick={() => changeFollowUser(user.id)} type='button'>{user.follow ? 'Follow' : 'UnFollow'}</button>
                  </div>

                  <div className={s.content}>
                     <span className={s.name}>{user.name}</span>
                     <span className={s.city}>{user.location.city}</span>
                     <span className={s.country}>{user.location.country}</span>
                  </div>
               </div>
             )
          }
       </div>
   );
};