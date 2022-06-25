import React, {ChangeEvent} from 'react';
import {
   accountPageType,
} from "../../bll/redux/reducer/accountPage-reducer/accountPage-reducer";
import {Account} from "./Account";
import {connect} from "react-redux";
import {appStoreType} from "../../bll/redux/redux-store";
import {
   addPost,
   changeValueTextarea,
} from "../../bll/redux/reducer/accountPage-reducer/accountPage-create-actions";
import {useParams} from "react-router-dom";
import {getAccount} from "../../bll/redux/reducer/accountPage-thunk";

class AccountContainer extends React.Component<mapType> {
   constructor(props: mapType) {
      super(props);
   }

   componentDidMount() {
      let userId = this.props.params?.id;
      if(!userId) userId = '2'
      this.props.getAccount(userId)
   }

   render() {
      const changeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
         this.props.changeValueTextarea(e.currentTarget.value);
      }
      const sendPost = () => this.props.addPost();

      return (

          <>
             <Account valueTextarea={this.props.valueTextarea}
                      datePost={this.props.datePost}
                      profile={this.props.profile}
                      sendPost={sendPost}
                      changeValueTextarea={changeValueTextarea}/>
          </>

      )
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType  => {
   return {
      valueTextarea: state.accountPage.valueTextarea,
      datePost: state.accountPage.datePost,
      profile: state.accountPage.profile,
   }
}

export const withRouter = (Component: any) => {
   const Wrapper = (props: mapType) => {
      const params = useParams();

      return (
          <Component
              params={params}
              {...props}
          />
      );
   };

   return Wrapper;
};

let WithUrlDataContainerComponent = withRouter(AccountContainer);

export default connect(mapStateToProps, {
   addPost,
   changeValueTextarea,
   getAccount,
})(WithUrlDataContainerComponent);

type mapStateToPropsType = accountPageType
type mapDispatchToPropsType = {
   addPost: () => void
   changeValueTextarea: (text: string) => void
   getAccount: (userId: string) => void
}
type mapType = mapStateToPropsType & mapDispatchToPropsType;
