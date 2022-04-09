import {v1} from "uuid";
import {addTextMessageType, changeValueMessageType} from "../communicationPage-reducer/communicationPage-reducer";

export type accountPageType = {
   datePost: Array<datePostType>
   valueTextarea: string
   personal: dataPersonalType
};
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

export type changeValueTextareaType = ReturnType<typeof changeValueTextareaActionCreate>
export type addPostType = ReturnType<typeof addPostActionCreate>
type actionType = changeValueTextareaType | addPostType | addTextMessageType | changeValueMessageType

const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_TEXTAREA = 'CHANGE-VALUE-TEXTAREA';

const inisialState: accountPageType = {
   datePost: [
      {
         id: v1(),
         text: "lorem lorem lorem lorem lorem",
         time: "2022-01-10",
      },

      {
         id: v1(),
         text: "text",
         time: "2022-01-10",
      }
   ],
   valueTextarea: '',
   personal: {id: v1(), name: "Sergey", description: "description"},
}

export const accountPageReducer = (state: accountPageType = inisialState, action: actionType): accountPageType => {
   switch (action.type) {
      case CHANGE_VALUE_TEXTAREA:
         return {...state, valueTextarea: action.text}
      case ADD_POST:
         const newPost = {id: v1(), text: state.valueTextarea, time: "2022-01-10"};
         if(state.valueTextarea.trim() !== '') return {...state, datePost: [...state.datePost, newPost], valueTextarea: ''}
         return state
      default:
         return state
   }
}

export const addPostActionCreate = () => (
    {type: ADD_POST} as const
)

export const changeValueTextareaActionCreate = (text: string) => (
    {type: CHANGE_VALUE_TEXTAREA, text} as const
)
