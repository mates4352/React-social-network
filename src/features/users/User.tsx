import * as React from 'react';
import {userPropsType} from "./UserContainer";
import s from './User.module.scss'
import image from './../../assets/images/avatar.jpg'

export class User extends React.Component<userPropsType> {
   constructor(props: userPropsType) {
      super(props);
   }

   componentDidMount() {
      this.props.getUsers()
      console.log('componentDidMount')
   }

   componentDidUpdate() {
      console.log('componentDidUpdate')
   }

   render() {
      const {users, changeFollowUser} = this.props;

      return (
          <div className={s.users_page}>
             {
                users.map(user =>
                    <div className={s.container} key={user.id}>
                       <div className={s.wrap_image}>
                          <img className={s.image} src={user.photos.small === null ? image : user.photos.small} alt="Изображение пользователя"/>
                          <button className={s.button} onClick={() => changeFollowUser(user.id)} type='button'>{user.follow ? 'Follow' : 'UnFollow'}</button>
                       </div>

                       <div className={s.content}>
                          <span className={s.name}>{user.name}</span>
                          <span className={s.city}>city</span>
                          <span className={s.country}>country</span>
                       </div>
                    </div>
                )
             }
          </div>
      );
   }
};
