import React from 'react';
import s from "./Personal.module.scss"
import {profileType} from "../../../bll/redux/reducer/account-page-reducer/account-page-reducer";
import {PersonalStatus} from "./components/personal-status/Personal-status";
import {PersonalSocial} from "./components/personal-social/Personal-social";
import {PersonalDescription} from "./components/personal-description/Personal-description";
import {Avatar} from "../avatar/Avatar";
import {connect} from "react-redux";
import {appStoreType} from "../../../bll/redux/redux-store";

export type personalType = mapStateToPropsType

class Personal extends React.Component<personalType> {
   constructor(props: personalType) {
      super(props);
   }

   render() {
      const {profile} = this.props

      return (
          <div className={s.personal}>
             <Avatar src={profile?.photos.small}/>
             <PersonalDescription profile={profile}/>
             <PersonalStatus status={profile?.lookingForAJobDescription}/>
             <PersonalSocial contacts={profile?.contacts}/>
          </div>
      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      profile: state.accountPage.profile,
   }
}

export default connect(mapStateToProps)(Personal);

type mapStateToPropsType = {
   profile: null | profileType;
}
