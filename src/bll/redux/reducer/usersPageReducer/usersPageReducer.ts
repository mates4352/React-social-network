import {Actions_Type} from "../Actions-Type";
import {userActionType} from "./usersPageReducer-create-actions";

export type userPageType = {
   items: Array<userType>
   pageSize: number
   totalCount: number
   currentPage: number
   error: null | string
   isPreloader?: boolean

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

const inisialState: userPageType = {
   items: [],
   pageSize: 5,
   totalCount: 0,
   currentPage: 1,
   error: null,
   isPreloader: true,
}

export const usersPageReducer = (state: userPageType = inisialState, action: userActionType): userPageType => {
   switch (action.type) {
      case Actions_Type.CHANGE_FOLLOW_USER:
         return {...state, items: state.items.map(item => item.id === action.idUser ? {...item, follow: !item.follow} : item)}

      case Actions_Type.GET_USERS:
         return {...state, items: action.items}

      case Actions_Type.GET_TOTAL_COUNT:
         return {...state, totalCount: action.totalCount}

      case Actions_Type.CHANGE_PAGINATION:
         return {...state, currentPage: action.currentPage}

      case Actions_Type.CHANGE_IS_PRELOADER:
         return {...state, isPreloader: action.isPreloader}

      default:
         return state
   }
}
