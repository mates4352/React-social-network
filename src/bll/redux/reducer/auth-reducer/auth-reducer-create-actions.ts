import {Actions_Type} from "../Actions-Type";

export const changeAuthData = (id: number, login: string, email: string) => {
   return {type: Actions_Type.SET_AUTH_DATA, data: {id, login, email}} as const
}

export type authActionType = changeAuthDataType;
type changeAuthDataType = ReturnType<typeof changeAuthData>
