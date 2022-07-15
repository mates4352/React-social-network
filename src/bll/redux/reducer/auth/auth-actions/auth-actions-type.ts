import {changeAuthData, getCaptchaAuthData, logoutAuthData, updateAuthData} from "./auth-actions";

export type authActionType = changeAuthDataType | updateAuthDataType | logoutAuthDataType | getCaptchaAuthDataType;
type changeAuthDataType = ReturnType<typeof changeAuthData>
type getCaptchaAuthDataType = ReturnType<typeof getCaptchaAuthData>
type updateAuthDataType = ReturnType<typeof updateAuthData>
type logoutAuthDataType = ReturnType<typeof logoutAuthData>
