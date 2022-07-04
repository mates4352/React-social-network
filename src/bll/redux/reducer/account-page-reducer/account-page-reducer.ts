import {Actions_Type} from "../Actions-Type";
import {profileApiType} from "../../../../api/account-api/accountAPI";
import {accountActionType} from "./account-page-create-actions/account-page-create-actions-type";

export const accountPageReducer = (state: accountPageType = inisialState, action: accountActionType): accountPageType => {
   switch (action.type) {
      case Actions_Type.ADD_POST:
         return {...state, datePost: [...state.datePost, action.post]}

      case Actions_Type.GET_PROFILE:
         return {...state, profile: action.profile}

      default:
         return state
   }
}

export type profileType = profileApiType
export type accountPageType = {
   datePost: Array<datePostType>
   profile: null | profileType
}

export type datePostType = {
   id: string
   text: string
   time: string
};

const inisialState = {
   datePost: [],
   profile: null,
}
