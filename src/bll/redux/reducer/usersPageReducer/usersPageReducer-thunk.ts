import {usersAPI} from "../../../../api/userPage/usersAPI";
import {
   setTotalCount,
   setUsers,
   changeIsPreloader,
   changePagination,
   changeIsDisabled, changeFollowUser
} from "./usersPageReducer-create-actions";
import {Dispatch} from "redux";

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
   usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setTotalCount(data.totalCount));
      dispatch(setUsers(data.items));
      dispatch(changeIsPreloader(false));
   })
}

export const editPagination = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
   dispatch(changePagination(currentPage));
   dispatch(changeIsPreloader(true));

   usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setTotalCount(data.totalCount))
      dispatch(setUsers(data.items))
      dispatch(changeIsPreloader(false))
   })
}

export const followedUser = (userId: string) => (dispatch: Dispatch) => {
   dispatch(changeIsDisabled(true, userId))

   usersAPI.postUser(userId).then(userId => {
      dispatch(changeFollowUser(userId))
      dispatch(changeIsDisabled(false, userId))
   })
}

export const unFollowedUser = (userId: string) => (dispatch: Dispatch) => {
   dispatch(changeIsDisabled(true, userId))

   usersAPI.deleteUser(userId).then(userId => {
      dispatch(changeFollowUser(userId))
      dispatch(changeIsDisabled(false, userId))
   })
}
