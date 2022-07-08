import {Actions_Type} from "../../Actions-Type";
import {authType} from "../auth-reducer";

export const changeAuthData = (data: authType) => {
   const {id, login, email} = data.data;
   const resultCode = data.resultCode
   return {type: Actions_Type.SET_AUTH_DATA, data: {id, login, email}, resultCode} as const
}
