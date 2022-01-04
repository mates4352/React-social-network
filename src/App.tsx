import s from './App.module.scss';

import {Header} from "./shared/shared_components/Header/Header";
import {Menu} from "./shared/shared_components/Menu/Menu";
import {Footer} from "./shared/shared_components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Account} from "./features/account/Account";
import {Messages} from "./features/messages/Messages";
import {Music} from "./features/music/Music";
import {Settings} from "./features/settings/Settings";
import {News} from "./features/news/News";
import {Help} from "./features/help/Help";

const App = () => {
   return (
       <BrowserRouter>
          <div className={s.page}>
             <Header/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path="Account" element={<Account/>}/>
                   <Route path="Messages" element={<Messages/>}/>
                   <Route path="Music" element={<Music/>}/>
                   <Route path="News" element={<News/>}/>
                   <Route path="Settings" element={<Settings/>}/>
                   <Route path="Help" element={<Help/>}/>
                </Routes>t
             </main>

             <Footer/>
          </div>
       </BrowserRouter>
   );
}

export default App;
