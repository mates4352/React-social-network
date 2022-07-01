import {accountAPI} from "../../../../api/account-api/accountAPI";
import {getProfile} from "./account-page-create-actions/account-page-create-actions";
import {AppThunkType} from "../../redux-store";


export const getAccount = (userId: string): AppThunkType => dispatch => {
   accountAPI.getAccount(userId).then(data => {
      dispatch(getProfile(data))
   })
}
