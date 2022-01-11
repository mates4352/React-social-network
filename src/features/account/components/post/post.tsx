import React from 'react';
import s from "./post.module.scss"

export type  datePostType = {
   id: number
   text: string
   time: string
};

type postType = {
   post: datePostType;
}

export const Post: React.FC<postType> = (props) => {
   return (
       <div className={s.post}>

          <p className={s.text}>
             {props.post.text}
          </p>

          <time className={s.time} dateTime={props.post.time}>{props.post.time}</time>
       </div>
   );
};