import * as React from 'react';
import {userPropsType} from "./UserContainer";


export const User:React.FC<userPropsType> = (
    {users, changeFollowUser}
) => {
   return (
       <div>
          {
             users.map(user =>
               <div>
                  <div>
                     <img src="#" alt="Изображение пользователя"/>
                     <button onClick={() => changeFollowUser(user.id)} type='button'>{user.follow ? 'Follow' : 'unFollow'}</button>
                  </div>

                  <div>
                     <span>{user.name}</span>
                     <span>{user.location.city}</span>
                     <span>{user.location.country}</span>
                  </div>
               </div>
             )
          }
       </div>
   );
};
