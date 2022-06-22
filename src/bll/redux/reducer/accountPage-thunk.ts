import {accountAPI} from "../../../api/account/accountAPI";
import {getProfile} from "./accountPage-reducer/accountPage-create-actions";
import {AppThunkType} from "../redux-store";


export const getAccount = (userId: string): AppThunkType => dispatch => {
   accountAPI.getAccount(userId).then(data => {
      dispatch(getProfile(data))
   })
}
