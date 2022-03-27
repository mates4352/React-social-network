import React, {ChangeEvent} from 'react';

import s from './Account.module.scss'
import background from './../../assets/images/bg_account.jpg'

import {Post} from "./components/post/post";
import {Personal} from "./components/personal/Personal";

import {dataPersonalType, datePostType} from '../../redux/store';

export type accountType = {
   valueTextarea: string
   personal: dataPersonalType;
   posts: Array<datePostType>
   sendPost: ()=> void
   changeValueTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Account: React.FC<accountType> = (
    {valueTextarea, personal, posts, sendPost, changeValueTextarea}
) => {

   return (
       <div className={s.account}>
          <div className={s.banner}>
             <img src={background} alt="Изображение баннера"/>
          </div>

          <div className={s.container}>
             <Personal personal={personal}/>

             <form className={s.entry_field}>
                <textarea className={s.textarea}
                          maxLength={120}
                          placeholder='Write a post...'
                          value={valueTextarea}
                          onChange={changeValueTextarea}/>
                <button className={s.button} type="button" onClick={sendPost}>
                   Add post
                </button>
             </form>

             <ul className={s.list}>
                {
                   posts.map(post =>
                       <li className={s.item} key={post.id}>
                          <Post post={post}/>
                       </li>
                   )
                }
             </ul>
          </div>
       </div>
   );
};
