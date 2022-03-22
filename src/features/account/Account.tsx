import React, {ChangeEvent} from 'react';
import s from './Account.module.scss'
import background from './../../assets/images/bg_account.jpg'
import {Post} from "./components/post/post";
import {Personal} from "./components/personal/Personal";
import {
   accountPageType,
   addPostActionCreate,
   addPostType,
   changeValueTextareaActionCreate,
   changeValueTextareaType
} from "../../redux/store";

export type accountType = {
   accountPage: accountPageType
   dispatch: (action: changeValueTextareaType | addPostType) => void
}

export const Account: React.FC<accountType> = (props) => {
   const newPostElement = React.createRef<HTMLTextAreaElement>();

   const sendPost = () => props.dispatch(addPostActionCreate())
   const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(changeValueTextareaActionCreate(e.currentTarget.value))
   }

   const postMap = props.accountPage.datePost.map(post =>
       <li className={s.item} key={post.id}>
          <Post post={post}/>
       </li>
   )

   return (
       <div className={s.account}>
          <div className={s.banner}>
             <img src={background} alt="Изображение баннера"/>
          </div>

          <div className={s.container}>
             <Personal personal={props.accountPage.personal}/>

             <form className={s.entry_field}>
                <textarea className={s.textarea}
                          maxLength={120}
                          placeholder='Write a post...'
                          value={props.accountPage.valueTextarea}
                          ref={newPostElement}
                          onChange={onChangeTextarea}/>
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
