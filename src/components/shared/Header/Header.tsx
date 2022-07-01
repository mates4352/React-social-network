import s from './Header.module.scss'
import avatar from '../../../assets/images/avatar.jpg'

type headerType = {
   resultCode: null | number
}

export const Header: React.FC<headerType> = (props) => {
   const {resultCode} = props;

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
}
