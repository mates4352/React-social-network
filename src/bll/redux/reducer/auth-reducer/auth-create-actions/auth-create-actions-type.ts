import {changeAuthData} from "./auth-create-actions";

export type authActionType = changeAuthDataType;
type changeAuthDataType = ReturnType<typeof changeAuthData>
