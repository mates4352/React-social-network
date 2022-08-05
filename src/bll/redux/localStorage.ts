export const loadState = () => {
   try {
      const serializedState = localStorage.getItem('state');
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
   } catch (err) {
      return undefined;
   }
};

export const saveState = <T>(state: T) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
   } catch {
   }
};
