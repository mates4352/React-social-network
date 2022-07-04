import React from 'react';
import s from './Posts-list.module.scss';
import {Post} from "../post/post";
import {datePostType} from "../../../../../bll/redux/reducer/account-page-reducer/account-page-reducer";

type postsListType = {
   datePost: Array<datePostType>
};

export class PostsList extends React.PureComponent<postsListType> {
   constructor(props: postsListType) {
      super(props);
   }

   render() {
      const {datePost} = this.props;

      return (
          <ul className={s.list}>
             {
                datePost.map(post =>
                    <li className={s.item} key={post.id}>
                       <Post post={post}/>
                    </li>
                )
             }
          </ul>
      );
   };
}
