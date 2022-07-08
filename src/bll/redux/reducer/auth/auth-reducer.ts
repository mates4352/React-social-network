import {Actions_Type} from "../Actions-Type";
import {authApiType} from "../../../../api/auth/authAPI";
import {authActionType} from "./auth-actions/auth-actions-type";

const inisialState: authType = {
   data: {
      id: null,
      login: '',
      email: ''
   },
   messages: [],
   fieldsErrors: [],
   resultCode: null
}

export const authReducer = (state: authType = inisialState, action: authActionType): authType => {
   switch (action.type) {
      case Actions_Type.SET_AUTH_DATA:
         return {...state, data: {...action.data}, resultCode: action.resultCode}

      default:
         return state
   }
}

export type authType = authApiType
