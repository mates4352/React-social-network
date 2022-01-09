import React from 'react';
import s from './Account.module.scss'
import imageAvatar from './../../assets/images/avatar.jpg'

type accountType = {};

export const Account = (props: accountType) => {
   return (
       <div className={s.account}>
          <img className={s.banner} src="#" alt="Изображение баннера"/>

          <div className={s.info}>
             <img className={s.avatar} src={imageAvatar} alt="Изображение аватара"/>

             <div className={s.description}>
                <h2 className={s.name}>Name</h2>
                <p className={s.text}>info</p>
             </div>
          </div>

          <div className={s.content}>
             <div className={s.entry_field}>
                <textarea className={s.textarea} maxLength={120} placeholder='Write a post...'></textarea>
                <button className={s.button}>Add post</button>
             </div>
          </div>
       </div>
   );
};