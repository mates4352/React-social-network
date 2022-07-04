import React from 'react';
import s from './Account.module.scss'
import Personal from "../../shared/personal/Personal";

import {
   datePostType,
   profileType
} from '../../../bll/redux/reducer/account-page-reducer/account-page-reducer';
import {EntryField} from "../../shared/entry-field/Entry-field";
import {PostsList} from "./components/posts-list/Posts-list";

export type accountType = {
   datePost: Array<datePostType>
   profile: null | profileType
   sendPost: (value: string) => void
}

export class Account extends React.Component<accountType> {
   constructor(props: accountType) {
      super(props);
   }

   render() {
      const {datePost, sendPost} = this.props;

      return (
          <div className={s.account}>
             <div className={s.container}>
                <Personal/>
                <EntryField sendPost={sendPost}/>
                {datePost.length ? <PostsList datePost={datePost}/> : ''}
             </div>
          </div>
      );
   }
}
