import React from 'react';
import s from './Avatar.module.scss'
import imageAvatar from "../../../assets/images/avatar.jpg";

type avatarType = {
   src: string | null | undefined
};

export class Avatar extends React.Component<avatarType> {
   constructor(props: avatarType) {
      super(props);
   }

   render() {
      const {src} = this.props;

      return <img className={s.avatar} src={src ? src : imageAvatar} alt="Изображение аватара"/>
   };
};
