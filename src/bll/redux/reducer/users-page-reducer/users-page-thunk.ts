import {usersAPI} from "../../../../api/user-page-api/usersAPI";
import {
   setTotalCount,
   setUsers,
   changeIsPreloader,
   changePagination,
   changeIsDisabled, changeFollowUser
} from "./user-page-create-actions/users-page-create-actions";
import {AppThunkType} from "../../redux-store";

export const getUsers = (currentPage: number, pageSize: number): AppThunkType => dispatch => {
   usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setTotalCount(data.totalCount));
      dispatch(setUsers(data.items));
      dispatch(changeIsPreloader(false));
   })
}

export const editPagination = (currentPage: number, pageSize: number): AppThunkType => dispatch => {
   dispatch(changePagination(currentPage));
   dispatch(changeIsPreloader(true));
   dispatch(getUsers(currentPage, pageSize));
}

export const followedUser = (userId: string): AppThunkType => dispatch => {
   dispatch(changeIsDisabled(true, userId));

   usersAPI.postUser(userId).then(userId => {
      dispatch(changeFollowUser(userId));
      dispatch(changeIsDisabled(false, userId));
   })
}

export const unFollowedUser = (userId: string): AppThunkType => dispatch => {
   dispatch(changeIsDisabled(true, userId));

   usersAPI.deleteUser(userId).then(userId => {
      dispatch(changeFollowUser(userId));
      dispatch(changeIsDisabled(false, userId));
   })
}
