import React from 'react';
import s from './Account.module.scss'
import imageAvatar from './../../assets/images/avatar.jpg'
import background from './../../assets/images/bg_account.jpg'
import {datePostType, Post} from "./post/post";
type accountType = {};

const post: Array<datePostType>  = [
   {
      id: 0,
      text: "lorem lorem lorem lorem lorem",
      time: "2022-01-10",
   },

   {
      id: 0,
      text: "text",
      time: "2022-01-10",
   }
]

export const Account = (props: accountType) => {
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
                <button className={s.button}>Add post</button>
             </form>

             <div className={s.content}>
                {post.map( post => <Post post={post}/>)}
             </div>
          </div>
       </div>
   );
};