import React from 'react';
import s from "./Personal.module.scss"
import imageAvatar from "../../../../assets/images/avatar.jpg";
import {profileType} from "../../../../bll/redux/reducer/accountPage-reducer/accountPage-reducer";

export type personalType = {
   profile: null | profileType;
};

export const Personal:React.FC<personalType> = (props) => {
   const {profile} = props
   return (
       <div className={s.personal}>
          <img className={s.avatar} src={profile?.photos.small ? profile?.photos.small : imageAvatar} alt="Изображение аватара"/>

          <div className={s.description}>
             <h2 className={s.name}>{profile?.fullName || "name"}</h2>
             <p className={s.text}>{profile?.aboutMe || "text"}</p>
          </div>

          <p className={s.status}>
             <strong>
                Status:
             </strong>
             {props.profile?.lookingForAJob ? ' В поиске работы' : ' Занят'}
          </p>

          <p className={s.description_job}>
             {props.profile?.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Описание работы'}
          </p>

          <ul className={s.social_network}>
             {
                 props.profile?.contacts.vk &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + props.profile?.contacts.vk}>
                     {props.profile?.contacts.vk}
                  </a>
                </li>
             }

             {
                 props.profile?.contacts.facebook &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + props.profile?.contacts.facebook}>
                     {props.profile?.contacts.facebook}
                  </a>
                </li>
             }


             {
                 props.profile?.contacts.instagram &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + props.profile?.contacts.instagram}>
                     {props.profile?.contacts.instagram}
                  </a>
                </li>
             }

             {
                 props.profile?.contacts.twitter &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + props.profile?.contacts.twitter}>
                     {props.profile?.contacts.twitter}
                  </a>
                </li>
             }

             {
                 props.profile?.contacts.github &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + props.profile?.contacts.github}>
                     {props.profile?.contacts.github}
                  </a>
                </li>
             }

             {
                props.profile?.contacts.youtube &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + props.profile?.contacts.youtube}>
                     {props.profile?.contacts.youtube}
                  </a>
                </li>
             }
          </ul>
       </div>
   );
};
