import {Actions_Type} from "../../Actions-Type";
import {authType} from "../auth-reducer";
import {authApiType} from "../../../../../api/auth/authAPI";

export const changeAuthData = (data: authType) => {
   const {id, login, email} = data.data;
   const resultCode = data.resultCode
   return {type: Actions_Type.SET_AUTH_DATA, data: {id, login, email}, resultCode} as const
}

export const updateAuthData = (data: authApiType<{userId: number} | {}>) => {
   const {resultCode, messages} = data
   return {type: Actions_Type.UPDATE_AUTH_DATA, data: {resultCode, messages}} as const
}
