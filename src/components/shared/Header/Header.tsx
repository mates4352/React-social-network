import React from "react";
import avatar from '../../../assets/images/avatar.jpg'
import s from './Header.module.scss'

type headerType = {
   resultCode: null | number
}


export class Header extends React.PureComponent<headerType> {
   constructor(props: headerType) {
      super(props);
   }

   render() {
      const {resultCode} = this.props;

      return (
          <header className={s.header}>
             <div className={s.container}>
                <img src="#" alt="Logo image"/>
                { resultCode ?  <p className={s.login}>login</p>  : <p className={s.login}>Sergey</p>}

                <div className={s.content}>
                   <div className={s.theme}>
                      <input className={s.theme_input} id="theme" type="checkbox"/>
                      <label className={s.theme_lable} htmlFor="theme"></label>
                   </div>

                   <div className={s.account}>
                      <button className={s.avatar} type="button">
                         <img src={avatar} alt="Avatar"/>
                      </button>
                   </div>
                </div>
             </div>
          </header>
      );
   };
};
