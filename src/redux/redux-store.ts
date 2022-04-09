import {combineReducers, createStore} from "redux";
import {accountPageReducer} from "./reducer/accountPage-reducer/accountPage-reducer";
import {communicationPageReducer} from "./reducer/communicationPage-reducer/communicationPage-reducer";

export type stateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
   accountPage: accountPageReducer,
   communicationPage: communicationPageReducer
})

export const store = createStore(rootReducer)
