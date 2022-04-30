import {addPostType, changeValueTextareaType} from "../accountPage-reducer/accountPage-create-actions";
import {addTextMessageType,changeValueMessageType} from "../communicationPage-reducer/communicationPage-create-actions";
import {Actions_Type} from "../Actions-Type";
import {changeFollowUserType, getUsersType} from "./usersPageReducer-create-actions";

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
type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType | changeFollowUserType | getUsersType

const inisialState: userPageType = {
   items: [],
   totalCount: null,
   error: null,
}

export const usersPageReducer = (state: userPageType = inisialState, action: actionType): userPageType => {
   switch (action.type) {
      case Actions_Type.CHANGE_FOLLOW_USER:
         return {...state, items: state.items.map(item => item.id === action.idUser ? {...item, follow: !item.follow} : item)}

      case Actions_Type.GET_USERS:
         return {...state, items: action.items}

      default:
         return state
   }
}
