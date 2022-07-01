import React from 'react';
import s from './Preloader.module.scss'

type preloaderType = {
   w: number
   h: number
   fill: string
};

export const Preloader:React.FC<preloaderType> = (props) => {
   return (
       <svg className={s.preloader} width={props.w} height={props.h} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label='Изображение preloader'>
          <path fillRule="evenodd" clipRule="evenodd" d="M.974 8.504l1.728-.825a.94.94 0 00.323-1.439l-1.21-1.498a7.009 7.009
          0 011.494-1.895l1.727.847a.931.931 0 001.32-.642l.407-1.88a6.96 6.96 0 012.412.001L9.6 3.057a.934.934
          0 001.323.637l1.721-.847a7.053 7.053 0 011.511 1.894L12.957 6.24a.942.942 0 00.33 1.437l1.74.826a7.086
          7.086 0 01-.529 2.362l-1.914-.012a.935.935 0 00-.912 1.155l.446 1.874a7.002 7.002 0 01-2.17 1.05l-1.194-1.514a.93.93
          0 00-1.466.002l-1.18 1.512a7.09 7.09 0 01-2.178-1.05l.43-1.878a.94.94 0 00-.917-1.15l-1.92.011a7.095 7.095 0 01-.06-.149
          7.102 7.102 0 01-.488-2.212zM9.96 7.409a2.11 2.11 0 01-1.18 2.74 2.11 2.11 0 01-2.733-1.195 2.11 2.11 0 011.179-2.741A2.11 2.11
          0 019.96 7.409z" fill={props.fill ? props.fill : '#000'}/>
       </svg>
   );
};
