import {Actions_Type} from "../Actions-Type";
import {userType} from "./usersPageReducer";

export type changeFollowUserType = ReturnType<typeof changeFollowUserActionCreate>
export type getUsersType = ReturnType<typeof getUsersActionCreate>

export const changeFollowUserActionCreate = (idUser: string) => {
   return {type: Actions_Type.CHANGE_FOLLOW_USER, idUser} as const
}

export const getUsersActionCreate = (items: Array<userType>) => {
   return {type: Actions_Type.GET_USERS, items} as const
}
