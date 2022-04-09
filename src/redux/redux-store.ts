import {combineReducers, createStore} from "redux";
import {accountPageReducer} from "./reducer/accountPage-reducer/accountPage-reducer";
import {communicationPageReducer} from "./reducer/communicationPage-reducer/communicationPage-reducer";
import {usersPageReducer} from "./reducer/usersPageReducer/usersPageReducer";

export type stateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   accountPage: accountPageReducer,
   communicationPage: communicationPageReducer,
   usersPage: usersPageReducer
})

export const store = createStore(rootReducer)
