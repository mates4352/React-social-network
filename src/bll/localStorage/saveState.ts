import {stateType} from "../redux/redux-store";

export const saveState = (state: stateType) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
   } catch {
   }
};
