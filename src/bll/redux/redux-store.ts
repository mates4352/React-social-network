import {applyMiddleware, combineReducers, createStore} from "redux";
import {accountPageReducer} from "./reducer/accountPage-reducer/accountPage-reducer";
import {communicationPageReducer} from "./reducer/communicationPage-reducer/communicationPage-reducer";
import {usersPageReducer} from "./reducer/usersPageReducer/usersPageReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {saveState} from "../localStorage/saveState";
import {loadState} from "../localStorage/loadState";
import {authReducer} from "./reducer/auth-reducer/auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {userActionType} from "./reducer/usersPageReducer/usersPageReducer-create-actions";
import {accountActionType} from "./reducer/accountPage-reducer/accountPage-create-actions";
import {authActionType} from "./reducer/auth-reducer/auth-reducer-create-actions";
import {communicationActionType} from "./reducer/communicationPage-reducer/communicationPage-create-actions";

export type appStoreType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   accountPage: accountPageReducer,
   communicationPage: communicationPageReducer,
   usersPage: usersPageReducer,
   auth: authReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, appStoreType, unknown, appActionType>

type appActionType = accountActionType | authActionType | communicationActionType | userActionType;
// loadState(),
// store.subscribe(() => {
//    saveState(store.getState());
// })
