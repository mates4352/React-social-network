import React, {ChangeEvent} from 'react';
import {
   accountPageType,
} from "../../../bll/redux/reducer/account-page-reducer/account-page-reducer";
import {Account} from "./Account";
import {connect} from "react-redux";
import {appStoreType} from "../../../bll/redux/redux-store";
import {
   addPost,
   changeValueTextarea,
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
      const changeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
         this.props.changeValueTextarea(e.currentTarget.value);
      };
      const sendPost = () => this.props.addPost();

      return (
          <Account valueTextarea={this.props.valueTextarea}
                   datePost={this.props.datePost}
                   profile={this.props.profile}
                   sendPost={sendPost}
                   changeValueTextarea={changeValueTextarea}/>
      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      valueTextarea: state.accountPage.valueTextarea,
      datePost: state.accountPage.datePost,
      profile: state.accountPage.profile,
   };
};
const mapDispatchToProps: mapDispatchToPropsType = {
   addPost,
   changeValueTextarea,
   getAccount,
};

export default compose<React.ComponentType>(
    WithRouterParams,
    connect(mapStateToProps, mapDispatchToProps),
)(AccountContainer)

export type mapAccountType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = accountPageType & { params?: { id?: string } };
type mapDispatchToPropsType = {
   addPost: () => void
   changeValueTextarea: (text: string) => void
   getAccount: (userId: string) => void
};
