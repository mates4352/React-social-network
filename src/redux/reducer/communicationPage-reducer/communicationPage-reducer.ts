import {v1} from "uuid";
import {actionType} from "../../store";
import {KeyboardEvent} from "react";
export type communicationPageType = {
   dialogs: Array<MessageType>
   messages: Array<DialogsType>
   textMessage: string
}
type DialogsType = {
   id: string,
   text: string
}
type MessageType = {
   id: string
   name: string
};

export type addTextMessageType = ReturnType<typeof addTextMessageActionCreate>
export type changeValueMessageType = ReturnType<typeof changeValueMessageActionCreate>

const ADD_VALUE_MESSAGE = 'ADD-VALUE-MESSAGE';
const CHANGE_VALUE_MESSAGE = 'CHANGE-VALUE-MESSAGE';

const inisionalState: communicationPageType = {
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
