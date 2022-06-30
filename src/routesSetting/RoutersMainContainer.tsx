import React from 'react';
import {RoutesMain} from "./RoutesMain";
import {connect} from "react-redux";
import {appStoreType} from "../bll/redux/redux-store";
import {routerAPI} from "./routerAPI";
import {Navigate} from "react-router-dom";

class RoutersMainContainer extends React.Component<mapType>{
   constructor(props: mapType) {
      super(props);
   }

   render() {
      const redirectComponent = (Component: any) => {
         return this.props.status ? <Navigate replace to={routerAPI.Help.path}/> : Component
      }

      return (
          <RoutesMain redirectComponent={redirectComponent}/>
      );
   }
};


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
