import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from "./shared/shared_components/Header/Header";
import {Menu} from "./shared/shared_components/Menu/Menu";
import {Account} from "./features/account/Account";
import {Music} from "./features/music/Music";
import {Settings} from "./features/settings/Settings";
import {News} from "./features/news/News";
import {Help} from "./features/help/Help";
import {communicationType, Сommunication} from "./features/сommunication/Сommunication";
import {datePostType} from "./features/account/components/post/post";
import {dataPersonalType} from "./features/account/components/personal/Personal";

import s from './App.module.scss';

type AppType = {
   datePost: Array<datePostType>
   dataMessage: Array<communicationType>
   personal: dataPersonalType
}

const App:React.FC<AppType> = (props) => {
   return (
       <BrowserRouter>
          <div className={s.page}>
             <Header/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path="/" element={<Account datePost={props.datePost} personal={props.personal}/>}/>
                   <Route path="Communication/*" element={<Сommunication dataMessage={props.dataMessage}/>}/>
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
