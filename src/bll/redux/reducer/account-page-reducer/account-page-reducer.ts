import {v1} from "uuid";
import {Actions_Type} from "../Actions-Type";
import {profileApiType} from "../../../../api/account-api/accountAPI";
import {accountActionType} from "./account-page-create-actions/account-page-create-actions-type";

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

export type accountPageType = {
   datePost: Array<datePostType>
   profile: null | profileType
   valueTextarea: string
}

export type datePostType = {
   id: string
   text: string
   time: string
};
export type profileType = profileApiType

const inisialState = {
   datePost: [],
   profile: null,
   valueTextarea: '',
}
