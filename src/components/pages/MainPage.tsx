import React from 'react';
import s from './MainPage.module.scss';
import HeaderContainer from "../shared/Header/Header-container";
import Menu from "../shared/Menu/Menu";
import RoutersMainContainer from "../../routes/Routers-main-container";

type mainPageType = {

};

export class MainPage extends React.Component<mainPageType> {
   constructor(props: mainPageType) {
      super(props);
   }

   render() {
      const {} = this.props;
      return (
          <div className={s.page}>
             <HeaderContainer/>
             <Menu/>

             <main className={s.content}>
                <RoutersMainContainer/>
             </main>
          </div>
      );
   };
};
