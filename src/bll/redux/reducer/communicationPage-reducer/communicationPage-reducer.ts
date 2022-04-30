import {v1} from "uuid";
import {addPostType, changeValueTextareaType} from "../accountPage-reducer/accountPage-create-actions";
import {Actions_Type} from "../Actions-Type";
import {addTextMessageType, changeValueMessageType} from "./communicationPage-create-actions";
import {getUsersType} from "../usersPageReducer/usersPageReducer-create-actions";

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
type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType | getUsersType

const inisionalState = {
   dialogs: [
      {id: v1(), name: 'Sergey'}
   ],
   messages: [],
   textMessage: ''
}

export const communicationPageReducer = (state: communicationPageType = inisionalState, action: actionType): communicationPageType => {
   switch (action.type) {
      case Actions_Type.CHANGE_VALUE_MESSAGE:
         return {...state, textMessage: action.text}

      case Actions_Type.ADD_VALUE_MESSAGE:
         const newMessage = {id: v1(), text: state.textMessage}
         if(state.textMessage.trim() !== '' && action.key === 'Enter') return {...state, messages: [...state.messages, newMessage], textMessage: ''}
         return state

      default:
         return state
   }
}
