import {Actions_Type} from "../Actions-Type";
import {authActionType} from "./auth-reducer-create-actions";

export type authType = {
   data: authData
   messages:[]
   fieldsErrors:[]
   resultCode: null | number
}

export type authData = {
   id: null | number,
   login: null | string,
   email: null | string
}

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
      case Actions_Type.CHANGE_AUTH_DATA:
         return {...state, data: {...action.data}, resultCode: 1}

      default:
         return state
   }
}
