import React, {ChangeEvent} from 'react';
import {
   addPostActionCreate,
   changeValueTextareaActionCreate,
} from "../../redux/reducer/accountPage-reducer";
import {stateType} from '../../redux/store';
import {Account} from "./Account";

export type accountType = {
   store: any
}

export const AccountContainer: React.FC<accountType> = (
    {store}
) => {
   const valueTextarea = store.getState().accountPage.valueTextarea;
   const personal = store.getState().accountPage.personal;
   const Posts = store.getState().accountPage.datePost;

   const sendPost = () => store.dispatch(addPostActionCreate())
   const changeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
      const action = changeValueTextareaActionCreate(e.currentTarget.value)
      store.dispatch(action)
   }

   return (
       <Account valueTextarea={valueTextarea}
                personal={personal}
                sendPost={sendPost}
                posts={Posts}
                changeValueTextarea={changeValueTextarea}
       />
   )
};
