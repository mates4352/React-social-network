import React from 'react';
import s from './Account.module.scss'

import {
   datePostType,
   profileType
} from '../../../bll/redux/reducer/account/account-reducer';
import {EntryField} from "../../shared/entry-field/Entry-field";
import {PostsList} from "./components/posts-list/Posts-list";
import {Personal} from "../../shared/personal/Personal";

export type accountType = {
   datePost: Array<datePostType>
   profile: null | profileType
   status: string
   sendPost: (value: string) => void
   updateStatus: (userId: number, status: string) => void
}

export class Account extends React.Component<accountType> {
   constructor(props: accountType) {
      super(props);
   }

   render() {
      const {profile, datePost, status, sendPost, updateStatus} = this.props;

      return (
          <div className={s.account}>
             <div className={s.container}>
                <Personal profile={profile} status={status} updateStatus={updateStatus}/>
                <EntryField sendPost={sendPost}/>
                {datePost.length ? <PostsList datePost={datePost}/> : ''}
             </div>
          </div>
      );
   }
}
