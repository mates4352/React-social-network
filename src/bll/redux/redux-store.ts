import {applyMiddleware, combineReducers, createStore} from "redux";
import {accountPageReducer} from "./reducer/account-page-reducer/account-page-reducer";
import {communicationPageReducer} from "./reducer/communication-page-reducer/communication-page-reducer";
import {usersPageReducer} from "./reducer/users-page-reducer/users-page-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

import {authReducer} from "./reducer/auth-reducer/auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {userActionType} from "./reducer/users-page-reducer/user-page-create-actions/users-page-create-actions-type";
import {
   communicationActionType
} from "./reducer/communication-page-reducer/communication-page-create-actions/communication-page-create-actions-type";
import {
   accountActionType
} from "./reducer/account-page-reducer/account-page-create-actions/account-page-create-actions-type";
import {authActionType} from "./reducer/auth-reducer/auth-create-actions/auth-create-actions-type";

const rootReducer = combineReducers({
   accountPage: accountPageReducer,
   communicationPage: communicationPageReducer,
   usersPage: usersPageReducer,
   auth: authReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type appStoreType = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, appStoreType, unknown, appActionType>
type appActionType = accountActionType | authActionType | communicationActionType | userActionType;
