import {Navigate, Route, Routes} from "react-router-dom";
import s from './App.module.scss';
import React from "react";
import Login from "./components/pages/login/Login";
import {MainPage} from "./components/pages/MainPage";
import {connect} from "react-redux";
import {appStoreType} from "./bll/redux/redux-store";
import {getMeProfile} from "./bll/redux/reducer/auth/auth-thunk";
import {appPageRouterApi} from "./routes/app-page-router-api";

export type appType = mapState & {}

class App extends React.Component<appType> {
   constructor(props: appType) {
      super(props);
   }

   componentDidMount() {
      this.props.getMeProfile()
   }

   render() {
      const {status} = this.props;
      const isStatus = status || status === null;

      return (
          <Routes>
             <Route path={appPageRouterApi["/"].path} element={<Navigate to={isStatus  ? appPageRouterApi.redirect.Login : appPageRouterApi.redirect.Main}/>}/>
             <Route path={appPageRouterApi["/*"].path} element={<Navigate to={isStatus ? appPageRouterApi.redirect.Login : appPageRouterApi.redirect.Main}/>}/>
             <Route path={appPageRouterApi.Login.path} element={isStatus ? <Login/> : <Navigate to={appPageRouterApi.redirect.Main}/>}/>
             <Route path={appPageRouterApi.Main.path} element={<Navigate to={appPageRouterApi.redirect["/Main/Account"]}/>}/>
             <Route path={appPageRouterApi["Main*"].path} element={isStatus ? <Navigate to={appPageRouterApi.redirect.Login}/> : <MainPage/>}/>
          </Routes>
      );
   };
}

const mapStateToProps = (state: appStoreType): mapStateToPropsType => {
   return {
      status: state.auth.resultCode
   }
}

export default connect(mapStateToProps, {getMeProfile})(App);

type mapStateToPropsType = {
   status: number | null
}
type mapDispatchToPropsType = {
   getMeProfile: () => void
}
type mapState = mapStateToPropsType & mapDispatchToPropsType;
