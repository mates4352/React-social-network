import {Menu} from "./shared/shared_components/Menu/Menu";
import s from './App.module.scss';
import HeaderContainer from "./shared/shared_components/Header/HeaderContainer";
import React from "react";
import RoutersMainContainer from "./routesSetting/RoutersMainContainer";


export type appType = {}

const App: React.FC<appType> = () => {
   return (
       <div className={s.page}>
          <HeaderContainer/>
          <Menu/>

          <main className={s.content}>
            <RoutersMainContainer/>
          </main>
       </div>
   );
}

export default App;
