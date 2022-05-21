import * as React from 'react';
import s from './User.module.scss'
import image from './../../assets/images/avatar.jpg'
import {Preloader} from "../../shared/interactive/Preloader/Preloader";
import {userType} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer";
import {NavLink} from "react-router-dom";

type userPropsType = {
   users: Array<userType>
   pagesNumbers: Array<number>
   currentPage: number
   pageSize: number
   isPreloader?: boolean
   isDisabled?: [] | string[]
   changePagination: (pageNumber: number, pageSize: number) => void
   editUserFollowed: (userId: string) => void
}

export class User extends React.Component<userPropsType> {
   constructor(props: userPropsType) {
      super(props);
   }

   render() {
      const {users, isPreloader, isDisabled, currentPage, pageSize, editUserFollowed, changePagination} = this.props;
      return (
          <>
             {isPreloader && <Preloader w={150} h={150} fill='#2a2e49'/>}
             <ul className={s.pagination}>
                {this.props.pagesNumbers.map(pageNumber =>
                    <li className={s.pagination_item} key={pageNumber}>
                       <button
                           className={`${currentPage === pageNumber && s.pagination_button_active} ${s.pagination_button}`}
                           type='button'
                           onClick={() => changePagination(pageNumber, pageSize)}>
                          {pageNumber}
                       </button>
                    </li>
                )}
             </ul>
             <div className={s.users_page}>
                {
                   users.map((user: userType) => {
                      return <div className={s.container} key={user.id}>
                         <div className={s.wrap_image}>
                            <NavLink to={`/Account/${user.id}`}>
                               <img className={s.image} src={user.photos.small === null ? image : user.photos.small} alt="Изображение пользователя"/>
                            </NavLink>
                            <button
                                className={s.button}
                                disabled={isDisabled?.some((item: string) => user.id === item)}
                                onClick={() => {
                                   if(user.followed) {
                                      editUserFollowed(user.id);
                                   } else {
                                      editUserFollowed(user.id);
                                   }
                                }}
                                type='button'>
                               {user.followed ? 'UnFollow' : 'Follow'}
                            </button>
                         </div>

                         <div className={s.content}>
                            <span className={s.name}>{user.name}</span>
                            <span className={s.city}>city</span>
                            <span className={s.country}>country</span>
                         </div>
                      </div>
                   }
                   )
                }
             </div>
          </>

      );
   }
};
