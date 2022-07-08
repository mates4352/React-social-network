import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import СommunicationContainer from "../components/pages/сommunication/Сommunication-container";
import UserContainer from "../components/pages/users/User-container";
import {Music} from "../components/pages/music/Music";
import {News} from "../components/pages/news/News";
import {Settings} from "../components/pages/settings/Settings";
import {Help} from "../components/pages/help/Help";
import {routerApi} from "./router-api";
import AccountContainer from "../components/pages/account/Account-container";
import {compose} from "redux";

type routesMainType = {
   redirectUserRegistration: (Component: any) => any
};

export class RoutesMain extends React.Component<routesMainType> {
   constructor(props: routesMainType) {
      super(props);
   }

   render() {
      const {redirectUserRegistration} = this.props;

      return (
          <Routes>
             <Route path={routerApi.Account.path} element={compose(redirectUserRegistration)(<AccountContainer/>)}>
                <Route path={routerApi.Account.parameter} element={<AccountContainer/>}/>
             </Route>
             <Route path={routerApi.Communication.path} element={compose(redirectUserRegistration)(<СommunicationContainer/>)}/>
             <Route path={routerApi.User.path} element={compose(redirectUserRegistration)(<UserContainer/>)}/>
             <Route path={routerApi.Music.path} element={<Music/>}/>
             <Route path={routerApi.News.path} element={<News/>}/>
             <Route path={routerApi.Communication.path} element={<Settings/>}/>
             <Route path={routerApi.Help.path} element={<Help/>}/>
             <Route path={routerApi['*'].path} element={<div>404</div>}/>
          </Routes>
      );
   }
}
