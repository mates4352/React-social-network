import {v1} from "uuid";
import {Actions_Type} from "../Actions-Type";
import {communicationActionType} from "./communicationPage-create-actions";

export type communicationPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessageType>
   textMessage: string
}
export type DialogsType = {
   id: string,
   name: string
}
export type MessageType = {
   id: string
   text: string
};

const inisionalState = {
   dialogs: [
      {id: v1(), name: 'Sergey'}
   ],
   messages: [],
   textMessage: ''
}

export const communicationPageReducer = (state: communicationPageType = inisionalState, action: communicationActionType): communicationPageType => {
   switch (action.type) {
      case Actions_Type.CHANGE_VALUE_MESSAGE:
         return {...state, textMessage: action.text}

      case Actions_Type.ADD_MESSAGE:
         const newMessage = {id: v1(), text: state.textMessage}
         if(state.textMessage.trim() !== '' && action.key === 'Enter') return {...state, messages: [...state.messages, newMessage], textMessage: ''}
         return state

      default:
         return state
   }
}
