import React from 'react';
import s from "./Personal-social.module.scss";
import {contactsApiType} from "../../../../../api/account/accountAPI";

type personalSocialType = {
   contacts: contactsApiType | undefined
};

export class PersonalSocial extends React.PureComponent<personalSocialType> {
   constructor(props: personalSocialType) {
      super(props);
   }

   render() {
      const {contacts} = this.props;

      return (
          <ul className={s.social_network}>
             {contacts?.vk &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + contacts.vk}>
                     {contacts.vk}
                  </a>
                </li>
             }

             {contacts?.facebook &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + contacts.facebook}>
                     {contacts.facebook}
                  </a>
                </li>
             }


             {contacts?.instagram &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + contacts.instagram}>
                     {contacts.instagram}
                  </a>
                </li>
             }

             {contacts?.twitter &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + contacts.twitter}>
                     {contacts.twitter}
                  </a>
                </li>
             }

             {contacts?.github &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + contacts.github}>
                     {contacts.github}
                  </a>
                </li>
             }

             {contacts?.youtube &&
                <li className={s.social_network_item}>
                  <a className={s.social_network_link} href={'' + contacts.youtube}>
                     {contacts.youtube}
                  </a>
                </li>
             }
          </ul>
      );
   };
};
