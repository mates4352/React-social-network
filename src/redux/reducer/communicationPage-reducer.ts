import {v1} from "uuid";
import {actionType, communicationDateType} from "../store";

export type addTextMessageType = ReturnType<typeof addTextMessageActionCreate>
export type changeTextMessageType = ReturnType<typeof changeTextMessageActionCreate>

const ADD_VALUE_MESSAGE = 'ADD-VALUE-MESSAGE';
const CHANGE_VALUE_MESSAGE = 'CHANGE-VALUE-MESSAGE';

export const communicationPageReducer = (state: communicationDateType, action: actionType): communicationDateType => {
   switch (action.type) {
      case CHANGE_VALUE_MESSAGE :
         state.textMessage = action.text;
         return state
      case ADD_VALUE_MESSAGE:
         const message = state.textMessage;
         state.messages.push({id: v1(), text: message})
         state.textMessage = ''
         return state
      default:
         return state
   }
}

export const addTextMessageActionCreate = () => ({type: ADD_VALUE_MESSAGE} as const)
export const changeTextMessageActionCreate = (text: string) => (
    {type: CHANGE_VALUE_MESSAGE, text: text} as const
)
