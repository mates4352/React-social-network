import React from 'react';
import s from './Users-list.module.scss'
import {userType} from "../../../../../bll/redux/reducer/users-page-reducer/users-page-reducer";
import {NavLink} from "react-router-dom";
import image from "../../../../../assets/images/avatar.jpg";
import {Avatar} from "../../../../shared/avatar/Avatar";
import {UserInfo} from "../user-info/User-info";

type usersListType = {
   users: Array<userType>
   isDisabled: (userId: string) => boolean | undefined
   editFollowUser: (userFollowed: boolean, userId: string) => () => void
};

export class UsersList extends React.PureComponent<usersListType> {
   constructor(props: usersListType) {
      super(props);
   }

   render() {
      const {users, isDisabled, editFollowUser} = this.props;

      return (
          <ul className={`${s.list} ${s.container}`}>
             {
                users.map((user: userType) => (
                        <li className={s.item} key={user.id}>
                           <NavLink to={`/Account/${user.id}`}>
                              <Avatar src={user.photos.small} alt='Пользователь'/>
                           </NavLink>

                           <button
                               className={s.button}
                               disabled={isDisabled(user.id)}
                               onClick={editFollowUser(user.followed, user.id)}
                               type='button'>
                              {user.followed ? 'UnFollow' : 'Follow'}
                           </button>
                           <UserInfo user={user}/>
                        </li>
                    )
                )
             }
          </ul>
      );
   };
};
