import {combineReducers, createStore} from "redux";
import {accountPageReducer} from "./reducer/accountPage-reducer/accountPage-reducer";
import {communicationPageReducer} from "./reducer/communicationPage-reducer/communicationPage-reducer";
import {usersPageReducer} from "./reducer/usersPageReducer/usersPageReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {saveState} from "../localStorage/saveState";
import {loadState} from "../localStorage/loadState";
import {authReducer} from "./reducer/auth-reducer/auth-reducer";

export type stateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   accountPage: accountPageReducer,
   communicationPage: communicationPageReducer,
   usersPage: usersPageReducer,
   auth: authReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
// loadState(),
// store.subscribe(() => {
//    saveState(store.getState());
// })
