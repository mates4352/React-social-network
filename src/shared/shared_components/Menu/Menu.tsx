import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";

export const Menu = () => {
   const active = (isActive: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

   return (
       <nav className={s.menu}>``
          <ul className={s.list}>
             <li className={s.item}>
                <NavLink className={active} to={"Account"}>Account</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={active} to={"Messages"}>Messages</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={active} to={"Music"}>Music</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={active} to={"News"}>News</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={active} to={"Settings"}>Settings</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={active} to={"Help"}>Help</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={active} to={"Exit"}>Exit</NavLink>
             </li>
          </ul>
       </nav>
   );
}