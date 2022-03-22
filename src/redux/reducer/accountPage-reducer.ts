import {v1} from "uuid";
import {accountPageType, actionType} from "../store";
export type changeValueTextareaType = ReturnType<typeof changeValueTextareaActionCreate>
export type addPostType = ReturnType<typeof addPostActionCreate>

const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_TEXTAREA = 'CHANGE-VALUE-TEXTAREA';

export const accountPageReducer = (state: accountPageType, action: actionType): accountPageType => {
   switch (action.type) {
      case CHANGE_VALUE_TEXTAREA:
          state.valueTextarea = action.text;
      return state
      case ADD_POST:
         let post = state.datePost;
         const newPost = {id: v1(), text: state.valueTextarea, time: "2022-01-10"};
         post.push(newPost);
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
