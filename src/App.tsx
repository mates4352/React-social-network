import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./shared/shared_components/Header/Header";
import {Menu} from "./shared/shared_components/Menu/Menu";
import {Footer} from "./shared/shared_components/Footer/Footer";
import {Account} from "./features/account/Account";
import {Сommunication} from "./features/сommunication/Сommunication";
import {Music} from "./features/music/Music";
import {Settings} from "./features/settings/Settings";
import {News} from "./features/news/News";
import {Help} from "./features/help/Help";

import s from './App.module.scss';

const App = () => {
   return (
       <BrowserRouter>
          <div className={s.page}>
             <Header/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path="/" element={<Account/>}/>
                   <Route path="Communication" element={<Сommunication/>}/>
                   <Route path="Music" element={<Music/>}/>
                   <Route path="News" element={<News/>}/>
                   <Route path="Settings" element={<Settings/>}/>
                   <Route path="Help" element={<Help/>}/>
                </Routes>
             </main>
             <Footer/>
          </div>
       </BrowserRouter>
   );
}

export default App;
