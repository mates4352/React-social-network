import {BrowserRouter, Route, Routes, Navigate,} from "react-router-dom";

import {Menu} from "./shared/shared_components/Menu/Menu";
import {Music} from "./features/music/Music";
import {Settings} from "./features/settings/Settings";
import {News} from "./features/news/News";
import {Help} from "./features/help/Help";

import s from './App.module.scss';
import UserContainer from "./features/users/UserContainer";
import AccountContainer from "./features/account/AccountContainer";
import СommunicationContainer from "./features/сommunication/СommunicationContainer"
import HeaderContainer from "./shared/shared_components/Header/HeaderContainer";
import React from "react";

export type appType = {
}

const App:React.FC<appType> = () => {
   return (
       <BrowserRouter>
          <div className={s.page}>
             <HeaderContainer/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path={"/"} element={<Navigate replace to="/Account"/>}/>
                   <Route path="Account" element={<AccountContainer/>}>
                      <Route path=":id" element={<AccountContainer/>}/>
                   </Route>
                   <Route path="Communication/*" element={<СommunicationContainer/>}/>
                   <Route path="User" element={<UserContainer/>}/>
                   <Route path="Music" element={<Music/>}/>
                   <Route path="News" element={<News/>}/>
                   <Route path="Settings" element={<Settings/>}/>
                   <Route path="Help" element={<Help/>}/>
                   <Route path="*" element={<div>404</div>}/>
                </Routes>
             </main>
          </div>
       </BrowserRouter>
   );
}

export default App;
