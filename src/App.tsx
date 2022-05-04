import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./shared/shared_components/Header/Header";
import {Menu} from "./shared/shared_components/Menu/Menu";
import {Music} from "./features/music/Music";
import {Settings} from "./features/settings/Settings";
import {News} from "./features/news/News";
import {Help} from "./features/help/Help";
import {AccountContainer} from "./features/account/AccountContainer";
import {СommunicationContainer} from "./features/сommunication/СommunicationContainer";

import s from './App.module.scss';
import UserContainer from "./features/users/UserContainer";

export type appType = {
}

const App:React.FC<appType> = () => {
   return (
       <BrowserRouter>
          <div className={s.page}>
             <Header/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path="/" element={<AccountContainer/>}/>
                   <Route path="Communication/*" element={<СommunicationContainer/>}/>
                   <Route path="User" element={<UserContainer/>}/>
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
