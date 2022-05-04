import * as React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {stateType} from "../../bll/redux/redux-store";
import {Dispatch} from "redux";
import {userPageType, userType} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer";
import axios, {AxiosResponse} from "axios";
import {
   changeFollowUserActionCreate, changeIsPreloaderActionCreate, changePaginationActionCreate, getTotalCountActionCreate,
   getUsersActionCreate
} from "../../bll/redux/reducer/usersPageReducer/usersPageReducer-create-actions";

type mapStateToPropsType = {
   users: Array<userType>
   pageSize: number
   totalCount: number
   currentPage: number
   isPreloader?: boolean
}
type mapDispatchToPropsType = {
   changeFollowUser: (idUser: string) => void
   getUsers: (currentPage: number, totalCount: number) => void
   changePagination: (currentPage: number, totalCount: number) => void
   getArrayPageNumber: (totalCount: number, pageSize: number) => number[]
}
export type userPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: stateType): mapStateToPropsType => {
   return {
      users: state.usersPage.items,
      pageSize: state.usersPage.pageSize,
      totalCount: state.usersPage.totalCount,
      currentPage: state.usersPage.currentPage,
      isPreloader: state.usersPage.isPreloader,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      changeFollowUser: (idUser) => {
         dispatch(changeFollowUserActionCreate(idUser))
      },
      getUsers: (currentPage: number, totalCount: number) => {
         dispatch(changeIsPreloaderActionCreate(true))
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${totalCount}`).then((result: AxiosResponse<userPageType>) => {
            dispatch(getTotalCountActionCreate(result.data.totalCount))
            dispatch(getUsersActionCreate(result.data.items))
            dispatch(changeIsPreloaderActionCreate(false))
         })
      },
      changePagination: (currentPage, totalCount: number) => {
         dispatch(changePaginationActionCreate(currentPage))
         dispatch(changeIsPreloaderActionCreate(true))
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${totalCount}`).then((result: AxiosResponse<userPageType>) => {
            dispatch(getTotalCountActionCreate(result.data.totalCount))
            dispatch(getUsersActionCreate(result.data.items))
            dispatch(changeIsPreloaderActionCreate(false))
         })
      },
      getArrayPageNumber: (totalCount: number, pageSize: number) => {
         const pages = [];
         const pageNumber = Math.ceil(totalCount / pageSize);
         for(let i = 1; i <= pageNumber; i++) {
            pages[i] = i;
         }
         return pages
      },
   }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)
