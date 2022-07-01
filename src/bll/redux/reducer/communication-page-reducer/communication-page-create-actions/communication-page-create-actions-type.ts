import {addTextMessage, changeValueMessage} from "./communication-page-create-actions";


export type communicationActionType = addTextMessageType | changeValueMessageType;
export type addTextMessageType = ReturnType<typeof addTextMessage>
export type changeValueMessageType = ReturnType<typeof changeValueMessage>
