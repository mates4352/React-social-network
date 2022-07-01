import React from 'react';
import {RoutesMain} from "./Routes-main";
import {connect} from "react-redux";
import {appStoreType} from "../bll/redux/redux-store";
import {routerApi} from "./router-api";
import {Navigate} from "react-router-dom";

class RoutersMainContainer extends React.Component<mapType>{
   constructor(props: mapType) {
      super(props);
   }

   render() {
      const redirectUserRegistration = (Component: JSX.Element) => {
         return this.props.status ? <Navigate replace to={routerApi.Help.path}/> : Component
      }

      return (
          <RoutesMain redirectUserRegistration={redirectUserRegistration} />
      );
   }
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType  => {
   return {
      status: state.auth.resultCode,
   }
}

export default connect(mapStateToProps, {})(RoutersMainContainer)

type mapStateToPropsType = {
   status: number | null;
}

type mapType = mapStateToPropsType;
