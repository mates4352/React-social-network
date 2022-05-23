import {Actions_Type} from "../Actions-Type";

export type addTextMessageType = ReturnType<typeof addTextMessage>
export type changeValueMessageType = ReturnType<typeof changeValueMessage>
export type communicationActionType = addTextMessageType | changeValueMessageType;

export const addTextMessage = (key: string) => (
    {type: Actions_Type.ADD_MESSAGE, key} as const
)
export const changeValueMessage = (text: string) => (
    {type: Actions_Type.CHANGE_VALUE_MESSAGE, text: text} as const
)
