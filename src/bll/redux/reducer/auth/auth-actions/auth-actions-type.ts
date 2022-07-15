import {changeAuthData, logoutAuthData, updateAuthData} from "./auth-actions";

export type authActionType = changeAuthDataType | updateAuthDataType | logoutAuthDataType;
type changeAuthDataType = ReturnType<typeof changeAuthData>
type updateAuthDataType = ReturnType<typeof updateAuthData>
type logoutAuthDataType = ReturnType<typeof logoutAuthData>
