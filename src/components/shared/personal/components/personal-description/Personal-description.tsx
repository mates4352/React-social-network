import React from 'react';
import s from "./Personal-description.module.scss";
import {profileType} from "../../../../../bll/redux/reducer/account-page-reducer/account-page-reducer";

type personalDescriptionType = {
   profile: null | profileType;
};

export class PersonalDescription extends React.PureComponent<personalDescriptionType> {
   constructor(props: personalDescriptionType) {
      super(props);
   }

   render() {
      const {profile} = this.props;

      return (
          <div className={s.description}>
             <h2 className={s.name}>{profile?.fullName || "name"}</h2>
             <p className={s.text}>{profile?.aboutMe || "text"}</p>
          </div>
      );
   };
};
