import {Actions_Type} from "../Actions-Type";
import {profileApiType} from "../../../../api/account/accountAPI";
import {accountActionType} from "./account-actions/account-actions-type";

export const accountReducer = (state: accountPageType = inisialState, action: accountActionType): accountPageType => {
   switch (action.type) {
      case Actions_Type.ADD_POST:
         return {...state, datePost: [...state.datePost, action.post]}

      case Actions_Type.GET_PROFILE:
         return {...state, profile: action.profile}

      case Actions_Type.GET_STATUS:
         return {...state, status: action.status}

      default:
         return state
   }
}

export type accountPageType = {
   datePost: Array<datePostType>
   profile: null | profileType
   status: string
}

export type profileType = profileApiType;

export type datePostType = {
   id: string
   text: string
   time: string
};

const inisialState = {
   datePost: [],
   profile: null,
   status: ''
}
