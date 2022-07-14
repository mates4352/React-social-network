import {authAPI, authDataFormLoginType} from "../../../../api/auth/authAPI";
import {AppThunkType} from "../../redux-store";
import {changeAuthData, updateAuthData} from "./auth-actions/auth-actions";

export const getMeProfile = (): AppThunkType => dispatch => {
   authAPI.getMeProfile().then(data => {
      if(data.resultCode === 0) {
         dispatch(changeAuthData(data));
      }
   })
}

export const signIn = (dataFormLogin: authDataFormLoginType): AppThunkType => dispatch => {
   authAPI.login(dataFormLogin).then(data => {
      if(data.resultCode === 0) {
         dispatch(updateAuthData(data));
      }
   })
}

export const logout = (): AppThunkType => dispatch => {
   authAPI.logout().then(data => {
      if(data.resultCode === 0) {
         dispatch(updateAuthData({...data, resultCode: 1}));
      }
   })
}

