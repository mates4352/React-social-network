import {v1} from "uuid";
import {Actions_Type} from "../Actions-Type";
import {accountActionType} from "./accountPage-create-actions";

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

const inisialState = {
   datePost: [],
   valueTextarea: '',
   personal: {id: v1(), name: "Sergey", description: "description"}
}

export const accountPageReducer = (state: accountPageType = inisialState, action: accountActionType): accountPageType => {
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
