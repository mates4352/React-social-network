import React, {useState} from 'react';
import s from './Account.module.scss'
import background from './../../assets/images/bg_account.jpg'
import {datePostType, Post} from "./components/post/post";
import {Personal, dataPersonalType} from "./components/personal/Personal";

export type accountPageType = {
   datePost: Array<datePostType>
   personal: dataPersonalType
};

export type accountType = {
   accountPage: accountPageType
   addPost: (text: string) => void;
}

export const Account: React.FC<accountType> = (props) => {
   const [text, setText] = useState('');
   const postMap = props.accountPage.datePost.map(post =>
       <li className={s.item} key={post.id}>
          <Post post={post}/>
       </li>
   )
   const sendPost = () => {
      if(text.trim() !== '') {
         props.addPost(text)
         setText('')
      }
   }

   return (
       <div className={s.account}>
          <div className={s.banner}>
             <img src={background} alt="Изображение баннера"/>
          </div>

          <div className={s.container}>
             <Personal personal={props.accountPage.personal}/>

             <form className={s.entry_field}>
                <textarea className={s.textarea} maxLength={120} placeholder='Write a post...' value={text}
                          onChange={(e) =>
                             setText(e.currentTarget.value)
                          }>
                </textarea>
                <button className={s.button} type="button" onClick={sendPost}>
                   Add post
                </button>
             </form>

             <ul className={s.list}>
                {postMap}
             </ul>
          </div>
       </div>
   );
};