import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./shared/shared_components/Header/Header";
import {Menu} from "./shared/shared_components/Menu/Menu";
import {Account, accountPageType} from "./features/account/Account";
import {Music} from "./features/music/Music";
import {Settings} from "./features/settings/Settings";
import {News} from "./features/news/News";
import {Help} from "./features/help/Help";
import {communicationDateType, Сommunication} from "./features/сommunication/Сommunication";

import s from './App.module.scss';


export type stateType = {
   accountPage: accountPageType
   communicationPage: communicationDateType
}

export type appType = {
  state: stateType
}

const App:React.FC<appType> = ({state}) => {
   return (
       <BrowserRouter>
          <div className={s.page}>
             <Header/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path="/" element={<Account accountPage={state.accountPage}/>}/>
                   <Route path="Communication/*" element={<Сommunication communicationPage={state.communicationPage}/>}/>
                   <Route path="Music" element={<Music/>}/>
                   <Route path="News" element={<News/>}/>
                   <Route path="Settings" element={<Settings/>}/>
                   <Route path="Help" element={<Help/>}/>
                </Routes>
             </main>
          </div>
       </BrowserRouter>
   );
}

export default App;
