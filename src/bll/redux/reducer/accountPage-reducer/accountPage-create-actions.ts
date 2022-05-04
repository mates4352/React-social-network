import {Actions_Type} from "../Actions-Type";

export type changeValueTextareaType = ReturnType<typeof changeValueTextareaActionCreate>
export type addPostType = ReturnType<typeof addPostActionCreate>
export type accountActionType = changeValueTextareaType | addPostType;

export const addPostActionCreate = () => (
    {type: Actions_Type.ADD_POST} as const
)

export const changeValueTextareaActionCreate = (text: string) => (
    {type: Actions_Type.CHANGE_VALUE_TEXTAREA, text} as const
)
