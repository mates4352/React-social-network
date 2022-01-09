import React from 'react';
import s from './Account.module.scss'
import imageAvatar from './../../assets/images/avatar.jpg'
import background from './../../assets/images/bg_account.jpg'

type accountType = {};

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

             </div>
          </div>
       </div>
   );
};