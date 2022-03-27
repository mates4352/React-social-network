import {combineReducers, createStore} from "redux";
import {accountPageReducer} from "./reducer/accountPage-reducer";
import {communicationPageReducer} from "./reducer/communicationPage-reducer";

const reducers = combineReducers({
   accountPage: accountPageReducer,
   communicationPage: communicationPageReducer
})

export const store = createStore(reducers)
