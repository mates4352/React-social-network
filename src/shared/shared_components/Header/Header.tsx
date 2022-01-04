import s from './Header.module.scss'

export const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.container}>
            <img src="" alt="Logo image"/>

            <div className={s.content}>
               <div className={s.theme}>
                  <input className={s.theme_input} id="theme" type="checkbox"/>
                  <label className={s.theme_lable} htmlFor="theme"></label>
               </div>

               <div className={s.account}>
                  <button className={s.avatar} type="button">
                     <img src="" alt="Avatar"/>
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
}
