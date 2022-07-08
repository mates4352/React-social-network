import {
   changeFollowUser, changeIsDisabled,
   changeIsPreloader,
   changePagination,
   setTotalCount,
   setUsers
} from "./users-actions";

export type userActionType = changeFollowUserType | getUsersType | changePaginationType | getTotalCountType | changeIsPreloaderType | changeIsDisabledType;
export type changeFollowUserType = ReturnType<typeof changeFollowUser>
export type getUsersType = ReturnType<typeof setUsers>
export type changePaginationType = ReturnType<typeof changePagination>
export type getTotalCountType = ReturnType<typeof setTotalCount>
export type changeIsPreloaderType = ReturnType<typeof changeIsPreloader>
export type changeIsDisabledType = ReturnType<typeof changeIsDisabled>
