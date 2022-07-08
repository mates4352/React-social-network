import React from 'react';
import s from './User-info.module.scss';
import {userType} from "../../../../../bll/redux/reducer/users/users-reducer";

type usersInfoType = {
   user: userType
};

export class UserInfo extends React.PureComponent<usersInfoType> {
   constructor(props: usersInfoType) {
      super(props);
   }

   render() {
      const {user} = this.props;

      return (
          <div className={s.info}>
             <span className={s.name}>{user.name}</span>
             <span className={s.city}>city</span>
             <span className={s.country}>country</span>
          </div>
      );
   };
};
