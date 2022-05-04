import {Actions_Type} from "../Actions-Type";

export type addTextMessageType = ReturnType<typeof addTextMessageActionCreate>
export type changeValueMessageType = ReturnType<typeof changeValueMessageActionCreate>
export type communicationActionType = addTextMessageType | changeValueMessageType;

export const addTextMessageActionCreate = (key: string) => (
    {type: Actions_Type.ADD_VALUE_MESSAGE, key} as const
)
export const changeValueMessageActionCreate = (text: string) => (
    {type: Actions_Type.CHANGE_VALUE_MESSAGE, text: text} as const
)
