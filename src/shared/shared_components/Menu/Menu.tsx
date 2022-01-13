import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";

export const Menu = () => {
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

   return (
       <nav className={s.menu}>
          <menu className={s.list}>
             <li className={s.item}>
                <NavLink className={classLink} to={"/"}>Account</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={classLink} to={"Communication/0"}>Communication</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={classLink} to={"Music"}>Music</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={classLink} to={"News"}>News</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={classLink} to={"Settings"}>Settings</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={classLink} to={"Help"}>Help</NavLink>
             </li>

             <li className={s.item}>
                <NavLink className={classLink} to={"Exit"}>Exit</NavLink>
             </li>
          </menu>
       </nav>
   );
}