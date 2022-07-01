import {Actions_Type} from "../../Actions-Type";
import {userType} from "../users-page-reducer";

export const changeFollowUser = (idUser: string) => {
   return {type: Actions_Type.CHANGE_FOLLOW_USER, idUser} as const
}

export const setUsers = (items: Array<userType>) => {
   return {type: Actions_Type.SET_USERS, items} as const
}

export const setTotalCount = (totalCount: number) => {
   return {type: Actions_Type.SET_TOTAL_COUNT, totalCount} as const
}

export const changePagination = (currentPage: number) => {
   return {type: Actions_Type.CHANGE_PAGINATION, currentPage} as const
}

export const changeIsPreloader = (isPreloader: boolean) => {
   return {type: Actions_Type.CHANGE_IS_PRELOADER, isPreloader} as const
}

export const changeIsDisabled = (isBoolean: boolean, isDisabled: string) => {
   return {type: Actions_Type.CHANGE_IS_DISABLED, isBoolean, isDisabled} as const
}
