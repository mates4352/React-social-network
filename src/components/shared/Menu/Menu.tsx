import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";
import React from "react";

type menuType = {

}

export class Menu extends React.PureComponent<menuType> {
   constructor(props: menuType) {
      super(props);
   }
   render() {
      const {} = this.props;
      const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.link_active}` : s.link;

      return (
          <nav className={s.menu}>
             <ul className={s.list}>
                <li className={s.item}>
                   <NavLink className={classLink} to={"Account"}>Account</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"Communication"}>Communication</NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={"User"}>User</NavLink>
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
             </ul>
          </nav>
      );
   };
};
