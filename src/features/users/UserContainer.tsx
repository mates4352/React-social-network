import * as React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {stateType} from "../../bll/redux/redux-store";
import {Dispatch} from "redux";
import {userPageType, userType} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer";
import axios, {AxiosResponse} from "axios";
import {
   changeFollowUserActionCreate, changePaginationActionCreate, getTotalCountActionCreate,
   getUsersActionCreate
} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer-create-actions";

type maxStateToPropsType = {
   users: Array<userType>
   pageSize: number
   totalCount: number
   currentPage: number
}
type maxDispatchToPropsType = {
   changeFollowUser: (idUser: string) => void
   getUsers: (currentPage: number, totalCount: number) => void
   changePagination: (currentPage: number) => void
   getArrayPageNumber: (totalCount: number, pageSize: number) => number[]
}
export type userPropsType = maxStateToPropsType & maxDispatchToPropsType;

const maxStateToProps = (state: stateType): maxStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
   }
}
const maxDispatchToProps = (dispatch: Dispatch): maxDispatchToPropsType => {
   return {
      changeFollowUser: (idUser) => {
         dispatch(changeFollowUserActionCreate(idUser))
      },
      getUsers: (currentPage: number, totalCount: number) => {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${totalCount}`).then((result: AxiosResponse<userPageType>) => {
            dispatch(getTotalCountActionCreate(result.data.totalCount))
            dispatch(getUsersActionCreate(result.data.items))
         })
      },
      changePagination: (currentPage) => {
         dispatch(changePaginationActionCreate(currentPage))
      },
      getArrayPageNumber: (totalCount: number, pageSize: number) => {
         const pages = [];
         const pageNumber = Math.ceil(totalCount / pageSize);
         for(let i = 1; i <= pageNumber; i++) {
            pages[i] = i;
         }
         return pages
      }
   }
}

export const UserContainer = connect(maxStateToProps, maxDispatchToProps)(User)
