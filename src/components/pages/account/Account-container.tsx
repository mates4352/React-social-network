import React from 'react';
import {
   accountPageType,
} from "../../../bll/redux/reducer/account/account-reducer";
import {Account} from "./Account";
import {connect} from "react-redux";
import {appStoreType} from "../../../bll/redux/redux-store";
import {
   addPost,
} from "../../../bll/redux/reducer/account/account-actions/account-actions";
import {getAccount, getStatus, updateStatus} from "../../../bll/redux/reducer/account/account-thunk";
import {compose} from "redux";
import {WithRouterParams} from "../../../hoc/With-router-params";
import {
   getAccountDataPostSelector, getAccountProfileSelector, getAccountStatusSelector, getAccountUserIdSelector,
} from "../../../bll/redux/selectors/account-selectors";

class AccountContainer extends React.Component<mapAccountType> {
   constructor(props: mapAccountType) {
      super(props);
   }

   componentDidMount() {
      let userId = this.props.params?.id;
      if (!userId) this.props.getAccount(String(this.props.userId));
      else this.props.getAccount(String(userId));
   }

   render() {
      const sendPost = (value: string) => {
         this.props.addPost(value);
      }
      const updateStatus = (userId: number, status: string) => {
         this.props.updateStatus(userId, status)
      }

      return (
          <Account datePost={this.props.datePost}
                   profile={this.props.profile}
                   status={this.props.status}
                   sendPost={sendPost}
                   updateStatus={updateStatus}/>
      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      userId: getAccountUserIdSelector(state),
      datePost: getAccountDataPostSelector(state),
      profile: getAccountProfileSelector(state),
      status: getAccountStatusSelector(state),
   };
};
const mapDispatchToProps: mapDispatchToPropsType = {
   addPost,
   getAccount,
   getStatus,
   updateStatus,
};

export default compose<React.ComponentType>(
    WithRouterParams,
    connect(mapStateToProps, mapDispatchToProps),
)(AccountContainer)

export type mapAccountType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = accountPageType & {
   userId: null | number
   params?: { id?: string }
};
type mapDispatchToPropsType = {
   addPost: (value: string) => void
   getAccount: (userId: string) => void
   getStatus: (userId: number) => void
   updateStatus: (userId: number, status: string) => void
};
