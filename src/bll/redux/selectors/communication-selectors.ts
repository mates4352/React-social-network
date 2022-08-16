import {appStoreType} from "../redux-store";

export const getCommunicationMessages = (state: appStoreType) => state.communicationPage.messages;
export const getCommunicationDialogs = (state: appStoreType) => state.communicationPage.dialogs;