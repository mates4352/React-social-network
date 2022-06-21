import {appStoreType} from "../redux/redux-store";

export const saveState = (state: appStoreType) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
   } catch {
   }
};
