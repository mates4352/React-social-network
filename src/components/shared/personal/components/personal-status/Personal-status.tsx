import React, {ChangeEvent} from 'react';
import s from './Personal-status.module.scss'
import {profileType} from "../../../../../bll/redux/reducer/account/account-reducer";

type personalStatusType = {
   profile: null | profileType
   status: string
   onChange?: (value: string) => void
   updateStatus: (userId: number, status: string) => void
};

export class PersonalStatus extends React.PureComponent<personalStatusType> {
   state = {
      isShowStatus: true,
      valueStatus: this.props.status,
   }

   constructor(props: personalStatusType) {
      super(props);
   }

   componentDidUpdate(prevProps: Readonly<personalStatusType>, prevState: Readonly<{}>, snapshot?: any) {
      if(prevProps.status !== this.props.status) {
         this.setState({valueStatus: this.props.status})
      }
   }

   render() {
      const {isShowStatus, valueStatus} = this.state;
      const {profile, onChange} = this.props;
      const classStatus = !isShowStatus ? s.status__align_start : '';

      const showElement = () => {
         this.setState({isShowStatus: !isShowStatus})
      }

      const updateStatus = (userId: number, status: string) => {
         this.props.updateStatus(userId, status)
         showElement()
      }

      const OnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
         onChange && onChange(e.currentTarget.value)
         this.setState({valueStatus: e.currentTarget.value})
      }

      return (
          <dl className={`${s.status} ${classStatus}`}>
             <dt className={s.terming}>Status:</dt>

             {this.state.isShowStatus &&
                <dd className={s.caption} onClick={showElement}>
                   {this.props.status ? this.props.status : ''}
                </dd>
             }

             {!this.state.isShowStatus &&
                <div className={s.wrap}>
                  <textarea
                     className={`${s.caption} ${s.caption_textarea}`}
                     value={valueStatus}
                     maxLength={120}
                     autoFocus={true}
                     onChange={OnChange}
                     onBlur={() => {
                        if(profile) {
                           updateStatus(profile?.userId, this.state.valueStatus)
                           showElement()
                        }
                     }}/>
                </div>
             }
          </dl>
      );
   };
}
