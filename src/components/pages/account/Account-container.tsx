import React from 'react';
import {
   accountPageType,
} from "../../../bll/redux/reducer/account-page-reducer/account-page-reducer";
import {Account} from "./Account";
import {connect} from "react-redux";
import {appStoreType} from "../../../bll/redux/redux-store";
import {
   addPost,
} from "../../../bll/redux/reducer/account-page-reducer/account-page-create-actions/account-page-create-actions";
import {getAccount} from "../../../bll/redux/reducer/account-page-reducer/account-page-thunk";
import {compose} from "redux";
import {WithRouterParams} from "../../../hoc/With-router-params";

class AccountContainer extends React.Component<mapAccountType> {
   constructor(props: mapAccountType) {
      super(props);
   }

   componentDidMount() {
      let userId = this.props.params?.id;
      if (!userId) userId = '2';
      this.props.getAccount(userId);
   }

   render() {
      const sendPost = (value: string) => {
         this.props.addPost(value);
      }

      return (
          <Account datePost={this.props.datePost}
                   profile={this.props.profile}
                   sendPost={sendPost}/>
      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      datePost: state.accountPage.datePost,
      profile: state.accountPage.profile,
   };
};
const mapDispatchToProps: mapDispatchToPropsType = {
   addPost,
   getAccount,
};

export default compose<React.ComponentType>(
    WithRouterParams,
    connect(mapStateToProps, mapDispatchToProps),
)(AccountContainer)

export type mapAccountType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = accountPageType & { params?: { id?: string } };
type mapDispatchToPropsType = {
   addPost: (value: string) => void
   getAccount: (userId: string) => void
};
