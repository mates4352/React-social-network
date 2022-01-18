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
}

export const Account: React.FC<accountType> = (props) => {
   const [post, setPost] = useState<Array<datePostType>>(props.accountPage.datePost);
   const [inputValue, setInputValue] = useState('');

   const postMap = post.map(post =>
       <li className={s.item} key={post.id}>
          <Post post={post}/>
       </li>
   )
   const sendPost = (value: string) => {
      setPost([...post, {id: post.length, text: value, time: "2022-01-09"}])
      setInputValue("")
   }
   const sendPostInputValue = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      setPost([...post, {id: post.length, text: e.currentTarget.value, time: "2022-01-09"}])
      setInputValue("")
   }


   return (
       <div className={s.account}>
          <div className={s.banner}>
             <img src={background} alt="Изображение баннера"/>
          </div>

          <div className={s.container}>
             <Personal personal={props.accountPage.personal}/>

             <form className={s.entry_field}>
                <textarea className={s.textarea} maxLength={120} placeholder='Write a post...' value={inputValue}
                          onChange={(e) => {
                             setInputValue(e.currentTarget.value)
                          }}
                          onKeyUp={(e) => {
                             if (e.key === "Enter" && e.currentTarget.value !== "") sendPostInputValue(e);
                          }}>
                </textarea>
                <button className={s.button} type="button" onClick={() => {
                   sendPost(inputValue)
                }}>Add post
                </button>
             </form>

             <ul className={s.list}>
                {postMap}
             </ul>
          </div>
       </div>
   );
};