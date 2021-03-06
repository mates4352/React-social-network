import {Actions_Type} from "../Actions-Type";
import {authApiType, authDataApiType} from "../../../../api/auth/authAPI";
import {authActionType} from "./auth-actions/auth-actions-type";

const inisialState: authType = {
   data: {
      id: null,
      login: '',
      email: ''
   },
   messages: [],
   fieldsErrors: [],
   resultCode: null,
   captcha: ''
}

export const authReducer = (state: authType = inisialState, action: authActionType): authType => {
   switch (action.type) {
      case Actions_Type.SET_AUTH_DATA:
         return {...state, data: {...action.data}, resultCode: action.resultCode}

      case Actions_Type.GET_CAPTCHA_AUTH_DATA:
         return {...state, captcha: action.data.url}

      case Actions_Type.UPDATE_AUTH_DATA:
         return {...state, ...action.data, data: {...state.data, id: action.userId}}

      case Actions_Type.LOGOUT_AUTH_DATA:
         return {...state, ...action.data}

      default:
         return state
   }
}

export type authType = authApiType<authDataApiType>
