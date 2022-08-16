import {appStoreType} from "../redux-store";

export const getAccountUserIdSelector = (state: appStoreType) => state.auth.data.id;
export const getAccountDataPostSelector = (state: appStoreType) => state.accountPage.datePost;
export const getAccountProfileSelector = (state: appStoreType) => state.accountPage.profile;
export const getAccountStatusSelector = (state: appStoreType) => state.accountPage.status;