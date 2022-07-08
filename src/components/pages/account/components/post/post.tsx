import React from 'react';
import s from "./post.module.scss"
import {datePostType} from "../../../../../bll/redux/reducer/account/account-reducer";
type postType = {
   post: datePostType;
}

export class Post extends React.PureComponent<postType> {
   constructor(props: postType) {
      super(props);
   }

   render() {
      const {post} = this.props;

      return (
          <div className={s.post}>

             <p className={s.text}>
                {post.text}
             </p>

             <time className={s.time} dateTime={post.time}>{post.time}</time>
          </div>
      );
   }
}
