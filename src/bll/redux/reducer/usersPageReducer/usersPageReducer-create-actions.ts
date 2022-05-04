import {Actions_Type} from "../Actions-Type";
import {userType} from "./usersPageReducer";

export type changeFollowUserType = ReturnType<typeof changeFollowUserActionCreate>
export type getUsersType = ReturnType<typeof getUsersActionCreate>
export type changePaginationType = ReturnType<typeof changePaginationActionCreate>
export type getTotalCountType = ReturnType<typeof getTotalCountActionCreate>
export type changeIsPreloaderType = ReturnType<typeof changeIsPreloaderActionCreate>
export type userActionType = changeFollowUserType | getUsersType | changePaginationType | getTotalCountType | changeIsPreloaderType

export const changeFollowUserActionCreate = (idUser: string) => {
   return {type: Actions_Type.CHANGE_FOLLOW_USER, idUser} as const
}

export const getUsersActionCreate = (items: Array<userType>) => {
   return {type: Actions_Type.GET_USERS, items} as const
}

export const getTotalCountActionCreate = (totalCount: number) => {
   return {type: Actions_Type.GET_TOTAL_COUNT, totalCount} as const
}

export const changePaginationActionCreate = (currentPage: number) => {
   return {type: Actions_Type.CHANGE_PAGINATION, currentPage} as const
}

export const changeIsPreloaderActionCreate = (isPreloader: boolean) => {
   return {type: Actions_Type.CHANGE_IS_PRELOADER, isPreloader} as const
}

