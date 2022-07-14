import {changeAuthData, updateAuthData} from "./auth-actions";

export type authActionType = changeAuthDataType | updateAuthDataType;
type changeAuthDataType = ReturnType<typeof changeAuthData>
type updateAuthDataType = ReturnType<typeof updateAuthData>
