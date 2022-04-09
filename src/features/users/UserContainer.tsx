import * as React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {changeFollowUserActionCreate, userPageType} from "../../redux/reducer/usersPageReducer/usersPageReducer";

type maxStateToPropsType = userPageType
type maxDispatchToPropsType = {
   changeFollowUser: (idUser: string) => void
}
export type userPropsType = maxStateToPropsType & maxDispatchToPropsType;

const maxStateToProps = (state: stateType): maxStateToPropsType => {
   return {
      users: state.usersPage.users
   }
}
const maxDispatchToProps = (dispatch: Dispatch):maxDispatchToPropsType => {
   return {
      changeFollowUser: (idUser) => {
         dispatch(changeFollowUserActionCreate(idUser))
      }
   }
}

export const UserContainer = connect(maxStateToProps, maxDispatchToProps)(User)
