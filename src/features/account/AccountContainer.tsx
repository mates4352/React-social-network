import React, {ChangeEvent} from 'react';
import {
   accountPageType, profileType,
} from "../../bll/redux/reducer/accountPage-reducer/accountPage-reducer";
import {Account} from "./Account";
import {connect} from "react-redux";
import {stateType} from "../../bll/redux/redux-store";
import {
   addPost,
   changeValueTextarea,
    getProfile,
} from "../../bll/redux/reducer/accountPage-reducer/accountPage-create-actions";
import axios, {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";
import {accountAPI} from "../../api/account/accountAPI";

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


class AccountContainer extends React.Component<mapType> {
   constructor(props: mapType) {
      super(props);
   }

   componentDidMount() {
      let id = this.props.params?.id;
      if(!id) id = '2'
      accountAPI.getAccount(id).then((data: profileType) => {
         this.props.getProfile(data)
      })
   }

   render() {
      const changeValueTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
         this.props.changeValueTextarea(e.currentTarget.value)
      }

      const sendPost = () => {
         this.props.addPost()
      }

      return (
          <Account valueTextarea={this.props.valueTextarea}
                   datePost={this.props.datePost}
                   profile={this.props.profile}
                   sendPost={sendPost}
                   changeValueTextarea={changeValueTextarea}/>
      )
   }
}
type mapStateToPropsType = accountPageType
type mapDispatchToPropsType = {
   addPost: () => void
   changeValueTextarea: (text: string) => void
   getProfile: (profile: profileType) => void
}
type mapType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: stateType): mapStateToPropsType  => {
   return {
      valueTextarea: state.accountPage.valueTextarea,
      datePost: state.accountPage.datePost,
      profile: state.accountPage.profile,
   }
}

let WithUrlDataContainerComponent = withRouter(AccountContainer);

export default connect(mapStateToProps, {
   addPost,
   changeValueTextarea,
   getProfile,
})(WithUrlDataContainerComponent);
