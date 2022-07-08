import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {appStoreType} from "../../../bll/redux/redux-store";

class HeaderContainer extends React.Component<mapState> {
   constructor(props: mapState) {
      super(props);
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

export default connect(mapStateToProps, )(HeaderContainer)

type mapStateToPropsType = {
   resultCode: null | number;
}
type mapState = mapStateToPropsType;
