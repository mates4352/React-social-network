import {accountAPI} from "../../../../api/account/accountAPI";
import {getProfile, getProfileStatus, updateProfileStatus} from "./account-actions/account-actions";
import {AppThunkType} from "../../redux-store";


export const getAccount = (userId: string): AppThunkType => dispatch => {
   accountAPI.getAccount(userId).then(data => {
      dispatch(getProfile(data))
      dispatch(getStatus(Number(userId)))
   })
}

export const getStatus = (userId: number): AppThunkType => dispatch => {
   accountAPI.getStatus(userId).then(status => {
      dispatch(getProfileStatus(status))
   })
}

export const updateStatus = (userId: number, status: string): AppThunkType => dispatch => {
   accountAPI.updateStatus(status).then((res) => {
      if (res.resultCode === 0){
         dispatch(updateProfileStatus(status))
         dispatch(getStatus(userId))
      }
   })
}



