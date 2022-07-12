import {v1} from "uuid";
import {Actions_Type} from "../Actions-Type";
import {communicationActionType} from "./communication-actions/communication-actions-type";

const inisionalState = {
   dialogs: [
      {id: v1(), name: 'Sergey'}
   ],
   messages: [],
}

export const communicationReducer = (state: communicationPageType = inisionalState, action: communicationActionType): communicationPageType => {
   switch (action.type) {
      case Actions_Type.ADD_MESSAGE:
         return {...state, messages: [...state.messages, action.newMessage]}

      default:
         return state
   }
}

export type communicationPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessageType>
}
export type DialogsType = {
   id: string,
   name: string
}
export type MessageType = {
   id: string
   text: string
};
