import {Menu} from "./components/shared/Menu/Menu";
import s from './App.module.scss';
import HeaderContainer from "./components/shared/Header/Header-container";
import React from "react";
import RoutersMainContainer from "./routes/Routers-main-container";

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
