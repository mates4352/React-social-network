import React from 'react';
import s from "./Personal.module.scss"
import {profileType} from "../../../bll/redux/reducer/account/account-reducer";
import {PersonalStatus} from "./components/personal-status/Personal-status";
import {PersonalSocial} from "./components/personal-social/Personal-social";
import {PersonalDescription} from "./components/personal-description/Personal-description";
import {Avatar} from "../avatar/Avatar";

type personalType = {
   profile: null | profileType
   status: string
   updateStatus: (userId: number, status: string) => void
}

export class Personal extends React.PureComponent<personalType> {
   constructor(props: personalType) {
      super(props);
   }

   render() {
      const {profile, status, updateStatus} = this.props

      return (
          <div className={s.personal}>
             <Avatar src={profile?.photos.small} alt='Аватар'/>
             <PersonalDescription profile={profile}/>
             <PersonalStatus profile={profile} status={status} updateStatus={updateStatus}/>
             <PersonalSocial contacts={profile?.contacts}/>
          </div>
      )
   }
}
