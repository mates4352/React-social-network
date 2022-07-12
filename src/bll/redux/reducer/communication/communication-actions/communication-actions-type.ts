import {addTextMessage} from "./communication-actions";


export type communicationActionType = addTextMessageType;
export type addTextMessageType = ReturnType<typeof addTextMessage>
