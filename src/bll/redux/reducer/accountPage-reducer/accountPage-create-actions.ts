import {Actions_Type} from "../Actions-Type";

export type changeValueTextareaType = ReturnType<typeof changeValueTextarea>
export type addPostType = ReturnType<typeof addPost>
export type accountActionType = changeValueTextareaType | addPostType;

export const addPost = () => (
    {type: Actions_Type.ADD_POST} as const
)

export const changeValueTextarea = (text: string) => (
    {type: Actions_Type.CHANGE_VALUE_TEXTAREA, text} as const
)
