import React, {ChangeEvent} from 'react';
import {
   addPostActionCreate,
   changeValueTextareaActionCreate,
} from "../../redux/reducer/accountPage-reducer";
import {Account} from "./Account";
import {StoreContext} from "../../context";

export type accountType = {
}

export const AccountContainer: React.FC<accountType> = () => {
   return (
       <StoreContext.Consumer>
          {
             (store) => {
                const valueTextarea = store.getState().accountPage.valueTextarea;
                const personal = store.getState().accountPage.personal;
                const Posts = store.getState().accountPage.datePost;

                const sendPost = () => store.dispatch(addPostActionCreate())
                const changeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
                   const action = changeValueTextareaActionCreate(e.currentTarget.value)
                   store.dispatch(action)
                }

                return <Account valueTextarea={valueTextarea}
                                personal={personal}
                                sendPost={sendPost}
                                posts={Posts}
                                changeValueTextarea={changeValueTextarea}
                />
             }
          }

       </StoreContext.Consumer>

   )
};
