import {applyMiddleware, combineReducers, createStore} from "redux";
import {accountReducer} from "./reducer/account/account-reducer";
import {communicationReducer} from "./reducer/communication/communication-reducer";
import {usersReducer} from "./reducer/users/users-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {authReducer} from "./reducer/auth/auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {userActionType} from "./reducer/users/user-actions/users-actions-type";
import {
   communicationActionType
} from "./reducer/communication/communication-actions/communication-actions-type";
import {
   accountActionType
} from "./reducer/account/account-actions/account-actions-type";
import {authActionType} from "./reducer/auth/auth-actions/auth-actions-type";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
   accountPage: accountReducer,
   communicationPage: communicationReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,

})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type appStoreType = ReturnType<typeof rootReducer>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, appStoreType, unknown, appActionType>
type appActionType = accountActionType | authActionType | communicationActionType | userActionType;
