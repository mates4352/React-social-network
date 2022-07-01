import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {appStoreType} from "../../../bll/redux/redux-store";
import {getMeProfile} from "../../../bll/redux/reducer/auth-reducer/auth-thunk";

class HeaderContainer extends React.Component<mapState> {
   constructor(props: mapState) {
      super(props);
   }

   componentDidMount() {
      this.props.getMeProfile()
   }

   render() {
      return <Header resultCode={this.props.resultCode}/>;
   };
};

const mapStateToProps = (state: appStoreType) => {
   return {
      resultCode: state.auth.resultCode,
   }
}

export default connect(mapStateToProps, {
   getMeProfile
})(HeaderContainer)

type mapStateToPropsType = {
   resultCode: null | number;
}
type mapDispatchToPropsType = {
   getMeProfile: () => void
}
type mapState = mapStateToPropsType & mapDispatchToPropsType;
