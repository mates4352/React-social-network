import React, {ChangeEvent} from 'react';
import s from './Personal-status.module.scss'

type personalStatusType = {
   status: string | undefined
   onChange?: (value: string) => void
};

export class PersonalStatus extends React.Component<personalStatusType> {
   state = {
      isShowStatus: true,
      valueStatus: '',
      isClassStatus: '',
   }

   constructor(props: personalStatusType) {
      super(props);
   }

   render() {
      const {isShowStatus, isClassStatus, valueStatus} = this.state;
      const {status, onChange} = this.props;
      const classStatus = isClassStatus ? s.status__align_start : '';

      const showElement = () => {
         this.setState({isShowStatus: !isShowStatus, isClassStatus: !isClassStatus})
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
                   {valueStatus ? valueStatus : status}
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
                     onBlur={showElement}/>
                </div>
             }
          </dl>
      );
   };
};
