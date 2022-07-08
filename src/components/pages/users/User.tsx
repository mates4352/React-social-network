import * as React from 'react';
import s from './User.module.scss'
import {Preloader} from "../../features/interactive/Preloader/Preloader";
import {userType} from "../../../bll/redux/reducer/users/users-reducer";
import {Pagination} from "../../shared/pagination/Pagination";
import {UsersList} from "./components/users-list/Users-list";

type userPropsType = {
   users: Array<userType>
   pagesNumbers: Array<number>
   currentPage: number
   pageSize: number
   isPreloader: boolean
   isDisabled: (userId: string) => boolean | undefined
   editPagination: (pageNumber: number, pageSize: number) => () => void
   editFollowUser: (userFollowed: boolean, userId: string) => () => void
}

export class User extends React.PureComponent<userPropsType> {
   constructor(props: userPropsType) {
      super(props);
   }

   render() {
      const {pagesNumbers, users, isPreloader, currentPage, pageSize, isDisabled, editFollowUser, editPagination} = this.props;

      return (
          <>
             {isPreloader && <Preloader w={150} h={150} fill='#2a2e49'/>}
             <Pagination
                 pagesNumbers={pagesNumbers}
                 currentPage={currentPage}
                 pageSize={pageSize}
                 editPagination={editPagination}/>

             <UsersList
                 users={users}
                 isDisabled={isDisabled}
                 editFollowUser={editFollowUser}/>
          </>

      );
   }
};
