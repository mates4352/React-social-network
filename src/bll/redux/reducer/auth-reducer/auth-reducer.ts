import {Actions_Type} from "../Actions-Type";
import {authActionType} from "./auth-reducer-create-actions";
import {authApiType} from "../../../../api/auth/authAPI";

const inisialState: authType = {
   data: {
      id: null,
      login: null,
      email: null
   },
   messages: [],
   fieldsErrors: [],
   resultCode: 0
}

export const authReducer = (state: authType = inisialState, action: authActionType): authType => {
   switch (action.type) {
      case Actions_Type.SET_AUTH_DATA:
         return {...state, data: {...action.data}, resultCode: 1}

      default:
         return state
   }
}

export type authType = authApiType
