import {authAPI} from "../../../../api/auth/authAPI";
import {AppThunkType} from "../../redux-store";
import {changeAuthData} from "./auth-actions/auth-actions";

export const getMeProfile = (): AppThunkType => dispatch => {
   authAPI.getMeProfile().then(data => {
      dispatch(changeAuthData(data));
   })
}

