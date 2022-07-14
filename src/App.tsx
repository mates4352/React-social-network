import {Navigate, Route, Routes} from "react-router-dom";
import s from './App.module.scss';
import React from "react";
import Login from "./components/pages/login/Login";
import {MainPage} from "./components/pages/MainPage";
import {connect} from "react-redux";
import {appStoreType} from "./bll/redux/redux-store";
import {getMeProfile} from "./bll/redux/reducer/auth/auth-thunk";

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
             <Route path={'/'} element={<Navigate to={isStatus  ? '/login' : '/Main'}/>}/>
             <Route path={'/*'} element={<Navigate to={isStatus ? '/login' : '/Main'}/>}/>
             <Route path={'/Login'} element={isStatus ? <Login/> : <Navigate to={'/Main'}/>}/>
             <Route path={'/Main/*'} element={isStatus ? <Navigate to={'/login'}/> : <MainPage/>}/>
             <Route path={'/Main'} element={<Navigate to={'/Main/Account'}/>}/>
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
