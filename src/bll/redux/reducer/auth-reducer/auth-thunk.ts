import {authAPI} from "../../../../api/auth/authAPI";
import {AppThunkType} from "../../redux-store";
import {changeAuthData} from "./auth-reducer-create-actions";

export const getMeProfile = (): AppThunkType => dispatch => {
   authAPI.getMeProfile().then(data => {
      const {id, login, email} = data.data;
      const {resultCode} = data;
      // @ts-ignore
      dispatch(changeAuthData(resultCode, id, login, email));
   })
}

