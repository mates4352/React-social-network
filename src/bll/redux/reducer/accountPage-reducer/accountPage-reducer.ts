import {v1} from "uuid";
import {Actions_Type} from "../Actions-Type";
import {accountActionType} from "./accountPage-create-actions";

export type accountPageType = {
   datePost: Array<datePostType>
   profile: null | profileType
   params?: {id: string}
   valueTextarea: string
}
export type datePostType = {
   id: string
   text: string
   time: string
};
export type profileType = {
   aboutMe: string
   contacts: contactsType
   fullName: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   photos: photosType
   userId: number
}
export type contactsType = {
   github?: null | string
   vk?: null | string
   facebook?: null | string
   instagram?: null | string
   twitter?: null | string
   website?: null | string
   youtube?: null | string
   mainLink?: null | string
}
export type photosType = {
   small: null | string
   large: null | string
}


const inisialState = {
   datePost: [],
   profile: null,
   valueTextarea: '',
}

export const accountPageReducer = (state: accountPageType = inisialState, action: accountActionType): accountPageType => {
   switch (action.type) {
      case Actions_Type.CHANGE_VALUE_TEXTAREA:
         return {...state, valueTextarea: action.text}

      case Actions_Type.ADD_POST:
         const newPost = {id: v1(), text: state.valueTextarea, time: "2022-01-10"};
         if(state.valueTextarea.trim() !== '') return {...state, datePost: [...state.datePost, newPost], valueTextarea: ''}
         return state

      case Actions_Type.GET_PROFILE:
         return {...state, profile: action.profile}

      default:
         return state
   }
}
