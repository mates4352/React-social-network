import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {stateType} from "../../../bll/redux/redux-store";
import axios, {AxiosResponse} from "axios";
import {authType} from "../../../bll/redux/reducer/auth-reducer/auth-reducer";
import {changeAuthData} from "../../../bll/redux/reducer/auth-reducer/auth-reducer-create-actions";

class HeaderContainer extends React.Component<mapState> {
   constructor(props: mapState) {
      super(props);
   }

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true,
      }).then((result: AxiosResponse<authType>) => {
         const {id, login, email} = result.data.data;
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

const mapStateToProps = (state: stateType) => {
   return {
      resultCode: state.auth.resultCode,
   }
}

export default connect(mapStateToProps, {
   changeAuthData
})(HeaderContainer)
