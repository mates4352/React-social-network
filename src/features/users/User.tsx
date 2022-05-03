import * as React from 'react';
import {userPropsType} from "./UserContainer";
import s from './User.module.scss'
import image from './../../assets/images/avatar.jpg'

export class User extends React.Component<userPropsType> {
   constructor(props: userPropsType) {
      super(props);
   }

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }

   componentDidUpdate() {
      console.log(this.props)
   }

   render() {
      const {users, getUsers, getArrayPageNumber, changeFollowUser, changePagination} = this.props;
      const pagesNumbers = getArrayPageNumber(this.props.totalCount, this.props.pageSize);

      return (
          <>
             <ul className={s.pagination}>
                {pagesNumbers.map(pageNumber =>
                    <li className={s.pagination_item} key={pageNumber}>
                       <button
                           className={`${this.props.currentPage === pageNumber && s.pagination_button_active} ${s.pagination_button}`}
                           type='button'
                           onClick={() => {
                              changePagination(pageNumber)
                              getUsers(pageNumber, this.props.pageSize)
                           }}>
                          {pageNumber}
                       </button>
                    </li>
                )}
             </ul>
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
          </>

      );
   }
};
