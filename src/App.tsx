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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cupiditate deleniti dolorum exercitationem illum in incidunt inventore numquam quos recusandae reprehenderit repudiandae saepe, sapiente sequi sint sunt, suscipit vero.
          </main>

          <Footer/>
       </div>
   );
}

export default App;
