import s from './App.module.scss';

import {Header} from "./shared/shared_components/Header/Header";
import {Menu} from "./shared/shared_components/Menu/Menu";
import {Footer} from "./shared/shared_components/Footer/Footer";

const App = () => {
   return (
       <div className={s.page}>
          <Header/>
          <Menu/>

          <main className={s.content}>

          </main>

          <Footer/>
       </div>
   );
}

export default App;
