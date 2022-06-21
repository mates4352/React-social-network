import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {appStoreType} from "../../../bll/redux/redux-store";
import {authData} from "../../../bll/redux/reducer/auth-reducer/auth-reducer";
import {changeAuthData} from "../../../bll/redux/reducer/auth-reducer/auth-reducer-create-actions";
import {authAPI} from "../../../api/auth/authAPI";

class HeaderContainer extends React.Component<mapState> {
   constructor(props: mapState) {
      super(props);
   }

   componentDidMount() {
      authAPI.getMeProfile().then((data: authData) => {
         const {id, login, email} = data;
         if (id && login && email) this.props.changeAuthData(id, login, email);
      })
   }

   render() {
      return <Header resultCode={this.props.resultCode}/>;
   };
};

type mapStateToPropsType = {
   resultCode: null | number;
}
type mapDispatchToPropsType = {
   changeAuthData: (id: number, login: string, email: string) => void
}
type mapState = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: appStoreType) => {
   return {
      resultCode: state.auth.resultCode,
   }
}

export default connect(mapStateToProps, {
   changeAuthData
})(HeaderContainer)
