import s from './App.module.scss';

import {Header} from "./shared/shared_components/Header/Header";
import {Menu} from "./shared/shared_components/Menu/Menu";
import {Footer} from "./shared/shared_components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
   return (
       <BrowserRouter>
          <div className={s.page}>
             <Header/>
             <Menu/>

             <main className={s.content}>
                <Routes>
                   <Route path="/" element={"text"}/>
                </Routes>
             </main>

             <Footer/>
          </div>
       </BrowserRouter>
   );
}

export default App;
