import {v1} from "uuid";
import {addTextMessageType, changeValueMessageType} from "../communicationPage-reducer/communicationPage-reducer";
import {addPostType, changeValueTextareaType} from "../accountPage-reducer/accountPage-reducer";

const CHANGE_FOLLOW_USER = 'CHANGE-FOLLOW-USER'

export type userPageType = {
   users: Array<user>
}
export type user = {
   id: string
   follow: boolean
   name: string
   location: location
}
export type location = {
   city: string
   country: string
}

export type changeFollowUserType = ReturnType<typeof changeFollowUserActionCreate>
type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType | changeFollowUserType

const inisialState: userPageType = {
   users: [
      {id: v1(), follow: true, name: "Sergey", location: {city: 'Cerov', country: 'Russian'}},
      {id: v1(), follow: false, name: "Sergey", location: {city: 'Cerov', country: 'Russian'}},
      {id: v1(), follow: true, name: "Sergey", location: {city: 'Cerov', country: 'Russian'}}
   ]
}

export const usersPageReducer = (state: userPageType = inisialState, action: actionType): userPageType => {
   switch (action.type) {
      case CHANGE_FOLLOW_USER:
         return {...state, users: state.users.map(item => item.id === action.idUser ? {...item, follow: !item.follow} : item)}
      default:
         return state
   }
}

export const changeFollowUserActionCreate = (idUser: string) => {
   return {type: CHANGE_FOLLOW_USER, idUser} as const
}
