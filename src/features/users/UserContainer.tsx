import * as React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
   changeFollowUserActionCreate,
   getUsersActionCreate, userPageType,
   userType
} from "../../redux/reducer/usersPageReducer/usersPageReducer";
import axios, {AxiosResponse} from "axios";

type maxStateToPropsType = {
   users: Array<userType>
}
type maxDispatchToPropsType = {
   changeFollowUser: (idUser: string) => void
   getUsers: () => void
}
export type userPropsType = maxStateToPropsType & maxDispatchToPropsType;

const maxStateToProps = (state: stateType): maxStateToPropsType => {
   return {
      users: state.usersPage.items,
   }
}
const maxDispatchToProps = (dispatch: Dispatch): maxDispatchToPropsType => {
   return {
      changeFollowUser: (idUser) => {
         dispatch(changeFollowUserActionCreate(idUser))
      },
      getUsers: () => {
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then((result: AxiosResponse<userPageType>) => {
            dispatch(getUsersActionCreate(result.data.items))
         })
      }
   }
}

export const UserContainer = connect(maxStateToProps, maxDispatchToProps)(User)
