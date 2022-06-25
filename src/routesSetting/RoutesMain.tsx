import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AccountContainer from "../features/account/AccountContainer";
import СommunicationContainer from "../features/сommunication/СommunicationContainer";
import UserContainer from "../features/users/UserContainer";
import {Music} from "../features/music/Music";
import {News} from "../features/news/News";
import {Settings} from "../features/settings/Settings";
import {Help} from "../features/help/Help";
import {routerAPI} from "./routerAPI";

type routesMainType = {
   elementRouter: (Component: any) => any
};

export class RoutesMain extends React.Component<routesMainType> {
   constructor(props: routesMainType) {
      super(props);
   }

   render() {
      const {elementRouter} = this.props;
      return (
          <Routes>
             <Route path={routerAPI['/'].path} element={<Navigate replace to={routerAPI.Account.path}/>}/>
             <Route path={routerAPI.Account.path} element={elementRouter(<AccountContainer/>)}>
                <Route path={routerAPI.Account.parameter} element={<AccountContainer/>}/>
             </Route>
             <Route path={routerAPI.Communication.path} element={elementRouter(<СommunicationContainer/>)}/>
             <Route path={routerAPI.User.path} element={elementRouter(<UserContainer/>)}/>
             <Route path={routerAPI.Music.path} element={<Music/>}/>
             <Route path={routerAPI.News.path} element={<News/>}/>
             <Route path={routerAPI.Communication.path} element={<Settings/>}/>
             <Route path={routerAPI.Help.path} element={<Help/>}/>
             <Route path={routerAPI['*'].path} element={<div>404</div>}/>
          </Routes>
      );
   }
}
