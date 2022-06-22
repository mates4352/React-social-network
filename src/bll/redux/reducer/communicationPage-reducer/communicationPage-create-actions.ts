import {Actions_Type} from "../Actions-Type";
import {v1} from "uuid";

export const addTextMessage = (key: string, text: string) => (
    {type: Actions_Type.ADD_MESSAGE, key, newMessage: {id: v1(), text: text}} as const
)
export const changeValueMessage = (text: string) => (
    {type: Actions_Type.CHANGE_VALUE_MESSAGE, text: text} as const
)

export type addTextMessageType = ReturnType<typeof addTextMessage>
export type changeValueMessageType = ReturnType<typeof changeValueMessage>
export type communicationActionType = addTextMessageType | changeValueMessageType;
