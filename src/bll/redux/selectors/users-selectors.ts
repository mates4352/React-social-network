import {appStoreType} from "../redux-store";

export const getUsersItemsSelector = (state: appStoreType) => state.usersPage.items;
export const getUsersPageSizeSelector = (state: appStoreType) => state.usersPage.pageSize;
export const getUsersTotalCountSelector = (state: appStoreType) => state.usersPage.totalCount;
export const getUsersCurrentPageSelector = (state: appStoreType) => state.usersPage.currentPage;
export const getUsersIsPreloaderSelector = (state: appStoreType) => state.usersPage.isPreloader;
export const getUsersIsDisabledSelector = (state: appStoreType) => state.usersPage.isDisabled;