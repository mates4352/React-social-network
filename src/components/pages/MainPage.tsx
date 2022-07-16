import React from 'react';
import s from './MainPage.module.scss';
import HeaderContainer from "../shared/Header/Header-container";
import Menu from "../shared/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import {mainPageRouterApi} from "../../routes/main-page-router-api";
import AccountContainer from "./account/Account-container";
import СommunicationContainer from "./сommunication/Сommunication-container";
import UserContainer from "./users/User-container";
import {Music} from "./music/Music";
import {News} from "./news/News";
import {Settings} from "./settings/Settings";
import {Help} from "./help/Help";

type mainPageType = {

};

export class MainPage extends React.Component<mainPageType> {
   constructor(props: mainPageType) {
      super(props);
   }

   render() {
      const {} = this.props;
      return (
          <div className={s.page}>
             <HeaderContainer/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path={mainPageRouterApi.Account.path} element={<AccountContainer/>}>
                      <Route path={mainPageRouterApi.Account.parameter} element={<AccountContainer/>}/>
                   </Route>
                   <Route path={mainPageRouterApi.Communication.path} element={<СommunicationContainer/>}/>
                   <Route path={mainPageRouterApi.User.path} element={<UserContainer/>}/>
                   <Route path={mainPageRouterApi.Music.path} element={<Music/>}/>
                   <Route path={mainPageRouterApi.News.path} element={<News/>}/>
                   <Route path={mainPageRouterApi.Communication.path} element={<Settings/>}/>
                   <Route path={mainPageRouterApi.Help.path} element={<Help/>}/>
                   <Route path={mainPageRouterApi['*'].path} element={<div>404</div>}/>
                </Routes>
             </main>
          </div>
      );
   };
};
