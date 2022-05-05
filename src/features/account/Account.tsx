import React, {ChangeEvent} from 'react';
import { Outlet } from "react-router-dom";
import s from './Account.module.scss'
import background from './../../assets/images/bg_account.jpg'

import {Post} from "./components/post/post";
import {Personal} from "./components/personal/Personal";

import {
   datePostType,
   profileType
} from '../../bll/redux/reducer/accountPage-reducer/accountPage-reducer';
import {Button} from "../../shared/interactive/Button/Button";

export type accountType = {
   valueTextarea: string
   datePost: Array<datePostType>
   profile: null | profileType
   sendPost: ()=> void
   changeValueTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export class Account extends React.Component<accountType> {
   constructor(props: accountType) {
      super(props);
   }
   render() {
      const {valueTextarea, datePost, profile, sendPost, changeValueTextarea} = this.props;

      return (
          <div className={s.account}>
             <div className={s.banner}>
                <img src={background} alt="Изображение баннера"/>
             </div>

             <div className={s.container}>
                <Personal profile={profile}/>

                <form className={s.entry_field}>
                <textarea className={s.textarea}
                          maxLength={120}
                          placeholder='Write a post...'
                          value={valueTextarea}
                          onChange={changeValueTextarea}/>

                   <Button onClick={sendPost}>Add post</Button>
                </form>

                <ul className={s.list}>
                   {
                      datePost.map(post =>
                          <li className={s.item} key={post.id}>
                             <Post post={post}/>
                          </li>
                      )
                   }
                </ul>
             </div>
          </div>
      );
   }
}
