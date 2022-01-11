import React, {useState} from 'react';
import s from './Account.module.scss'

import imageAvatar from './../../assets/images/avatar.jpg'
import background from './../../assets/images/bg_account.jpg'

import {datePostType, Post} from "./post/post";

type accountType = {};

export const Account:React.FC<accountType> = (props) => {
   const [post, setPost] = useState<Array<datePostType>>([
      {
         id: 0,
         text: "lorem lorem lorem lorem lorem",
         time: "2022-01-10",
      },

      {
         id: 1,
         text: "text",
         time: "2022-01-10",
      }
   ]);

   const addPost = (value: string) => {
      setPost([...post, {id: post.length - 1, text: value, time: "2022-01-09"}])
   }

   return (
       <div className={s.account}>
          <div className={s.banner}>
             <img src={background} alt="Изображение баннера"/>
          </div>

          <div className={s.container}>
             <div className={s.info}>
                <img className={s.avatar} src={imageAvatar} alt="Изображение аватара"/>

                <div className={s.description}>
                   <h2 className={s.name}>Name</h2>
                   <p className={s.text}>info</p>
                </div>
             </div>

             <form className={s.entry_field}>
                <textarea className={s.textarea} maxLength={120} placeholder='Write a post...'></textarea>
                <button className={s.button} type="button" onClick={() => {addPost("hello")}}>Add post</button>
             </form>

             <ul className={s.list}>
                {post.map( post =>
                    <li className={s.item}>
                       <Post post={post}/>
                    </li>
                )}
             </ul>
          </div>
       </div>
   );
};