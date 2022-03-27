import React, {ChangeEvent} from 'react';
import {
   addPostActionCreate,
   changeValueTextareaActionCreate,
} from "../../redux/reducer/accountPage-reducer";
import {stateType} from '../../redux/store';
import {Account} from "./Account";

export type accountType = {
   store: any
   state: stateType
}

export const AccountContainer: React.FC<accountType> = (
    {store, state}
) => {
   const valueTextarea = state.accountPage.valueTextarea;
   const personal = state.accountPage.personal;
   const datePost = state.accountPage.datePost;

   const addPost = () => store.dispatch(addPostActionCreate())
   const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
      const action = changeValueTextareaActionCreate(e.currentTarget.value)
      store.dispatch(action)
   }

   return (
       <Account valueTextarea={valueTextarea}
                personal={personal}
                addPost={addPost}
                posts={datePost}
                onChangeTextarea={onChangeTextarea}
       />
   )
};
