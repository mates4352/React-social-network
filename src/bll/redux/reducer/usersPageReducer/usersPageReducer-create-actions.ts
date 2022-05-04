import {Actions_Type} from "../Actions-Type";
import {userType} from "./usersPageReducer";

export type changeFollowUserType = ReturnType<typeof changeFollowUser>
export type getUsersType = ReturnType<typeof getUsers>
export type changePaginationType = ReturnType<typeof changePagination>
export type getTotalCountType = ReturnType<typeof getTotalCount>
export type changeIsPreloaderType = ReturnType<typeof changeIsPreloader>
export type userActionType = changeFollowUserType | getUsersType | changePaginationType | getTotalCountType | changeIsPreloaderType

export const changeFollowUser = (idUser: string) => {
   return {type: Actions_Type.CHANGE_FOLLOW_USER, idUser} as const
}

export const getUsers = (items: Array<userType>) => {
   return {type: Actions_Type.GET_USERS, items} as const
}

export const getTotalCount = (totalCount: number) => {
   return {type: Actions_Type.GET_TOTAL_COUNT, totalCount} as const
}

export const changePagination = (currentPage: number) => {
   return {type: Actions_Type.CHANGE_PAGINATION, currentPage} as const
}

export const changeIsPreloader = (isPreloader: boolean) => {
   return {type: Actions_Type.CHANGE_IS_PRELOADER, isPreloader} as const
}

