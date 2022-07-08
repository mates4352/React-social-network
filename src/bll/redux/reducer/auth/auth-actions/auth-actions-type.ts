import {changeAuthData} from "./auth-actions";

export type authActionType = changeAuthDataType;
type changeAuthDataType = ReturnType<typeof changeAuthData>
