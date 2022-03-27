import {v1} from "uuid";
import {actionType} from "../store";
type communicationPageType = {
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
export type changeTextMessageType = ReturnType<typeof changeTextMessageActionCreate>

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
         state.textMessage = action.text;
         return state
      case ADD_VALUE_MESSAGE:
         state.messages.push({id: v1(), text: state.textMessage})
         state.textMessage = ''
         return state
      default:
         return state
   }
}

export const addTextMessageActionCreate = () => (
    {type: ADD_VALUE_MESSAGE} as const
)
export const changeTextMessageActionCreate = (text: string) => (
    {type: CHANGE_VALUE_MESSAGE, text: text} as const
)
