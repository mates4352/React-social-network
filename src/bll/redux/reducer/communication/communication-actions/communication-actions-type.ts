import {addTextMessage, changeValueMessage} from "./communication-actions";


export type communicationActionType = addTextMessageType | changeValueMessageType;
export type addTextMessageType = ReturnType<typeof addTextMessage>
export type changeValueMessageType = ReturnType<typeof changeValueMessage>