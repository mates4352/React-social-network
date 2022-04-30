import {v1} from "uuid";
import {Actions_Type} from "../Actions-Type";
import {addPostType, changeValueTextareaType} from "./accountPage-create-actions";
import {
   addTextMessageType,
   changeValueMessageType
} from "../communicationPage-reducer/communicationPage-create-actions";
import {getUsersType} from "../usersPageReducer/usersPageReducer-create-actions";

export type accountPageType = {
   datePost: Array<datePostType>
   valueTextarea: string
   personal: dataPersonalType
}
export type datePostType = {
   id: string
   text: string
   time: string
};
export type dataPersonalType = {
   id: string
   name: string
   description: string
};
type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType | getUsersType

const inisialState = {
   datePost: [],
   valueTextarea: '',
   personal: {id: v1(), name: "Sergey", description: "description"}
}

export const accountPageReducer = (state: accountPageType = inisialState, action: actionType): accountPageType => {
   switch (action.type) {
      case Actions_Type.CHANGE_VALUE_TEXTAREA:
         return {...state, valueTextarea: action.text}

      case Actions_Type.ADD_POST:
         const newPost = {id: v1(), text: state.valueTextarea, time: "2022-01-10"};
         if(state.valueTextarea.trim() !== '') return {...state, datePost: [...state.datePost, newPost], valueTextarea: ''}
         return state

      default:
         return state
   }
}
