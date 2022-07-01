import {Actions_Type} from "../Actions-Type";
import {userPageApiType} from "../../../../api/user-page-api/usersAPI";
import {userActionType} from "./user-page-create-actions/users-page-create-actions-type";

const inisialState: userPageType = {
   items: [],
   pageSize: 5,
   totalCount: 0,
   currentPage: 1,
   error: null,
   isPreloader: true,
   isDisabled: [],
}

export const usersPageReducer = (state: userPageType = inisialState, action: userActionType): userPageType => {
   switch (action.type) {
      case Actions_Type.CHANGE_FOLLOW_USER:
         return {...state, items: state.items.map(item => item.id === action.idUser ? {...item, followed: !item.followed} : item)}

      case Actions_Type.SET_USERS:
         return {...state, items: action.items}

      case Actions_Type.SET_TOTAL_COUNT:
         return {...state, totalCount: action.totalCount}

      case Actions_Type.CHANGE_PAGINATION:
         return {...state, currentPage: action.currentPage}

      case Actions_Type.CHANGE_IS_PRELOADER:
         return {...state, isPreloader: action.isPreloader}

      case Actions_Type.CHANGE_IS_DISABLED:
         return action.isBoolean ?
             {...state, isDisabled: [...state.isDisabled, action.isDisabled]} :
             {...state, isDisabled: state.isDisabled?.filter(item => item !== action.isDisabled)};

      default:
         return state
   }
}

export type userPageType = userPageApiType & {
   pageSize: number
   currentPage: number
   isPreloader: boolean
   isDisabled: Array<string>
}
export type userType = {
   id: string
   followed: boolean
   name: string
   photos: {
      "small": null | string
      "large": null | string
   }
   status: null | boolean
}
