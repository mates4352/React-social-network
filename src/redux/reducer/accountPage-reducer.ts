import {v1} from "uuid";
import {actionType} from "../store";

type accountPageType = {
   datePost: Array<datePostType>
   valueTextarea: string
   personal: dataPersonalType
};
type datePostType = {
   id: string
   text: string
   time: string
};
type dataPersonalType = {
   id: string
   name: string
   description: string
};
export type changeValueTextareaType = ReturnType<typeof changeValueTextareaActionCreate>
export type addPostType = ReturnType<typeof addPostActionCreate>

const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_TEXTAREA = 'CHANGE-VALUE-TEXTAREA';

const inisionalState: accountPageType = {
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

export const accountPageReducer = (state: accountPageType = inisionalState, action: actionType): accountPageType => {
   switch (action.type) {
      case CHANGE_VALUE_TEXTAREA:
         state.valueTextarea = action.text;
         return state
      case ADD_POST:
         const newPost = {id: v1(), text: state.valueTextarea, time: "2022-01-10"};
         state.datePost.push(newPost);
         state.valueTextarea = '';
         return state
      default:
         return state
   }
}

export const addPostActionCreate = () => (
    {type: ADD_POST} as const
)

export const changeValueTextareaActionCreate = (text: string) => (
    {type: CHANGE_VALUE_TEXTAREA, text: text} as const
)
