import s from './Menu.module.scss'

export const Menu = () => {
   return (
       <nav className={s.menu}>
          <ul className={s.list}>
             <li className={s.item}>
                <a className={s.link} href="#">Account</a>
             </li>

             <li className={s.item}>
                <a className={s.link} href="#">Messages</a>
             </li>

             <li className={s.item}>
                <a className={s.link} href="#">Music</a>
             </li>

             <li className={s.item}>
                <a className={s.link} href="#">News</a>
             </li>

             <li className={s.item}>
                <a className={s.link} href="#">Option</a>
             </li>

             <li className={s.item}>
                <a className={s.link} href="#">Help</a>
             </li>

             <li className={s.item}>
                <a className={s.link} href="#">Exit</a>
             </li>
          </ul>
       </nav>
   );
}