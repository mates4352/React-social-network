import {v1} from "uuid";
import {addPostType, changeValueTextareaType} from "../accountPage-reducer/accountPage-reducer";

export type communicationPageType = typeof inisionalState;
export type DialogsType = {
   id: string,
   name: string
}
export type MessageType = {
   id: string
   text: string
};
export type addTextMessageType = ReturnType<typeof addTextMessageActionCreate>
export type changeValueMessageType = ReturnType<typeof changeValueMessageActionCreate>
type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType

const ADD_VALUE_MESSAGE = 'ADD-VALUE-MESSAGE';
const CHANGE_VALUE_MESSAGE = 'CHANGE-VALUE-MESSAGE';

const inisionalState = {
   dialogs: [
      {id: v1(), name: "Sergey0"},
      {id: v1(), name: "Sergey1"},
      {id: v1(), name: "Sergey2"},
      {id: v1(), name: "Sergey3"},
      {id: v1(), name: "Sergey4"},
   ],

   messages: [
      {id: v1(), text: "Hello"},
      {id: v1(), text: "Bay"},
      {id: v1(), text: "Hello"},
      {id: v1(), text: "Bay"},
      {id: v1(), text: "Hello"},
      {id: v1(), text: "Bay"},
      {id: v1(), text: "Hello"},
      {id: v1(), text: "Bay"},
      {id: v1(), text: "Hello"},
   ],
   textMessage: ''
}

export const communicationPageReducer = (state: communicationPageType = inisionalState, action: actionType): communicationPageType => {
   switch (action.type) {
      case CHANGE_VALUE_MESSAGE :
         return {...state, textMessage: action.text}
      case ADD_VALUE_MESSAGE:
         const newMessage = {id: v1(), text: state.textMessage}
         if(state.textMessage.trim() !== '' && action.key === 'Enter') return {...state, messages: [...state.messages, newMessage], textMessage: ''}
         return state
      default:
         return state
   }
}

export const addTextMessageActionCreate = (key: string) => (
    {type: ADD_VALUE_MESSAGE, key} as const
)
export const changeValueMessageActionCreate = (text: string) => (
    {type: CHANGE_VALUE_MESSAGE, text: text} as const
)
