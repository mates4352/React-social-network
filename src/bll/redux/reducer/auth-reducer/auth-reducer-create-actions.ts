import {Actions_Type} from "../Actions-Type";

export const changeAuthData = (resultCode: number, id: number, login: string, email: string) => {
   return {type: Actions_Type.SET_AUTH_DATA, data: {resultCode, id, login, email}} as const
}

export type authActionType = changeAuthDataType;
type changeAuthDataType = ReturnType<typeof changeAuthData>
