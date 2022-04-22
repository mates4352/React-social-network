import {addTextMessageType, changeValueMessageType} from "../communicationPage-reducer/communicationPage-reducer";
import {addPostType, changeValueTextareaType} from "../accountPage-reducer/accountPage-reducer";

const CHANGE_FOLLOW_USER = 'CHANGE-FOLLOW-USER'
const GET_USERS = 'GET_USERS'

export type userPageType = {
   items: Array<userType>
   totalCount: null | number
   error: null | string

}
export type userType = {
   id: string
   follow: boolean
   name: string
   photos: {
      "small": null | string
      "large": null | string
   }
   status: null | boolean
}

export type changeFollowUserType = ReturnType<typeof changeFollowUserActionCreate>
export type getUsersType = ReturnType<typeof getUsersActionCreate>
type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType | changeFollowUserType | getUsersType

const inisialState: userPageType = {
   items: [],
   totalCount: null,
   error: null,
}

export const usersPageReducer = (state: userPageType = inisialState, action: actionType): userPageType => {
   switch (action.type) {
      case CHANGE_FOLLOW_USER:
         return {...state, items: state.items.map(item => item.id === action.idUser ? {...item, follow: !item.follow} : item)}
      case GET_USERS:
         return {...state, items: action.items}
      default:
         return state
   }
}

export const changeFollowUserActionCreate = (idUser: string) => {
   return {type: CHANGE_FOLLOW_USER, idUser} as const
}

export const getUsersActionCreate = (items: Array<userType>) => {
   return {type: GET_USERS, items} as const
}
