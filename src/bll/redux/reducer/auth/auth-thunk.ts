import {authAPI, authDataFormLoginType} from "../../../../api/auth/authAPI";
import {AppThunkType} from "../../redux-store";
import {changeAuthData, getCaptchaAuthData, logoutAuthData, updateAuthData} from "./auth-actions/auth-actions";

export const getMeProfile = (): AppThunkType => dispatch => {
   authAPI.getMeProfile().then(data => {
      if(data.resultCode === 0) {
         dispatch(changeAuthData(data));
      }
   })
}

export const getCaptcha = (): AppThunkType => dispatch => {
   authAPI.getCaptcha().then(data => {
      dispatch(getCaptchaAuthData(data));
      console.log('111');
   })
}

export const signIn = (dataFormLogin: authDataFormLoginType): AppThunkType => dispatch => {
   authAPI.login(dataFormLogin).then(data => {
      if(data.resultCode === 0) {
         dispatch(updateAuthData(data));
      } else if (data.resultCode === 10) {
         console.log('data.resultCode', data.resultCode);
         dispatch(getCaptcha());
      }
   })
}

export const logout = (): AppThunkType => dispatch => {
   authAPI.logout().then(data => {
      if(data.resultCode === 0) {
         dispatch(logoutAuthData({...data, resultCode: 1}));
      }
   })
}

